<template>
  <div class="poetry-elimination-game">
    <!-- 游戏顶部信息 -->
    <div class="game-header">
      <div class="game-controls">
        <button class="control-btn" @click="backToHall">
          <span class="back-icon">⬅</span>
        </button>
        <button class="control-btn" @click="pauseGame">
          <span class="pause-icon">⏸</span>
        </button>
        <div class="star-rating">
          <span v-for="i in 3" :key="i" class="star" :class="{ 'active': stars >= i }">★</span>
        </div>
        <div class="level-info">
          <span class="level">关卡 {{ currentLevel }}</span>
          <span class="time-left">剩余: {{ timeLeft }}s</span>
        </div>
        <button class="control-btn" @click="restartGame">
          <span class="restart-icon">🔄</span>
        </button>
      </div>

      <!-- 升级进度条 -->
      <div class="level-progress">
        <div class="level-title">
          <span class="current-level">{{ levelTitles[currentLevelIndex] }}</span>
          <span class="next-level">{{ levelTitles[currentLevelIndex + 1] || levelTitles[levelTitles.length - 1] }}</span>
        </div>
        <div class="progress-bar">
          <div class="progress-fill" :style="{ width: progressPercentage + '%' }"></div>
        </div>
        <div class="progress-text">再通过 {{ levelsToNextLevel }} 关晋升</div>
      </div>
    </div>

    <!-- 诗词原文展示 -->
    <div class="poetry-display">
      <div v-for="(poem, poemIndex) in currentPoems" :key="poemIndex" class="poem-item">
        <div class="poem-title">{{ poem.title }} - {{ poem.author }}</div>
        <div class="poem-content">
          <div v-for="(line, lineIndex) in poem.originalLines" :key="lineIndex" class="poem-line" :class="{ 'completed': isLineCompleted(poemIndex, lineIndex) }">
            {{ line }}
          </div>
        </div>
      </div>
    </div>

    <!-- 选择的句子展示 -->
    <div class="selected-sentence">
      <div class="selected-tiles">
        <div v-for="(tile, index) in selectedTiles" :key="index" class="selected-tile" :class="{ 'exploding': tile.exploding, 'error': tile.error }" @click="removeSelectedTile(index)">
          {{ tile.content }}
        </div>
        <div v-if="selectedTiles.length === 0" class="placeholder">点击下方碎片组成完整诗句</div>
      </div>
    </div>

    <!-- 游戏主区域 - 散落的卡片 -->
    <div class="game-board">
      <div class="tiles-container">
        <div v-for="(tile, index) in availableTiles" :key="tile.id" class="tile" :style="{ '--rotate': tile.rotation + 'deg' }" @click="selectTile(index)">
          {{ tile.content }}
        </div>
      </div>
    </div>

    <!-- 操作按钮 -->
    <div class="game-controls-bottom">
      <div class="action-buttons">
        <button class="action-btn hint-btn" @click="useHint">
          <span class="btn-icon">💡</span>
          <span class="btn-text">提示</span>
        </button>
        <button class="action-btn shuffle-btn" @click="shuffleTiles">
          <span class="btn-icon">🔀</span>
          <span class="btn-text">洗牌</span>
        </button>
        <button class="action-btn clear-btn" @click="clearSelection">
          <span class="btn-icon">🗑️</span>
          <span class="btn-text">清空</span>
        </button>
      </div>
    </div>

    <!-- 游戏结束弹窗 -->
    <div v-if="showGameOver" class="game-over-modal">
      <div class="modal-content">
        <h2>{{ gameOverType === 'win' ? '🎉 恭喜过关！' : '⏰ 时间到！' }}</h2>
        <div v-if="gameOverType === 'win'" class="win-info">
          <p>获得 {{ stars }} 星</p>
          <p>用时 {{ timeUsed }} 秒</p>
        </div>
        <div class="modal-buttons">
          <button @click="nextLevel" v-if="gameOverType === 'win'">下一关</button>
          <button @click="restartGame">重新开始</button>
          <button @click="backToHall">返回大厅</button>
        </div>
      </div>
    </div>

    <!-- 暂停弹窗 -->
    <div v-if="isPaused" class="pause-modal">
      <div class="modal-content">
        <h2>⏸ 游戏暂停</h2>
        <p>休息一下，准备继续挑战！</p>
        <div class="modal-buttons">
          <button @click="pauseGame">继续游戏</button>
          <button @click="restartGame">重新开始</button>
          <button @click="backToHall">返回大厅</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { poems } from '../data/poems';
import { soundEffect } from '../utils/soundEffect';

export default {
  name: 'PoetryEliminationGame',
  emits: ['back'],
  setup(props, { emit }) {
    const currentLevel = ref(1);
    const timeLeft = ref(300);
    const timeUsed = ref(0);
    const stars = ref(3);
    const showGameOver = ref(false);
    const gameOverType = ref('win');
    const isPaused = ref(false);

    const levelTitles = [
      '书童', '童生', '秀才', '举人', '进士', '探花', '榜眼', '状元',
      '学士', '翰林', '大学士', '诗仙', '诗圣'
    ];
    const currentLevelIndex = ref(0);
    const levelsToNextLevel = ref(5);
    const progressPercentage = computed(() => {
      return ((5 - levelsToNextLevel.value) / 5) * 100;
    });

    const currentPoems = ref([]);
    const allTiles = ref([]);
    const selectedTiles = ref([]);
    const completedLines = ref([]);
    const usedTileIds = ref(new Set());

    let timer = null;

    const initGame = () => {
      const poemIndices = [];
      while (poemIndices.length < 2) {
        const index = Math.floor(Math.random() * poems.length);
        if (!poemIndices.includes(index)) {
          poemIndices.push(index);
        }
      }

      currentPoems.value = poemIndices.map(index => {
        const poem = poems[index];
        const originalLines = poem.content.split('，').flatMap(line => line.split('。')).filter(line => line.trim());
        return {
          ...poem,
          originalLines
        };
      });

      completedLines.value = currentPoems.value.map(() => []);
      usedTileIds.value = new Set();
      selectedTiles.value = [];

      generateTiles();

      timeLeft.value = 300;
      timeUsed.value = 0;
      stars.value = 3;
      showGameOver.value = false;

      startTimer();
    };

    const generateTiles = () => {
      const tileContents = [];
      const usedIds = new Set();

      currentPoems.value.forEach(poem => {
        poem.originalLines.forEach(line => {
          const fragments = fragmentLine(line);
          fragments.forEach(fragment => {
            if (fragment.trim() && !usedIds.has(fragment)) {
              usedIds.add(fragment);
              tileContents.push({
                content: fragment,
                id: Math.random().toString(36).substr(2, 9),
                rotation: Math.floor(Math.random() * 30) - 15
              });
            }
          });
        });
      });

      for (let i = tileContents.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [tileContents[i], tileContents[j]] = [tileContents[j], tileContents[i]];
      }

      allTiles.value = tileContents;
    };

    const fragmentLine = (line) => {
      const fragments = [];
      let remaining = line;

      const patterns = [
        /^[，。！？、；：""''（）《》【】]/,
        /[，。！？、；：""''（）《》【】]$/,
        /^[a-zA-Z0-9]+/
      ];

      while (remaining.length > 0) {
        let matched = false;

        for (const pattern of patterns) {
          const match = remaining.match(pattern);
          if (match) {
            fragments.push(match[0]);
            remaining = remaining.slice(match[0].length);
            matched = true;
            break;
          }
        }

        if (!matched) {
          const length = Math.min(
            remaining.length <= 2 ? remaining.length : Math.floor(Math.random() * 3) + 1,
            remaining.length
          );
          fragments.push(remaining.slice(0, length));
          remaining = remaining.slice(length);
        }
      }

      return fragments.filter(f => f.trim());
    };

    const availableTiles = computed(() => {
      return allTiles.value.filter(tile => !usedTileIds.value.has(tile.id));
    });

    const isLineCompleted = (poemIndex, lineIndex) => {
      return completedLines.value[poemIndex]?.includes(lineIndex);
    };

    const selectTile = (index) => {
      if (isPaused.value) return;
      const tile = availableTiles.value[index];
      if (!tile) return;

      selectedTiles.value.push(tile);
      usedTileIds.value.add(tile.id);

      checkForCompleteLine();
    };

    const removeSelectedTile = (index) => {
      if (isPaused.value) return;
      const tile = selectedTiles.value[index];
      if (tile) {
        usedTileIds.value.delete(tile.id);
        selectedTiles.value.splice(index, 1);
      }
    };

    const checkForCompleteLine = () => {
      const currentSentence = selectedTiles.value.map(t => t.content).join('');

      let isMatch = false;
      let isPrefix = false;

      currentPoems.value.forEach((poem, poemIndex) => {
        poem.originalLines.forEach((line, lineIndex) => {
          if (isLineCompleted(poemIndex, lineIndex)) return;

          if (currentSentence === line) {
            isMatch = true;
            if (!completedLines.value[poemIndex]) {
              completedLines.value[poemIndex] = [];
            }
            completedLines.value[poemIndex].push(lineIndex);

            // 给已选碎片添加爆炸效果
            selectedTiles.value.forEach(tile => {
              tile.exploding = true;
            });
            
            // 播放爆炸音效
            soundEffect.playExplodeSound();
            
            // 延迟清空已选碎片，让爆炸效果显示
            setTimeout(() => {
              selectedTiles.value = [];
            }, 600);

            // 播放成功音效
            soundEffect.playSuccessSound();

            checkGameCompletion();
          } else if (line.startsWith(currentSentence)) {
            isPrefix = true;
          }
        });
      });

      // 如果不是任何诗句的前缀，说明拼错了
      if (!isMatch && !isPrefix && currentSentence.length > 0) {
        // 给已选碎片添加错误效果
        selectedTiles.value.forEach(tile => {
          tile.error = true;
        });
        
        // 播放错误音效
        soundEffect.playWrongSound();
        
        // 延迟清空已选碎片，让错误效果显示
        setTimeout(() => {
          selectedTiles.value.forEach(tile => {
            usedTileIds.value.delete(tile.id);
          });
          selectedTiles.value = [];
        }, 1000);
      }
    };

    const checkGameCompletion = () => {
      const allLinesCompleted = currentPoems.value.every((poem, poemIndex) => {
        return completedLines.value[poemIndex]?.length === poem.originalLines.length;
      });

      if (allLinesCompleted) {
        clearInterval(timer);
        gameOver('win');
      }
    };

    const gameOver = (type) => {
      gameOverType.value = type;
      if (type === 'win') {
        soundEffect.playSuccessSound();
      } else {
        soundEffect.playGameOverSound();
      }
      showGameOver.value = true;
    };

    const nextLevel = () => {
      currentLevel.value++;
      levelsToNextLevel.value--;

      if (levelsToNextLevel.value <= 0) {
        currentLevelIndex.value = Math.min(currentLevelIndex.value + 1, levelTitles.length - 1);
        levelsToNextLevel.value = 5;
      }

      initGame();
    };

    const restartGame = () => {
      initGame();
    };

    const backToHall = () => {
      emit('back');
    };

    const pauseGame = () => {
      isPaused.value = !isPaused.value;
      if (isPaused.value) {
        if (timer) clearInterval(timer);
      } else {
        startTimer();
      }
    };

    const shuffleTiles = () => {
      if (isPaused.value) return;
      const available = availableTiles.value;
      for (let i = available.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [available[i], available[j]] = [available[j], available[i]];
      }
      soundEffect.playShuffleSound();
    };

    const useHint = () => {
      if (isPaused.value) return;
      const currentSentence = selectedTiles.value.map(t => t.content).join('');

      currentPoems.value.forEach((poem) => {
        poem.originalLines.forEach((line) => {
          if (line.startsWith(currentSentence) && currentSentence.length > 0) {
            console.log('提示：下一字/词是 "' + line[currentSentence.length] + '"');
          }
        });
      });
    };

    const clearSelection = () => {
      if (isPaused.value) return;
      selectedTiles.value.forEach(tile => {
        usedTileIds.value.delete(tile.id);
      });
      selectedTiles.value = [];
    };

    const startTimer = () => {
      if (timer) clearInterval(timer);
      timer = setInterval(() => {
        timeLeft.value--;
        timeUsed.value++;

        if (timeLeft.value <= 0) {
          clearInterval(timer);
          gameOver('timeup');
        }

        if (timeLeft.value < 100 && stars.value > 1) stars.value = 1;
        else if (timeLeft.value < 200 && stars.value > 2) stars.value = 2;
      }, 1000);
    };

    onMounted(() => {
      initGame();
    });

    onUnmounted(() => {
      if (timer) clearInterval(timer);
    });

    return {
      currentLevel,
      timeLeft,
      timeUsed,
      stars,
      showGameOver,
      gameOverType,
      isPaused,
      levelTitles,
      currentLevelIndex,
      levelsToNextLevel,
      progressPercentage,
      currentPoems,
      availableTiles,
      selectedTiles,
      isLineCompleted,
      selectTile,
      removeSelectedTile,
      shuffleTiles,
      useHint,
      clearSelection,
      nextLevel,
      restartGame,
      backToHall,
      pauseGame
    };
  }
};
</script>

<style scoped>
.poetry-elimination-game {
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(135deg, #1a5f4a 0%, #2d8a6e 50%, #1a5f4a 100%);
  color: white;
  font-family: 'Arial', 'Microsoft YaHei', sans-serif;
  display: flex;
  flex-direction: column;
  padding: 15px;
  box-sizing: border-box;
}

.game-header {
  margin-bottom: 10px;
}

.game-controls {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  margin-bottom: 10px;
}

.control-btn {
  background: rgba(255, 255, 255, 0.2);
  border: none;
  color: white;
  font-size: 20px;
  padding: 8px 12px;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.2s;
}

.control-btn:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: scale(1.1);
}

.star-rating {
  display: flex;
  gap: 5px;
}

.star {
  font-size: 24px;
  color: #555;
  transition: all 0.3s;
}

.star.active {
  color: #ffd700;
  text-shadow: 0 0 10px #ffd700;
  animation: starPulse 1s ease-in-out infinite;
}

@keyframes starPulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.2); }
}

.level-info {
  text-align: center;
}

.level {
  font-weight: bold;
  font-size: 18px;
  display: block;
}

.time-left {
  font-size: 14px;
  color: #aaa;
}

.level-progress {
  background: rgba(255, 255, 255, 0.15);
  border-radius: 10px;
  padding: 8px 15px;
}

.level-title {
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  margin-bottom: 5px;
}

.progress-bar {
  height: 8px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 4px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #4ade80, #22c55e);
  border-radius: 4px;
  transition: width 0.5s ease;
}

.progress-text {
  font-size: 11px;
  text-align: center;
  margin-top: 3px;
  color: #ccc;
}

.poetry-display {
  background: rgba(255, 255, 255, 0.95);
  border-radius: 15px;
  padding: 15px;
  margin-bottom: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.poem-item {
  margin-bottom: 10px;
  padding-bottom: 10px;
  border-bottom: 1px dashed #ddd;
}

.poem-item:last-child {
  margin-bottom: 0;
  padding-bottom: 0;
  border-bottom: none;
}

.poem-title {
  font-weight: bold;
  color: #2d6a4f;
  margin-bottom: 5px;
  font-size: 16px;
}

.poem-content {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.poem-line {
  color: #333;
  padding: 5px 12px;
  background: #f0fdf4;
  border-radius: 20px;
  font-size: 15px;
  transition: all 0.5s ease;
  border: 2px solid transparent;
}

.poem-line.completed {
  background: linear-gradient(135deg, #4ade80, #22c55e);
  color: white;
  animation: explode 0.6s ease forwards;
  border-color: #166534;
}

@keyframes explode {
  0% { transform: scale(1); opacity: 1; box-shadow: 0 0 0 0 rgba(74, 222, 128, 0.7); }
  50% { transform: scale(1.5); opacity: 0.8; box-shadow: 0 0 20px 10px rgba(74, 222, 128, 0.5); }
  100% { transform: scale(1.1); opacity: 0.6; box-shadow: 0 0 0 0 rgba(74, 222, 128, 0); }
}

.selected-sentence {
  background: rgba(255, 255, 255, 0.2);
  border-radius: 15px;
  padding: 15px;
  margin-bottom: 10px;
  min-height: 60px;
  border: 3px dashed rgba(255, 255, 255, 0.5);
}

.selected-tiles {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: center;
}

.selected-tile {
  background: linear-gradient(135deg, #fbbf24, #f59e0b);
  color: #333;
  padding: 8px 16px;
  border-radius: 10px;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
  animation: tileSelect 0.3s ease;
}

@keyframes tileSelect {
  0% { transform: scale(0.8); opacity: 0; }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); opacity: 1; }
}

.selected-tile:hover {
  transform: scale(1.1);
  background: linear-gradient(135deg, #f59e0b, #d97706);
}

.selected-tile.exploding {
  animation: tileExplode 0.6s ease forwards;
}

.selected-tile.error {
  animation: tileError 1s ease forwards;
  background: linear-gradient(135deg, #f87171, #ef4444);
  color: white;
}

@keyframes tileExplode {
  0% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.5); opacity: 0.8; }
  100% { transform: scale(0.1); opacity: 0; }
}

@keyframes tileError {
  0% { transform: scale(1); }
  25% { transform: scale(1.1) rotate(5deg); }
  50% { transform: scale(1.1) rotate(-5deg); }
  75% { transform: scale(1.1) rotate(5deg); }
  100% { transform: scale(1); }
}

.placeholder {
  color: rgba(255, 255, 255, 0.7);
  font-size: 14px;
  text-align: center;
  padding: 10px;
}

.game-board {
  flex: 1;
  margin-bottom: 10px;
  overflow: auto;
}

.tiles-container {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: center;
  padding: 20px;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 15px;
  min-height: 200px;
}

.tile {
  background: white;
  color: #1a5f4a;
  padding: 12px 18px;
  border-radius: 12px;
  font-size: 17px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  transform: rotate(var(--rotate, 0deg));
  user-select: none;
}

.tile:hover {
  transform: scale(1.15) rotate(var(--rotate, 0deg));
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.3);
  z-index: 10;
}

.tile:active {
  transform: scale(1.05) rotate(var(--rotate, 0deg));
}

.tiles-container .tile:nth-child(3n+1) { --rotate: -8deg; }
.tiles-container .tile:nth-child(3n+2) { --rotate: 3deg; }
.tiles-container .tile:nth-child(3n+3) { --rotate: -3deg; }
.tiles-container .tile:nth-child(5n+1) { --rotate: 7deg; }
.tiles-container .tile:nth-child(7n+1) { --rotate: -12deg; }
.tiles-container .tile:nth-child(11n+1) { --rotate: 5deg; }

.game-controls-bottom {
  margin-top: auto;
}

.action-buttons {
  display: flex;
  justify-content: space-around;
  gap: 10px;
}

.action-btn {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(255, 255, 255, 0.2);
  border: none;
  border-radius: 15px;
  padding: 12px 20px;
  color: white;
  cursor: pointer;
  transition: all 0.2s;
  flex: 1;
}

.action-btn:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: translateY(-3px);
}

.btn-icon {
  font-size: 28px;
  margin-bottom: 5px;
}

.btn-text {
  font-size: 14px;
  font-weight: bold;
}

.game-over-modal,
.pause-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  animation: fadeIn 0.3s ease;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.modal-content {
  background: linear-gradient(135deg, #1a5f4a, #2d8a6e);
  border-radius: 25px;
  padding: 30px 40px;
  text-align: center;
  border: 4px solid #4ade80;
  max-width: 400px;
  width: 90%;
  animation: modalPop 0.4s ease;
}

@keyframes modalPop {
  0% { transform: scale(0.5); opacity: 0; }
  70% { transform: scale(1.05); }
  100% { transform: scale(1); opacity: 1; }
}

.modal-content h2 {
  font-size: 28px;
  margin-bottom: 20px;
  color: #ffd700;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
}

.win-info {
  margin-bottom: 20px;
  font-size: 18px;
}

.win-info p {
  margin: 8px 0;
}

.modal-buttons {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.modal-buttons button {
  background: linear-gradient(135deg, #4ade80, #22c55e);
  border: none;
  border-radius: 12px;
  padding: 14px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s;
  color: white;
}

.modal-buttons button:hover {
  background: linear-gradient(135deg, #22c55e, #16a34a);
  transform: scale(1.05);
}

@media (max-width: 768px) {
  .poetry-elimination-game {
    padding: 10px;
  }

  .tile {
    padding: 10px 14px;
    font-size: 15px;
  }

  .action-btn {
    padding: 10px 15px;
  }

  .btn-icon {
    font-size: 24px;
  }

  .poem-line {
    font-size: 13px;
    padding: 4px 10px;
  }
}
</style>