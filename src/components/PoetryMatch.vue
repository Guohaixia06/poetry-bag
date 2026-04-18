<template>
  <div class="animate-fade-in">
    <button @click="$emit('back')" class="mb-6 px-6 py-3 bg-gradient-to-r from-gray-300 to-gray-400 dark:from-gray-600 dark:to-gray-700 text-gray-800 dark:text-gray-200 rounded-2xl hover:from-gray-400 hover:to-gray-500 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center space-x-2">
      <span>←</span>
      <span class="font-semibold">返回游戏大厅</span>
    </button>

    <div class="text-center mb-6">
      <h2 class="text-3xl font-bold mb-2 bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 bg-clip-text text-transparent">💫 诗词消消乐 💫</h2>
      <div class="flex justify-center items-center space-x-6 text-lg">
        <span class="px-4 py-2 bg-gradient-to-r from-yellow-100 to-orange-100 dark:from-yellow-900/30 dark:to-orange-900/30 rounded-full">
          <span class="text-yellow-600 dark:text-yellow-400 font-bold">第 {{ currentLevel }} 关</span>
        </span>
        <span class="px-4 py-2 bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 rounded-full">
          <span class="text-green-600 dark:text-green-400">💰 {{ totalCoins }} 金币</span>
        </span>
        <span class="px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 rounded-full">
          <span class="text-purple-600 dark:text-purple-400">⭐ {{ score }} 分</span>
        </span>
      </div>
    </div>

    <div v-if="gameState === 'ready'" class="max-w-2xl mx-auto">
      <div class="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-8 border-4 border-yellow-200 dark:border-yellow-700">
        <h3 class="text-2xl font-bold text-center mb-6 text-gray-800 dark:text-white">🎮 游戏规则</h3>
        <div class="text-gray-600 dark:text-gray-300 space-y-4 mb-8">
          <p>🧩 屏幕上会显示打乱的诗句字或词</p>
          <p>✨ 点击两个可以组成完整诗句的字或词</p>
          <p>📜 每次消除一句诗，完成3句即可过关</p>
          <p>⬆️ 关卡越高，诗词难度越大</p>
          <p>💰 过关奖励金币，关卡越高金币越多</p>
        </div>
        <div class="flex justify-center">
          <button @click="startGame" class="px-12 py-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-bold rounded-2xl hover:from-yellow-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-110 shadow-lg text-xl">
            🎯 开始游戏
          </button>
        </div>
      </div>
    </div>

    <div v-else-if="gameState === 'playing'" class="max-w-4xl mx-auto">
      <div class="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-6 border-4 border-yellow-200 dark:border-yellow-700 mb-6">
        <div class="flex justify-between items-center mb-4">
          <div class="text-lg font-medium text-gray-600 dark:text-gray-300">
            进度：{{ completedLines }}/3 句
          </div>
          <div class="flex space-x-2">
            <span v-for="i in 3" :key="i" class="text-3xl">
              {{ i <= completedLines ? '✅' : '⬜' }}
            </span>
          </div>
        </div>
        <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
          <div class="bg-gradient-to-r from-yellow-400 to-orange-500 h-3 rounded-full transition-all duration-500" :style="{ width: (completedLines / 3 * 100) + '%' }"></div>
        </div>
      </div>

      <div class="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 mb-6">
        <div
          v-for="(piece, index) in shuffledPieces"
          :key="index"
          class="relative"
        >
          <button
            v-if="piece"
            @click="selectPiece(index)"
            class="w-full min-h-[60px] px-3 py-2 rounded-xl shadow-md transition-all duration-300 transform hover:scale-105 flex items-center justify-center text-center"
            :class="getPieceClass(piece, index)"
          >
            <span class="text-md font-medium dark:text-gray-800">{{ piece.text }}</span>
          </button>
        </div>
      </div>

      <div v-if="selectedPieces.length > 0" class="bg-gradient-to-r from-yellow-100 to-orange-100 dark:from-yellow-900/30 dark:to-orange-900/30 rounded-2xl p-4 mb-6">
        <div class="text-center text-gray-600 dark:text-gray-300 mb-2">已选择：</div>
        <div class="flex justify-center items-center space-x-4">
          <span v-for="(idx, i) in selectedPieces" :key="i" class="px-4 py-2 bg-white dark:bg-gray-800 rounded-xl shadow text-md">
            {{ shuffledPieces[idx]?.text }}
          </span>
          <span v-if="selectedPieces.length === 1" class="text-2xl text-gray-400 animate-pulse">?</span>
        </div>
      </div>

      <div class="flex justify-center space-x-4">
        <button
          @click="clearSelection"
          :disabled="selectedPieces.length === 0"
          class="px-6 py-3 bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-xl hover:bg-gray-300 dark:hover:bg-gray-600 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          🔄 重新选择
        </button>
        <button
          @click="checkMatch"
          :disabled="selectedPieces.length !== 2"
          class="px-6 py-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-xl hover:from-yellow-600 hover:to-orange-600 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
        >
          ✨ 检查匹配
        </button>
      </div>
    </div>

    <div v-else-if="gameState === 'levelComplete'" class="max-w-2xl mx-auto">
      <div class="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-8 border-4 border-green-200 dark:border-green-700 text-center">
        <div class="text-8xl mb-4 animate-bounce">🎉</div>
        <h3 class="text-3xl font-bold mb-4 text-green-600 dark:text-green-400">恭喜过关！</h3>
        <p class="text-xl text-gray-600 dark:text-gray-300 mb-6">
          完成第 {{ currentLevel }} 关
        </p>
        <div class="bg-gradient-to-r from-yellow-100 to-orange-100 dark:from-yellow-900/30 dark:to-orange-900/30 rounded-2xl p-6 mb-6">
          <p class="text-lg text-gray-600 dark:text-gray-300 mb-2">获得金币奖励</p>
          <p class="text-4xl font-bold text-yellow-600 dark:text-yellow-400">+{{ levelReward }} 💰</p>
        </div>
        <div class="flex justify-center space-x-4">
          <button @click="returnToHall" class="px-6 py-3 bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-xl hover:bg-gray-300 dark:hover:bg-gray-600 transition-all duration-200">
            🏠 返回大厅
          </button>
          <button @click="nextLevel" class="px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-bold rounded-xl hover:from-green-600 hover:to-emerald-600 transition-all duration-300 transform hover:scale-105 shadow-lg">
            ➡️ 下一关
          </button>
        </div>
      </div>
    </div>

    <div v-else-if="gameState === 'gameOver'" class="max-w-2xl mx-auto">
      <div class="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-8 border-4 border-red-200 dark:border-red-700 text-center">
        <div class="text-8xl mb-4">😢</div>
        <h3 class="text-3xl font-bold mb-4 text-red-600 dark:text-red-400">游戏结束</h3>
        <p class="text-xl text-gray-600 dark:text-gray-300 mb-6">
          你完成了 {{ completedLevels }} 关，获得了 {{ totalCoins }} 金币
        </p>
        <div class="bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 rounded-2xl p-6 mb-6">
          <p class="text-lg text-gray-600 dark:text-gray-300 mb-2">最终得分</p>
          <p class="text-4xl font-bold text-purple-600 dark:text-purple-400">⭐ {{ score }} 分</p>
        </div>
        <div class="flex justify-center space-x-4">
          <button @click="returnToHall" class="px-6 py-3 bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-xl hover:bg-gray-300 dark:hover:bg-gray-600 transition-all duration-200">
            🏠 返回大厅
          </button>
          <button @click="restartGame" class="px-8 py-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-bold rounded-xl hover:from-yellow-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg">
            🔄 再玩一次
          </button>
        </div>
      </div>
    </div>

    <div v-if="showMatchResult" class="fixed inset-0 bg-black/50 flex items-center justify-center z-50" @click="showMatchResult = false">
      <div class="bg-white dark:bg-gray-800 rounded-3xl p-8 max-w-md mx-4 text-center transform scale-100 animate-bounce">
        <div class="text-6xl mb-4">{{ matchResult === 'success' ? '✨' : '❌' }}</div>
        <p class="text-2xl font-bold mb-4" :class="matchResult === 'success' ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'">
          {{ matchResult === 'success' ? '匹配成功！' : '不匹配！' }}
        </p>
        <p v-if="matchResult === 'success'" class="text-gray-600 dark:text-gray-300 mb-4">
          {{ matchedPoem }}
        </p>
        <button @click="showMatchResult = false" class="px-6 py-2 bg-gray-200 dark:bg-gray-700 rounded-xl">
          继续
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { poems } from '../data/poems.js'

export default {
  name: 'PoetryMatch',
  emits: ['back'],
  data() {
    return {
      gameState: 'ready',
      currentLevel: 1,
      score: 0,
      totalCoins: 0,
      completedLines: 0,
      completedLevels: 0,
      shuffledPieces: [],
      selectedPieces: [],
      currentPoems: [],
      matchedPairs: [],
      levelReward: 10,
      showMatchResult: false,
      matchResult: '',
      matchedPoem: ''
    }
  },
  mounted() {
    this.loadCoins()
  },
  methods: {
    loadCoins() {
      try {
        const userData = JSON.parse(localStorage.getItem('poetryUser') || '{}')
        this.totalCoins = userData.coins || 0
      } catch (e) {
        this.totalCoins = 0
      }
    },
    saveCoins() {
      try {
        const userData = JSON.parse(localStorage.getItem('poetryUser') || '{}')
        userData.coins = this.totalCoins
        localStorage.setItem('poetryUser', JSON.stringify(userData))
      } catch (e) {
        console.error('Error saving coins:', e)
      }
    },
    shuffleArray(array) {
      const newArray = [...array]
      for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]]
      }
      return newArray
    },
    getDifficultyRange() {
      if (this.currentLevel <= 3) {
        return { min: 1, max: 20 }
      } else if (this.currentLevel <= 6) {
        return { min: 20, max: 50 }
      } else if (this.currentLevel <= 10) {
        return { min: 50, max: 80 }
      } else {
        return { min: 80, max: 115 }
      }
    },
    generateLevelPoems() {
      const range = this.getDifficultyRange()
      const levelPoems = poems.filter(p => {
        const id = parseInt(p.id) || 0
        return id >= range.min && id <= range.max
      })

      if (levelPoems.length < 3) {
        return this.shuffleArray(poems).slice(0, 3)
      }

      return this.shuffleArray(levelPoems).slice(0, 3)
    },
    startGame() {
      this.currentLevel = 1
      this.score = 0
      this.completedLevels = 0
      this.startLevel()
    },
    startLevel() {
      this.completedLines = 0
      this.selectedPieces = []
      this.matchedPairs = []
      this.currentPoems = this.generateLevelPoems()
      this.levelReward = 10 + (this.currentLevel - 1) * 5

      const pieces = []
      this.currentPoems.forEach(poem => {
        const lines = poem.content.split(/[，。？！、\n]/).filter(l => l.trim())
        const randomLine = lines[Math.floor(Math.random() * lines.length)]
        
        // 将句子打散成字或词
        const linePieces = this.splitIntoPieces(randomLine)
        linePieces.forEach(piece => {
          pieces.push({
            text: piece,
            line: randomLine,
            poemId: poem.id
          })
        })
      })

      this.shuffledPieces = this.shuffleArray(pieces)
      this.gameState = 'playing'
    },
    splitIntoPieces(line) {
      // 简单的分词逻辑，优先按词语分割，否则按字分割
      const words = line.split('')
      const pieces = []
      
      // 尝试组合常见词语
      const commonWords = ['明月', '故乡', '春风', '流水', '花开', '夕阳', '青山', '白云', '黄河', '长江']
      
      let i = 0
      while (i < words.length) {
        let found = false
        for (let j = 2; j <= 3; j++) {
          if (i + j <= words.length) {
            const word = words.slice(i, i + j).join('')
            if (commonWords.includes(word)) {
              pieces.push(word)
              i += j
              found = true
              break
            }
          }
        }
        if (!found) {
          pieces.push(words[i])
          i++
        }
      }
      
      return pieces
    },
    selectPiece(index) {
      if (this.matchedPairs.includes(index)) return
      if (this.selectedPieces.includes(index)) {
        this.selectedPieces = this.selectedPieces.filter(i => i !== index)
        return
      }
      if (this.selectedPieces.length >= 2) return

      this.selectedPieces.push(index)
    },
    getPieceClass(piece, index) {
      if (this.matchedPairs.includes(index)) {
        return 'bg-green-200 dark:bg-green-800 opacity-50'
      }
      if (this.selectedPieces.includes(index)) {
        return 'bg-yellow-200 dark:bg-yellow-800 ring-4 ring-yellow-400 dark:ring-yellow-600 transform scale-105'
      }
      return 'bg-white dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 border-2 border-gray-200 dark:border-gray-600'
    },
    clearSelection() {
      this.selectedPieces = []
    },
    checkMatch() {
      if (this.selectedPieces.length !== 2) return

      const [idx1, idx2] = this.selectedPieces
      const piece1 = this.shuffledPieces[idx1]
      const piece2 = this.shuffledPieces[idx2]

      const isMatch = piece1.line === piece2.line && piece1.text !== piece2.text

      if (isMatch) {
        this.matchResult = 'success'
        this.matchedPoem = piece1.line
        this.matchedPairs.push(idx1, idx2)
        this.completedLines++
        this.score += 10 * this.currentLevel

        setTimeout(() => {
          this.showMatchResult = false
          this.selectedPieces = []

          if (this.completedLines >= 3) {
            this.levelComplete()
          }
        }, 1500)
      } else {
        this.matchResult = 'fail'
        setTimeout(() => {
          this.showMatchResult = false
          this.selectedPieces = []
        }, 1000)
      }

      this.showMatchResult = true
    },
    levelComplete() {
      this.totalCoins += this.levelReward
      this.completedLevels++
      this.saveCoins()
      this.gameState = 'levelComplete'
    },
    nextLevel() {
      this.currentLevel++
      this.startLevel()
    },
    restartGame() {
      this.startGame()
    },
    returnToHall() {
      this.saveGameRecord()
      this.$emit('back')
    },
    saveGameRecord() {
      try {
        const gameHistory = JSON.parse(localStorage.getItem('gameHistory') || '[]')
        gameHistory.unshift({
          gameType: 'poetryMatch',
          score: this.score,
          level: this.completedLevels,
          coins: this.totalCoins,
          correctCount: this.completedLines,
          totalQuestions: 3,
          timestamp: Date.now()
        })
        localStorage.setItem('gameHistory', JSON.stringify(gameHistory.slice(0, 20)))
      } catch (e) {
        console.error('Error saving game record:', e)
      }
    }
  }
}
</script>

<style scoped>
.animate-fade-in {
  animation: fadeIn 0.5s ease-in;
}

@keyframes fadeIn {
  0% { opacity: 0; transform: translateY(10px); }
  100% { opacity: 1; transform: translateY(0); }
}
</style>
