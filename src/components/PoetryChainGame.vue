<template>
  <div class="min-h-screen bg-gradient-to-br from-green-50 to-teal-50 p-4">
    <div class="max-w-2xl mx-auto">
      <!-- 游戏顶部信息 -->
      <div class="bg-white rounded-xl shadow-lg p-4 mb-4">
        <div class="flex justify-between items-center mb-3">
          <button @click="pauseGame" class="text-gray-600 hover:text-gray-800 text-2xl">⏸</button>
          <div class="flex items-center gap-4">
            <div class="star-rating">
              <span v-for="i in 3" :key="i" class="star" :class="{ 'active': stars >= i }">★</span>
            </div>
            <div class="text-lg font-semibold text-green-600">
              得分: {{ score }} / {{ totalScore }}
            </div>
            <button @click="restartGame" class="text-gray-600 hover:text-gray-800 text-2xl">🔄</button>
          </div>
        </div>
        
        <div class="flex justify-between items-center mb-2">
          <span class="text-lg font-bold text-gray-800">诗词接龙 - 第 {{ currentLevel }} 关</span>
          <span class="text-sm text-gray-600">{{ currentLevelTitle }}</span>
        </div>
        
        <!-- 升级进度条 -->
        <div class="level-progress">
          <div class="level-title">
            <span class="current-level">{{ currentLevelTitle }}</span>
            <span class="next-level">{{ nextLevelTitle }}</span>
          </div>
          <div class="progress-bar">
            <div class="progress-fill" :style="{ width: progressPercentage + '%' }"></div>
          </div>
          <div class="progress-text">再通过 {{ levelsToNextLevel }} 关晋升</div>
        </div>
        
        <div class="flex justify-between text-sm text-gray-600 mt-2">
          <span>第 {{ currentQuestionIndex + 1 }} / {{ questions.length }} 题</span>
          <span>正确率: {{ correctCount }} / {{ currentQuestionIndex + (answered ? 1 : 0) }}</span>
        </div>
        <div class="w-full bg-gray-200 rounded-full h-2 mt-1">
          <div 
            class="bg-green-600 h-2 rounded-full transition-all duration-300"
            :style="{ width: progressWidth }"
          ></div>
        </div>
      </div>

      <div v-if="gameState === 'playing'" class="bg-white rounded-xl shadow-lg p-6">
        <div class="mb-6">
          <p v-if="currentQuestion" class="text-xl font-bold text-gray-800 mb-2">{{ currentQuestion.poemTitle }}</p>
          <div v-if="currentQuestion" class="bg-gradient-to-r from-green-50 to-teal-50 rounded-lg p-4">
            <p class="text-lg text-gray-600 mb-2">请接下一句:</p>
            <p class="text-2xl font-bold text-gray-800">{{ currentQuestion.firstLine }}</p>
          </div>
          <div v-else class="text-center py-8">
            <p class="text-gray-600">游戏初始化中...</p>
          </div>
        </div>

        <div class="mb-6">
          <input 
            v-model="userAnswer"
            type="text"
            class="w-full text-center text-xl font-bold border-2 border-green-300 rounded-lg p-3 focus:outline-none focus:border-green-500"
            :class="{ 'border-red-400 bg-red-50': showError, 'border-green-300': !showError }"
            placeholder="请输入下一句"
            @keyup.enter="submitAnswer"
            :disabled="answered"
          >
        </div>

        <div class="flex space-x-4">
          <button 
            @click="submitAnswer"
            class="flex-1 bg-green-600 text-white font-bold py-3 rounded-lg hover:bg-green-700 transition-colors"
            :disabled="answered"
          >
            提交答案
          </button>
          <button 
            @click="giveUp"
            class="px-6 bg-gray-200 text-gray-700 font-bold py-3 rounded-lg hover:bg-gray-300 transition-colors"
            :disabled="answered"
          >
            跳过
          </button>
        </div>

        <div v-if="feedback" class="mt-4 p-4 rounded-lg" :class="feedbackClass">
          <p class="text-center font-bold mb-2">{{ feedback }}</p>
          <p v-if="showCorrectAnswer" class="text-center text-sm">
            正确答案是: <span class="text-green-600">{{ currentQuestion.secondLine }}</span>
          </p>
        </div>

        <div v-if="answered" class="mt-4 p-4 bg-blue-50 rounded-lg">
          <p class="text-center text-blue-800">
            完整诗句: {{ currentQuestion.firstLine }}，{{ currentQuestion.secondLine }}
          </p>
        </div>
      </div>

      <div v-else-if="gameState === 'finished'" class="bg-white rounded-xl shadow-lg p-6">
        <div class="text-center">
          <div class="text-6xl mb-4">{{ scoreEmoji }}</div>
          <h3 class="text-2xl font-bold text-gray-800 mb-2">恭喜过关！🎉</h3>
          <p class="text-xl text-gray-600 mb-4">
            你的得分: <span class="text-green-600 font-bold">{{ score }}</span> / {{ totalScore }}
          </p>
          <p class="text-gray-600 mb-2">正确率: {{ correctCount }} / {{ questions.length }}</p>
          <p class="text-gray-600 mb-2">获得 {{ stars }} 星</p>
          <p class="text-gray-600 mb-4">{{ scoreMessage }}</p>
          <div class="flex space-x-4">
            <button 
              @click="nextLevel"
              class="flex-1 bg-green-600 text-white font-bold py-3 rounded-lg hover:bg-green-700 transition-colors"
            >
              下一关
            </button>
            <button 
              @click="restartGame"
              class="px-6 bg-gray-200 text-gray-700 font-bold py-3 rounded-lg hover:bg-gray-300 transition-colors"
            >
              重玩
            </button>
            <button 
              @click="backToHall"
              class="px-6 bg-gray-200 text-gray-700 font-bold py-3 rounded-lg hover:bg-gray-300 transition-colors"
            >
              返回大厅
            </button>
          </div>
        </div>
      </div>

      <!-- 暂停弹窗 -->
      <div v-if="isPaused" class="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div class="bg-white rounded-xl p-6 max-w-sm w-full mx-4">
          <h3 class="text-xl font-bold text-center mb-4">⏸ 游戏暂停</h3>
          <p class="text-gray-600 text-center mb-4">休息一下，准备继续挑战！</p>
          <div class="flex flex-col space-y-2">
            <button 
              @click="pauseGame"
              class="w-full bg-green-600 text-white font-bold py-3 rounded-lg hover:bg-green-700"
            >
              继续游戏
            </button>
            <button 
              @click="restartGame"
              class="w-full bg-gray-200 text-gray-700 font-bold py-3 rounded-lg hover:bg-gray-300"
            >
              重新开始
            </button>
            <button 
              @click="backToHall"
              class="w-full bg-gray-200 text-gray-700 font-bold py-3 rounded-lg hover:bg-gray-300"
            >
              返回大厅
            </button>
          </div>
        </div>
      </div>

      <div class="text-center mt-6">
        <button 
          @click="backToHall"
          class="text-gray-600 hover:text-gray-800"
        >
          ← 返回游戏选择
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { soundEffect } from '../utils/soundEffect.js'
import { poetryChainQuestions } from '../data/generateGameData.js'

export default {
  name: 'PoetryChainGame',
  emits: ['back', 'gameOver'],
  data() {
    return {
      questions: [],
      currentQuestionIndex: 0,
      score: 0,
      totalScore: 0,
      correctCount: 0,
      userAnswer: '',
      gameState: 'playing',
      feedback: '',
      feedbackClass: '',
      showCorrectAnswer: false,
      answered: false,
      showError: false,
      isPaused: false,
      currentLevel: 1,
      stars: 3,
      levelTitles: ['书童', '童生', '秀才', '举人', '进士', '探花', '榜眼', '状元', '学士', '翰林', '大学士', '诗仙', '诗圣'],
      currentLevelIndex: 0,
      levelsToNextLevel: 5
    }
  },
  computed: {
    currentQuestion() {
      return this.questions[this.currentQuestionIndex]
    },
    progressWidth() {
      return `${((this.currentQuestionIndex + 1) / this.questions.length) * 100}%`
    },
    progressPercentage() {
      return ((5 - this.levelsToNextLevel) / 5) * 100
    },
    currentLevelTitle() {
      return this.levelTitles[this.currentLevelIndex]
    },
    nextLevelTitle() {
      return this.levelTitles[this.currentLevelIndex + 1] || this.levelTitles[this.levelTitles.length - 1]
    },
    scoreEmoji() {
      const rate = this.score / this.totalScore
      if (rate === 1) return '🎉'
      if (rate >= 0.8) return '👏'
      if (rate >= 0.6) return '😊'
      if (rate >= 0.4) return '🙂'
      return '💪'
    },
    scoreMessage() {
      const rate = this.score / this.totalScore
      if (rate === 1) return '太棒了！全对！你真是诗词小达人！'
      if (rate >= 0.8) return '很不错！继续加油！'
      if (rate >= 0.6) return '做得还可以，再多背背诗吧！'
      if (rate >= 0.4) return '加油！多读读诗歌会有帮助的！'
      return '别灰心，多背背古诗吧！'
    }
  },
  mounted() {
    this.initGame()
  },
  methods: {
    initGame() {
      this.questions = this.prepareQuestions()
      this.totalScore = this.questions.length * 10
      this.score = 0
      this.correctCount = 0
      this.currentQuestionIndex = 0
      this.gameState = 'playing'
      this.userAnswer = ''
      this.feedback = ''
      this.showCorrectAnswer = false
      this.answered = false
      this.showError = false
      this.isPaused = false
      this.stars = 3
      soundEffect.initAudio()
    },
    prepareQuestions() {
      // 根据当前关卡确定难度范围
      const difficultyLevel = Math.min(Math.floor(this.currentLevel / 3) + 1, 3)
      
      // 按难度分组题目
      const easyQuestions = poetryChainQuestions.filter((_, index) => index % 3 === 0)
      const mediumQuestions = poetryChainQuestions.filter((_, index) => index % 3 === 1)
      const hardQuestions = poetryChainQuestions.filter((_, index) => index % 3 === 2)
      
      // 根据难度级别选择题目
      let selectedQuestions
      switch (difficultyLevel) {
        case 1: // 简单
          selectedQuestions = [...easyQuestions, ...mediumQuestions].slice(0, 15)
          break
        case 2: // 中等
          selectedQuestions = [...mediumQuestions, ...hardQuestions, ...easyQuestions].slice(0, 15)
          break
        case 3: // 困难
          selectedQuestions = [...hardQuestions, ...mediumQuestions].slice(0, 15)
          break
        default:
          selectedQuestions = poetryChainQuestions
      }
      
      const shuffled = [...selectedQuestions].sort(() => Math.random() - 0.5)
      return shuffled.slice(0, 10).map(poem => ({
        poemTitle: poem.poemTitle,
        firstLine: poem.firstLine,
        secondLine: poem.secondLine
      }))
    },
    submitAnswer() {
      if (this.answered) return
      if (!this.userAnswer.trim()) {
        this.showError = true
        setTimeout(() => { this.showError = false }, 500)
        return
      }

      const isCorrect = this.userAnswer.trim() === this.currentQuestion.secondLine
      this.answered = true

      if (isCorrect) {
        this.score += 10
        this.correctCount++
        this.showFeedback('正确！🎉', 'bg-green-100 text-green-800')
        this.showCorrectAnswer = false
        soundEffect.playCorrectSound()
        setTimeout(() => this.nextQuestion(), 2000)
      } else {
        this.showFeedback('错误！', 'bg-red-100 text-red-800')
        this.showCorrectAnswer = true
        soundEffect.playWrongSound()
        this.stars = Math.max(1, this.stars - 1)
        setTimeout(() => this.nextQuestion(), 3000)
      }
    },
    giveUp() {
      if (this.answered) return
      this.answered = true
      this.showCorrectAnswer = true
      this.showFeedback('已跳过', 'bg-gray-100 text-gray-800')
      this.stars = Math.max(1, this.stars - 1)
      setTimeout(() => this.nextQuestion(), 2000)
    },
    nextQuestion() {
      if (this.currentQuestionIndex < this.questions.length - 1) {
        this.currentQuestionIndex++
        this.userAnswer = ''
        this.feedback = ''
        this.showCorrectAnswer = false
        this.answered = false
      } else {
        this.gameState = 'finished'
        soundEffect.playSuccessSound()
        this.saveScore()
      }
    },
    nextLevel() {
      this.currentLevel++
      this.levelsToNextLevel--
      
      if (this.levelsToNextLevel <= 0) {
        this.currentLevelIndex = Math.min(this.currentLevelIndex + 1, this.levelTitles.length - 1)
        this.levelsToNextLevel = 5
      }
      
      this.initGame()
    },
    pauseGame() {
      this.isPaused = !this.isPaused
    },
    restartGame() {
      this.isPaused = false
      this.initGame()
    },
    backToHall() {
      this.$emit('back')
    },
    showFeedback(message, className) {
      this.feedback = message
      this.feedbackClass = className
    },
    saveScore() {
      const gameHistory = JSON.parse(localStorage.getItem('gameHistory') || '[]')
      gameHistory.push({
        gameType: 'poetryChain',
        score: this.score,
        totalScore: this.totalScore,
        timestamp: Date.now()
      })
      localStorage.setItem('gameHistory', JSON.stringify(gameHistory))
    }
  }
}
</script>

<style scoped>
input:focus {
  outline: none;
}

input:disabled {
  background-color: #f3f4f6;
  cursor: not-allowed;
}

.star-rating {
  display: flex;
  gap: 2px;
}

.star {
  font-size: 20px;
  color: #ccc;
  transition: all 0.3s;
}

.star.active {
  color: #ffd700;
  text-shadow: 0 0 10px #ffd700;
}

.level-progress {
  background: rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  padding: 8px 15px;
  margin-top: 8px;
}

.level-title {
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  margin-bottom: 5px;
}

.progress-bar {
  height: 8px;
  background: rgba(255, 255, 255, 0.3);
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
  color: #666;
}

.current-level {
  color: #22c55e;
  font-weight: bold;
}

.next-level {
  color: #666;
}
</style>