<template>
  <div class="animate-fade-in">
    <button @click="$emit('back')" class="mb-6 px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-all duration-200">
      ← 返回游戏大厅
    </button>

    <div v-if="gameState === 'ready'" class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 text-center animate-slide-up">
      <div class="text-6xl mb-6">{{ currentGameType === 'fillBlank' ? '📝' : '🔗' }}</div>
      <h2 class="text-3xl font-bold mb-4 text-blue-600 dark:text-blue-400">{{ currentRules.name }} - 第 {{ currentLevel }} 关</h2>
      <p class="text-gray-600 dark:text-gray-300 mb-6 text-lg leading-relaxed">{{ currentRules.description }}</p>
      
      <!-- 等级信息 -->
      <div class="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl p-4 mb-6">
        <div class="flex justify-between items-center mb-2">
          <span class="text-sm font-medium text-gray-600 dark:text-gray-400">当前等级</span>
          <span class="text-lg font-bold text-purple-600 dark:text-purple-400">{{ currentLevelTitle }}</span>
        </div>
        <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-2">
          <div 
            class="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-300" 
            :style="{ width: progressPercentage + '%' }"
          ></div>
        </div>
        <div class="flex justify-between items-center text-xs text-gray-500 dark:text-gray-400">
          <span>还需 {{ levelsToNextLevel }} 关晋升</span>
          <span>下一级：{{ nextLevelTitle }}</span>
        </div>
      </div>
      
      <div class="grid grid-cols-2 gap-4 max-w-md mx-auto mb-8">
        <div class="bg-blue-50 dark:bg-blue-900/30 rounded-lg p-4">
          <p class="text-2xl font-bold text-blue-600 dark:text-blue-400">{{ currentRules.totalQuestions }}</p>
          <p class="text-sm text-gray-600 dark:text-gray-400">题目数量</p>
        </div>
        <div class="bg-green-50 dark:bg-green-900/30 rounded-lg p-4">
          <p class="text-2xl font-bold text-green-600 dark:text-green-400">{{ currentRules.scorePerQuestion }}</p>
          <p class="text-sm text-gray-600 dark:text-gray-400">每题分数</p>
        </div>
      </div>
      <button 
        @click="startGame"
        class="px-8 py-3 bg-blue-600 text-white text-lg font-bold rounded-lg hover:bg-blue-700 transition-all duration-200 transform hover:scale-105 shadow-lg"
      >
        🚀 开始挑战
      </button>
    </div>

    <div v-else-if="gameState === 'playing'" class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 animate-slide-up">
      <div class="flex justify-between items-center mb-6">
        <div class="flex items-center space-x-4">
          <span class="text-lg font-bold text-blue-600 dark:text-blue-400">
            第 {{ currentQuestionIndex + 1 }} / {{ currentQuestions.length }} 题
          </span>
          <span class="px-3 py-1 bg-yellow-100 dark:bg-yellow-900/50 text-yellow-700 dark:text-yellow-300 rounded-full text-sm font-bold">
            ⭐ {{ score }} 分
          </span>
        </div>
        <button 
          @click="quitGame"
          class="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors text-sm"
        >
          退出游戏
        </button>
      </div>

      <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-8">
        <div 
          class="bg-blue-600 h-2 rounded-full transition-all duration-300" 
          :style="{ width: ((currentQuestionIndex + 1) / currentQuestions.length * 100) + '%' }"
        ></div>
      </div>

      <div class="mb-6">
        <div class="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl p-6 mb-4">
          <p v-if="currentGameType === 'fillBlank'" class="text-xl md:text-2xl text-gray-800 dark:text-gray-200 leading-relaxed font-medium text-center">
            {{ currentQuestion.blankText }}
          </p>
          <div v-else class="text-center">
            <p class="text-sm text-gray-500 dark:text-gray-400 mb-2">请填写下句：</p>
            <p class="text-xl md:text-2xl text-gray-800 dark:text-gray-200 leading-relaxed font-medium mb-2">
              {{ currentQuestion.upperLine }}
            </p>
            <p class="text-sm text-gray-400 dark:text-gray-500 italic">{{ currentQuestion.hint }}</p>
          </div>
        </div>
        <p v-if="currentGameType === 'fillBlank'" class="text-center text-gray-500 dark:text-gray-400 text-sm">请选择正确的答案</p>
        <p v-else class="text-center text-gray-500 dark:text-gray-400 text-sm">请在下方输入下句</p>
      </div>

      <div v-if="currentGameType === 'fillBlank'" class="grid grid-cols-2 gap-4 mb-6">
        <button
          v-for="(option, index) in currentQuestionOptions"
          :key="index"
          @click="selectAnswer(option)"
          :disabled="answered"
          class="p-4 rounded-xl text-lg font-medium transition-all duration-200 transform hover:scale-102"
          :class="getOptionClass(option)"
        >
          {{ option }}
        </button>
      </div>

      <div v-else class="mb-6">
        <div class="flex gap-4">
          <input 
            v-model="userAnswer"
            type="text"
            placeholder="请输入古诗下句"
            class="flex-1 px-4 py-3 border-2 border-gray-300 dark:border-gray-600 rounded-xl text-lg focus:outline-none focus:border-blue-500 dark:bg-gray-700 dark:text-gray-200 transition-colors"
            :disabled="answered"
            @keyup.enter="checkAnswer"
          >
          <button 
            v-if="!answered"
            @click="checkAnswer"
            class="px-6 py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all duration-200 transform hover:scale-105"
          >
            提交
          </button>
        </div>
      </div>

      <div v-if="answered" class="text-center animate-fade-in">
        <div v-if="isCorrect" class="mb-4">
          <p class="text-2xl font-bold text-green-600 dark:text-green-400 mb-2">🎉 回答正确！</p>
          <p class="text-gray-600 dark:text-gray-300">+{{ currentRules.scorePerQuestion }} 分</p>
        </div>
        <div v-else class="mb-4">
          <p class="text-2xl font-bold text-red-600 dark:text-red-400 mb-2">😅 回答错误</p>
          <p class="text-gray-600 dark:text-gray-300">
            正确答案是：<span class="font-bold text-green-600 dark:text-green-400">{{ currentQuestion.answer || currentQuestion.lowerLine }}</span>
          </p>
        </div>
        <p class="text-gray-500 dark:text-gray-400 text-sm mb-4">
          {{ currentGameType === 'fillBlank' ? '完整诗句：' : '完整诗句：' }}{{ currentQuestion.fullText }}
        </p>
        <button 
          v-if="currentGameType !== 'fillBlank'"
          @click="nextQuestion"
          class="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200 transform hover:scale-105"
        >
          {{ currentQuestionIndex < currentQuestions.length - 1 ? '下一题 →' : '查看结果' }}
        </button>
        <p v-if="currentGameType === 'fillBlank'" class="text-gray-500 dark:text-gray-400 text-sm animate-pulse">
          即将进入下一题...
        </p>
      </div>
    </div>

    <div v-else-if="gameState === 'finished'" class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 text-center animate-slide-up">
      <div class="text-6xl mb-6">
        {{ score >= 80 ? '🏆' : score >= 60 ? '🎉' : '💪' }}
      </div>
      <h2 class="text-3xl font-bold mb-4 text-blue-600 dark:text-blue-400">游戏结束！</h2>
      
      <div class="max-w-md mx-auto mb-8">
        <div class="grid grid-cols-3 gap-4 mb-6">
          <div class="bg-blue-50 dark:bg-blue-900/30 rounded-xl p-4">
            <p class="text-3xl font-bold text-blue-600 dark:text-blue-400">{{ score }}</p>
            <p class="text-sm text-gray-600 dark:text-gray-400">得分</p>
          </div>
          <div class="bg-green-50 dark:bg-green-900/30 rounded-xl p-4">
            <p class="text-3xl font-bold text-green-600 dark:text-green-400">{{ correctCount }}</p>
            <p class="text-sm text-gray-600 dark:text-gray-400">正确</p>
          </div>
          <div class="bg-red-50 dark:bg-red-900/30 rounded-xl p-4">
            <p class="text-3xl font-bold text-red-600 dark:text-red-400">{{ currentQuestions.length - correctCount }}</p>
            <p class="text-sm text-gray-600 dark:text-gray-400">错误</p>
          </div>
        </div>

        <div class="bg-gray-50 dark:bg-gray-700 rounded-xl p-4 mb-6">
          <p class="text-lg font-bold text-gray-700 dark:text-gray-200 mb-2">正确率</p>
          <div class="flex items-center justify-center">
            <div class="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-4 mr-3">
              <div 
                class="bg-gradient-to-r from-blue-500 to-green-500 h-4 rounded-full transition-all duration-500" 
                :style="{ width: (correctCount / currentQuestions.length * 100) + '%' }"
              ></div>
            </div>
            <span class="text-lg font-bold text-gray-700 dark:text-gray-200">{{ Math.round(correctCount / currentQuestions.length * 100) }}%</span>
          </div>
        </div>

        <p class="text-gray-600 dark:text-gray-300 text-lg">
          {{ score >= 80 ? '太棒了！你对古诗掌握得非常扎实！' : score >= 60 ? '不错的成绩！继续加油！' : '别灰心，多读古诗会有进步的！' }}
        </p>
      </div>

      <div class="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4">
        <button 
          @click="nextLevel"
          class="px-6 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-all duration-200 transform hover:scale-105"
        >
          🎮 下一关
        </button>
        <button 
          @click="restartGame"
          class="px-6 py-3 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700 transition-all duration-200 transform hover:scale-105"
        >
          🔄 再玩一次
        </button>
        <button 
          @click="$emit('back')"
          class="px-6 py-3 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 font-bold rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-all duration-200"
        >
          返回大厅
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { fillBlankQuestions, poetryChainQuestions, gameRules } from '../data/game.js'
import { soundEffect } from '../utils/soundEffect.js'

export default {
  name: 'GamePage',
  props: {
    gameType: {
      type: String,
      default: 'fillBlank'
    }
  },
  emits: ['back'],
  data() {
    return {
      currentGameType: 'fillBlank',
      fillBlankQuestions: fillBlankQuestions,
      poetryChainQuestions: poetryChainQuestions,
      gameState: 'ready',
      currentQuestionIndex: 0,
      score: 0,
      correctCount: 0,
      selectedAnswer: null,
      userAnswer: '',
      answered: false,
      shuffledQuestions: [],
      currentQuestionOptions: [],
      currentLevel: 1,
      levelTitles: ['书童', '童生', '秀才', '举人', '进士', '探花', '榜眼', '状元', '学士', '翰林', '大学士', '诗仙', '诗圣'],
      currentLevelIndex: 0,
      levelsToNextLevel: 5
    }
  },
  mounted() {
    soundEffect.initAudio()
  },
  computed: {
    currentQuestions() {
      return this.currentGameType === 'fillBlank' ? this.fillBlankQuestions : this.poetryChainQuestions
    },
    currentRules() {
      return gameRules[this.currentGameType]
    },
    currentQuestion() {
      return this.shuffledQuestions[this.currentQuestionIndex]
    },
    isCorrect() {
      if (this.currentGameType === 'fillBlank') {
        return this.selectedAnswer === this.currentQuestion.answer
      } else {
        return this.userAnswer.trim() === this.currentQuestion.lowerLine
      }
    },
    currentLevelTitle() {
      return this.levelTitles[this.currentLevelIndex]
    },
    nextLevelTitle() {
      return this.levelTitles[this.currentLevelIndex + 1] || this.levelTitles[this.levelTitles.length - 1]
    },
    progressPercentage() {
      return ((5 - this.levelsToNextLevel) / 5) * 100
    }
  },
  watch: {
    gameType: {
      immediate: true,
      handler(newVal) {
        this.currentGameType = newVal || 'fillBlank'
      }
    }
  },
  methods: {
    startGame() {
      this.shuffledQuestions = this.shuffleArray([...this.currentQuestions])
      this.currentQuestionIndex = 0
      this.score = 0
      this.correctCount = 0
      this.selectedAnswer = null
      this.userAnswer = ''
      this.answered = false
      this.gameState = 'playing'
      this.shuffleCurrentQuestionOptions()
    },
    selectAnswer(option) {
      if (this.answered) return
      this.selectedAnswer = option
      this.answered = true
      if (option === this.currentQuestion.answer) {
        this.score += this.currentRules.scorePerQuestion
        this.correctCount++
        soundEffect.playCorrectSound()
      } else {
        soundEffect.playWrongSound()
      }
      setTimeout(() => {
        this.nextQuestion()
      }, 1500)
    },
    checkAnswer() {
      if (this.answered || !this.userAnswer.trim()) return
      this.answered = true
      if (this.userAnswer.trim() === this.currentQuestion.lowerLine) {
        this.score += this.currentRules.scorePerQuestion
        this.correctCount++
        soundEffect.playCorrectSound()
      } else {
        soundEffect.playWrongSound()
      }
    },
    getOptionClass(option) {
      if (!this.answered) {
        return 'bg-white dark:bg-gray-700 border-2 border-gray-200 dark:border-gray-600 text-gray-800 dark:text-gray-200 hover:border-blue-500 dark:hover:border-blue-400 hover:shadow-lg'
      }
      if (option === this.currentQuestion.answer) {
        return 'bg-green-100 dark:bg-green-900/50 border-2 border-green-500 text-green-700 dark:text-green-300'
      }
      if (option === this.selectedAnswer && option !== this.currentQuestion.answer) {
        return 'bg-red-100 dark:bg-red-900/50 border-2 border-red-500 text-red-700 dark:text-red-300'
      }
      return 'bg-gray-100 dark:bg-gray-700 border-2 border-gray-200 dark:border-gray-600 text-gray-500 dark:text-gray-400 opacity-50'
    },
    nextQuestion() {
      if (this.currentQuestionIndex < this.shuffledQuestions.length - 1) {
        this.currentQuestionIndex++
        this.selectedAnswer = null
        this.userAnswer = ''
        this.answered = false
        this.shuffleCurrentQuestionOptions()
      } else {
        this.gameState = 'finished'
        const rate = this.correctCount / this.currentQuestions.length
        if (rate >= 0.6) {
          soundEffect.playSuccessSound()
        } else {
          soundEffect.playGameOverSound()
        }
        this.saveScore()
      }
    },
    shuffleCurrentQuestionOptions() {
      if (this.currentGameType === 'fillBlank' && this.currentQuestion && this.currentQuestion.options) {
        this.currentQuestionOptions = this.shuffleArray([...this.currentQuestion.options])
      } else {
        this.currentQuestionOptions = []
      }
    },
    restartGame() {
      this.startGame()
    },
    quitGame() {
      this.gameState = 'ready'
    },
    shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]
      }
      return array
    },
    saveScore() {
      try {
        const history = JSON.parse(localStorage.getItem('gameHistory') || '[]')
        history.push({
          gameType: this.currentGameType,
          score: this.score,
          totalScore: this.currentQuestions.length * this.currentRules.scorePerQuestion,
          correctCount: this.correctCount,
          totalQuestions: this.currentQuestions.length,
          timestamp: Date.now()
        })
        localStorage.setItem('gameHistory', JSON.stringify(history))
      } catch (error) {
        console.error('Error saving game score:', error)
      }
    },
    nextLevel() {
      this.currentLevel++
      this.levelsToNextLevel--
      
      if (this.levelsToNextLevel <= 0) {
        this.currentLevelIndex = Math.min(this.currentLevelIndex + 1, this.levelTitles.length - 1)
        this.levelsToNextLevel = 5
      }
      
      this.startGame()
    }
  }
}
</script>

<style scoped>
.animate-fade-in {
  animation: fadeIn 0.5s ease-in;
}

.animate-slide-up {
  animation: slideUp 0.3s ease-out;
}

.animate-pulse {
  animation: pulse 1.5s ease-in-out infinite;
}

@keyframes fadeIn {
  0% { opacity: 0; transform: translateY(10px); }
  100% { opacity: 1; transform: translateY(0); }
}

@keyframes slideUp {
  0% { opacity: 0; transform: translateY(20px); }
  100% { opacity: 1; transform: translateY(0); }
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

.hover\:scale-102:hover {
  transform: scale(1.02);
}
</style>
