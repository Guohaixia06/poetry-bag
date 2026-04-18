<template>
  <div class="animate-fade-in">
    <h2 class="text-3xl font-bold mb-6 dark:text-white">🎯 背诵练习</h2>
    <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6 transition-all duration-300">
      <h3 class="text-xl font-bold mb-3 dark:text-white">选择诗歌</h3>
      <select v-model="selectedPoemId" class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 transition-all duration-200">
        <option value="">请选择诗歌</option>
        <option v-for="poem in poems" :key="poem.id" :value="poem.id">
          {{ poem.title }} - {{ poem.author }}
        </option>
      </select>
    </div>
    <div v-if="currentPoem" class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition-all duration-300 animate-slide-up">
      <h3 class="text-xl font-bold mb-3 text-blue-600 dark:text-blue-400">{{ currentPoem.title }} - {{ currentPoem.author }}</h3>
      <div class="mb-6">
        <h4 class="font-bold mb-2 dark:text-white">📖 原文</h4>
        <p class="text-gray-800 dark:text-gray-200 whitespace-pre-wrap bg-gray-50 dark:bg-gray-700 p-4 rounded-md">{{ formatContent(currentPoem.content) }}</p>
      </div>
      <div class="mb-6">
        <h4 class="font-bold mb-2 dark:text-white">✍️ 背诵区域</h4>
        <div class="border border-gray-300 dark:border-gray-600 rounded-md p-4 min-h-[200px] bg-gray-50 dark:bg-gray-700">
          <p v-for="(line, index) in lines" :key="index" class="mb-2">
            <span class="text-gray-500 dark:text-gray-400 mr-2">{{ index + 1 }}.</span>
            <span v-if="showLines.includes(index)" class="text-green-600 dark:text-green-400 font-medium">{{ line }}</span>
            <input 
              v-else 
              v-model="userInput[index]"
              type="text"
              class="border-b-2 border-gray-300 dark:border-gray-500 focus:outline-none focus:border-blue-500 dark:bg-transparent bg-transparent dark:text-gray-200 transition-colors duration-200 w-full"
              @blur="checkLine(index)"
              @keyup.enter="checkLine(index)"
            >
          </p>
        </div>
      </div>
      <div class="flex flex-wrap space-x-4 space-y-2">
        <button 
          @click="showNextLine"
          class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all duration-200 transform hover:scale-105"
        >
          👁️ 显示下一行
        </button>
        <button 
          @click="resetRecitation"
          class="px-4 py-2 bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-gray-200 rounded-md hover:bg-gray-300 dark:hover:bg-gray-500 transition-all duration-200 transform hover:scale-105"
        >
          🔄 重新开始
        </button>
        <button 
          v-if="completionRate > 0"
          @click="showAllLines"
          class="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-all duration-200 transform hover:scale-105"
        >
          📝 显示全部
        </button>
      </div>
      <div v-if="completionRate > 0" class="mt-6">
        <div class="flex justify-between mb-2">
          <span class="dark:text-gray-200">背诵进度</span>
          <span class="text-blue-600 dark:text-blue-400 font-bold">{{ completionRate }}%</span>
        </div>
        <div class="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2.5">
          <div class="bg-blue-600 h-2.5 rounded-full transition-all duration-300" :style="{ width: completionRate + '%' }"></div>
        </div>
      </div>
    </div>
    <div v-else class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 text-center">
      <p class="text-gray-500 dark:text-gray-400 text-lg">请选择一首诗歌开始背诵练习</p>
    </div>

    <div class="mt-6 flex justify-center">
      <button @click="handleBack" class="px-8 py-4 bg-gradient-to-r from-gray-300 to-gray-400 text-gray-800 rounded-2xl hover:from-gray-400 hover:to-gray-500 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center space-x-2">
        <span>←</span>
        <span class="font-semibold">返回</span>
      </button>
    </div>
  </div>
</template>

<script>
import { poems as defaultPoems } from '../data/poems.js'

let poems = []
try {
  poems = defaultPoems || []
} catch (error) {
  console.error('Error loading poems:', error)
  poems = []
}

export default {
  name: 'Recitation',
  emits: ['back'],
  data() {
    return {
      poems: poems,
      selectedPoemId: '',
      currentPoem: null,
      lines: [],
      userInput: [],
      showLines: []
    }
  },
  computed: {
    isPracticing() {
      return this.currentPoem !== null
    },
    completionRate() {
      if (!this.currentPoem || this.lines.length === 0) return 0
      return Math.round((this.showLines.length / this.lines.length) * 100)
    }
  },
  watch: {
    selectedPoemId() {
      if (this.selectedPoemId) {
        this.loadPoem()
      }
    }
  },
  methods: {
    loadPoem() {
      if (!Array.isArray(this.poems)) {
        this.currentPoem = null
        this.lines = []
        this.userInput = []
        this.showLines = []
        return
      }
      this.currentPoem = this.poems.find(poem => poem.id == this.selectedPoemId)
      if (this.currentPoem) {
        this.lines = this.currentPoem.content.split(/[，。]/).filter(line => line.trim())
        this.userInput = new Array(this.lines.length).fill('')
        this.showLines = []
      }
    },
    formatContent(content) {
      return content.replace(/，/g, '，\n').replace(/。/g, '。\n')
    },
    checkLine(index) {
      if (this.userInput[index] === this.lines[index]) {
        if (!this.showLines.includes(index)) {
          this.showLines.push(index)
        }
      }
    },
    showNextLine() {
      if (this.showLines.length < this.lines.length) {
        const nextIndex = this.showLines.length
        this.showLines.push(nextIndex)
      }
    },
    showAllLines() {
      this.showLines = [...Array(this.lines.length).keys()]
    },
    resetRecitation() {
      this.loadPoem()
    },
    handleBack() {
      if (this.isPracticing) {
        this.selectedPoemId = ''
        this.currentPoem = null
        this.lines = []
        this.userInput = []
        this.showLines = []
      } else {
        this.$emit('back')
      }
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

@keyframes fadeIn {
  0% { opacity: 0; transform: translateY(10px); }
  100% { opacity: 1; transform: translateY(0); }
}

@keyframes slideUp {
  0% { opacity: 0; transform: translateY(20px); }
  100% { opacity: 1; transform: translateY(0); }
}
</style>
