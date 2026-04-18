<template>
  <div class="animate-fade-in">
    <button @click="$emit('back')" class="mb-6 px-6 py-3 bg-gradient-to-r from-pink-400 to-purple-400 text-white rounded-2xl hover:from-pink-500 hover:to-purple-500 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center space-x-2">
      <span>←</span>
      <span class="font-semibold">返回诗歌库</span>
    </button>
    
    <div v-if="poem" class="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-8 transition-all duration-300 hover:shadow-2xl border-2 border-transparent hover:border-pink-200 dark:hover:border-pink-600">
      <div class="text-center mb-8">
        <h2 class="text-4xl font-bold mb-3 bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 bg-clip-text text-transparent">{{ poem.title }}</h2>
        <div class="flex items-center justify-center space-x-4">
          <span class="px-4 py-2 bg-gradient-to-r from-blue-400 to-cyan-400 text-white rounded-full shadow-md">👨‍🎨 {{ poem.author }}</span>
          <span class="px-4 py-2 bg-gradient-to-r from-green-400 to-teal-400 text-white rounded-full shadow-md">🏛️ {{ poem.dynasty }}</span>
        </div>
      </div>
      
      <div class="mb-8">
        <h3 class="text-2xl font-bold mb-4 text-center text-gray-700 dark:text-gray-200 flex items-center justify-center">
          <span class="mr-2">📜</span> 诗歌内容
        </h3>
        <div class="bg-gradient-to-br from-yellow-50 via-pink-50 to-purple-50 dark:from-gray-700 dark:via-gray-700 dark:to-gray-700 border-2 border-pink-100 dark:border-pink-900 rounded-3xl p-8">
          <div class="flex flex-col items-center">
            <div 
              v-for="(line, index) in formattedPoetry" 
              :key="index"
              class="flex flex-wrap justify-center mb-4"
            >
              <div 
                v-for="(char, charIndex) in line.chars" 
                :key="charIndex"
                class="flex flex-col items-center mx-1"
              >
                <span class="text-xs text-pink-400 dark:text-pink-300 mb-1">{{ line.pinyin[charIndex] || '' }}</span>
                <span 
                  class="text-lg font-medium w-10 h-10 flex items-center justify-center border-2 border-pink-200 dark:border-pink-700 rounded-xl transition-all duration-300 shadow-sm"
                  :class="isReciting && !showOriginal && !revealedChars.has(index + '-' + charIndex) ? 'bg-gradient-to-br from-pink-100 to-purple-100 dark:from-pink-900 dark:to-purple-900 text-transparent select-none cursor-pointer hover:from-pink-200 hover:to-purple-200 dark:hover:from-pink-800 dark:hover:to-purple-800' : 'bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200'"
                  @click="isReciting && !showOriginal && !revealedChars.has(index + '-' + charIndex) ? revealChar(index, charIndex) : null"
                >{{ isReciting && !showOriginal && !revealedChars.has(index + '-' + charIndex) ? '❓' : char }}</span>
              </div>
            </div>
          </div>
        </div>
        
        <div v-if="isReciting && !showOriginal" class="mt-6 text-center animate-pulse">
          <div class="inline-block px-6 py-3 bg-gradient-to-r from-orange-400 to-red-400 text-white rounded-2xl shadow-lg">
            <p class="text-lg mb-1">🎯 当前模式：背诵练习</p>
            <p class="text-sm opacity-90">点击单个字可以逐步显示，或点击下方按钮显示全文</p>
          </div>
        </div>
      </div>

      <div class="mb-6">
        <h3 class="text-2xl font-bold mb-3 text-gray-700 dark:text-gray-200 flex items-center">
          <span class="mr-2">💡</span> 📖 解析
        </h3>
        <p class="text-gray-600 dark:text-gray-300 leading-relaxed bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-gray-700 dark:to-gray-700 p-4 rounded-2xl">{{ poem.analysis || '暂无解析' }}</p>
      </div>

      <div class="mb-8">
        <h3 class="text-2xl font-bold mb-3 text-gray-700 dark:text-gray-200 flex items-center">
          <span class="mr-2">📚</span> 背景
        </h3>
        <p class="text-gray-600 dark:text-gray-300 leading-relaxed bg-gradient-to-r from-purple-50 to-pink-50 dark:from-gray-700 dark:to-gray-700 p-4 rounded-2xl">{{ poem.background || '暂无背景信息' }}</p>
      </div>

      <div class="flex flex-wrap justify-center gap-4">
        <button 
          @click="toggleRecitation"
          class="px-6 py-3 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center space-x-2"
          :class="isReciting ? 'bg-gradient-to-r from-red-500 to-orange-500 text-white hover:from-red-600 hover:to-orange-600' : 'bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600'"
        >
          <span class="text-xl">{{ isReciting ? '❌' : '🎯' }}</span>
          <span class="font-semibold">{{ isReciting ? '退出背诵' : '开始背诵' }}</span>
        </button>
        
        <button 
          v-if="isReciting && !showOriginal"
          @click="showAllChars"
          class="px-6 py-3 bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-2xl hover:from-green-600 hover:to-teal-600 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center space-x-2"
        >
          <span class="text-xl">👁️</span>
          <span class="font-semibold">显示全文</span>
        </button>
        
        <button 
          v-if="isReciting && revealedChars.size > 0"
          @click="hideAllChars"
          class="px-6 py-3 bg-gradient-to-r from-gray-500 to-gray-600 text-white rounded-2xl hover:from-gray-600 hover:to-gray-700 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center space-x-2"
        >
          <span class="text-xl">🔄</span>
          <span class="font-semibold">重新隐藏</span>
        </button>
        
        <button 
          @click="toggleFavorite"
          class="px-6 py-3 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center space-x-2"
          :class="isFavorite ? 'bg-gradient-to-r from-pink-500 to-red-500 text-white hover:from-pink-600 hover:to-red-600' : 'bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-600 dark:to-gray-700 text-gray-700 dark:text-gray-200 hover:from-gray-300 hover:to-gray-400 dark:hover:from-gray-500 dark:hover:to-gray-600'"
        >
          <span class="text-xl">{{ isFavorite ? '💖' : '🤍' }}</span>
          <span class="font-semibold">{{ isFavorite ? '取消收藏' : '收藏' }}</span>
        </button>
        
        <button 
          @click="readPoem"
          class="px-6 py-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-2xl hover:from-yellow-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center space-x-2"
        >
          <span class="text-xl">{{ isReading ? '🔊' : '🔈' }}</span>
          <span class="font-semibold">{{ isReading ? '停止朗读' : '朗读诗歌' }}</span>
        </button>
      </div>
    </div>
    
    <div v-else class="bg-white dark:bg-gray-800 rounded-3xl shadow-lg p-12 text-center">
      <div class="text-8xl mb-4">📭</div>
      <p class="text-gray-600 dark:text-gray-400 text-xl">未选择诗歌</p>
    </div>
  </div>
</template>

<script>
import LearningProgress from '../utils/learningProgress.js'
import { userManager } from '../utils/userManager.js'

export default {
  name: 'PoetryDetail',
  props: {
    poem: {
      type: Object,
      default: null
    }
  },
  emits: ['back', 'start-recitation'],
  data() {
    return {
      isFavorite: false,
      isReading: false,
      isReciting: false,
      showOriginal: false,
      revealedChars: new Set(),
      speechSynthesis: window.speechSynthesis,
      learningStartTime: null
    }
  },
  mounted() {
    if (this.poem) {
      this.isFavorite = this.checkFavorite()
      this.startLearning()
    }
  },
  beforeUnmount() {
    try {
      if (this.poem && this.learningStartTime) {
        LearningProgress.endLearning(this.poem.id, this.poem.title, 'read', true)
      }
    } catch (error) {
      console.error('Error ending learning:', error)
    }
    if (this.isReading) {
      this.speechSynthesis.cancel()
    }
  },
  watch: {
    poem() {
      if (this.poem) {
        try {
          if (this.learningStartTime) {
            LearningProgress.endLearning(this.poem.id, this.poem.title, 'read', true)
          }
        } catch (error) {
          console.error('Error ending learning in watch:', error)
        }
        this.isFavorite = this.checkFavorite()
        this.startLearning()
      }
    }
  },
  computed: {
    formattedPoetry() {
      if (!this.poem || !this.poem.content || !this.poem.pinyin) {
        return []
      }
      
      const sentences = this.poem.content.split(/[，。]/).filter(s => s.trim())
      const pinyinSentences = this.poem.pinyin[0].split(/[，。]/).filter(s => s.trim())
      
      return sentences.map((sentence, index) => {
        const chars = sentence.split('')
        const pinyin = pinyinSentences[index] ? pinyinSentences[index].split(' ') : []
        
        return {
          chars,
          pinyin
        }
      })
    }
  },
  methods: {
    startLearning() {
      this.learningStartTime = LearningProgress.startLearning(this.poem.id, this.poem.title).startTime
    },
    checkFavorite() {
      const favorites = JSON.parse(localStorage.getItem('favorites') || '[]')
      return favorites.includes(this.poem.id)
    },
    toggleFavorite() {
      if (!this.poem) return
      
      let favorites = JSON.parse(localStorage.getItem('favorites') || '[]')
      if (favorites.includes(this.poem.id)) {
        favorites = favorites.filter(id => id !== this.poem.id)
        this.isFavorite = false
      } else {
        favorites.push(this.poem.id)
        this.isFavorite = true
      }
      localStorage.setItem('favorites', JSON.stringify(favorites))
      
      const currentUser = userManager.getCurrentUser()
      if (currentUser) {
        userManager.syncUserData('favorites', favorites)
      }
    },
    toggleRecitation() {
      if (!this.poem) return
      this.isReciting = !this.isReciting
      if (this.isReciting) {
        this.showOriginal = false
        this.revealedChars = new Set()
      } else {
        this.revealedChars = new Set()
      }
    },
    revealChar(lineIndex, charIndex) {
      const key = `${lineIndex}-${charIndex}`
      this.revealedChars.add(key)
      this.revealedChars = new Set(this.revealedChars)
    },
    showAllChars() {
      this.showOriginal = true
    },
    hideAllChars() {
      this.showOriginal = false
      this.revealedChars = new Set()
    },
    readPoem() {
      if (!this.poem) return
      
      if (this.isReading) {
        this.speechSynthesis.cancel()
        this.isReading = false
      } else {
        const text = `${this.poem.title}，作者${this.poem.author}，${this.poem.content}`
        const utterance = new SpeechSynthesisUtterance(text)
        utterance.lang = 'zh-CN'
        utterance.rate = 0.9
        utterance.onend = () => {
          this.isReading = false
        }
        
        this.speechSynthesis.speak(utterance)
        this.isReading = true
      }
    }
  }
}
</script>

<style scoped>
.animate-fade-in {
  animation: fadeIn 0.5s ease-out;
}

@keyframes fadeIn {
  0% { opacity: 0; transform: translateY(20px); }
  100% { opacity: 1; transform: translateY(0); }
}
</style>
