<template>
  <div class="animate-fade-in">
    <div class="text-center mb-8">
      <h2 class="text-4xl font-bold mb-2 bg-gradient-to-r from-green-500 via-teal-500 to-cyan-500 bg-clip-text text-transparent">✨ 智能推荐 ✨</h2>
      <p class="text-gray-500 dark:text-gray-400">根据你的学习情况，为你推荐合适的诗歌！</p>
    </div>

    <div class="bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 dark:from-indigo-900/30 dark:via-purple-900/30 dark:to-pink-900/30 rounded-3xl shadow-lg p-6 mb-6 border-2 border-purple-200 dark:border-purple-700">
      <h3 class="text-xl font-bold mb-4 flex items-center">
        <span class="text-3xl mr-2">🤖</span>
        <span class="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">推荐算法说明</span>
      </h3>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div class="p-4 bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-900/40 dark:to-cyan-900/40 border-2 border-blue-200 dark:border-blue-700 rounded-2xl transform hover:scale-105 transition-all">
          <div class="text-3xl mb-2">📚</div>
          <h4 class="font-bold text-blue-800 dark:text-blue-300 mb-2">薄弱环节</h4>
          <p class="text-sm text-blue-600 dark:text-blue-400">根据您的学习记录，推荐需要加强复习的诗歌</p>
        </div>
        <div class="p-4 bg-gradient-to-br from-green-100 to-emerald-100 dark:from-green-900/40 dark:to-emerald-900/40 border-2 border-green-200 dark:border-green-700 rounded-2xl transform hover:scale-105 transition-all">
          <div class="text-3xl mb-2">🔗</div>
          <h4 class="font-bold text-green-800 dark:text-green-300 mb-2">同类推荐</h4>
          <p class="text-sm text-green-600 dark:text-green-400">根据您已学习的诗歌，推荐同作者或同时期的作品</p>
        </div>
        <div class="p-4 bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/40 dark:to-pink-900/40 border-2 border-purple-200 dark:border-purple-700 rounded-2xl transform hover:scale-105 transition-all">
          <div class="text-3xl mb-2">🔄</div>
          <h4 class="font-bold text-purple-800 dark:text-purple-300 mb-2">巩固复习</h4>
          <p class="text-sm text-purple-600 dark:text-purple-400">对于已掌握的内容，建议定期巩固加深印象</p>
        </div>
      </div>
    </div>

    <div v-if="recommendations.length > 0" class="bg-white rounded-3xl shadow-lg p-6 border-2 border-teal-100 dark:border-teal-800 transition-all hover:shadow-xl">
      <h3 class="text-xl font-bold mb-4 flex items-center">
        <span class="text-3xl mr-2">🎁</span>
        <span class="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">为您推荐</span>
      </h3>
      <div class="space-y-4">
        <div
          v-for="poem in recommendations"
          :key="poem.id"
          class="p-5 bg-gradient-to-r from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-2xl border-2 border-gray-100 dark:border-gray-700 hover:border-teal-300 dark:hover:border-teal-600 hover:shadow-lg transition-all cursor-pointer transform hover:scale-102"
          @click="$emit('select-poem', poem.id)"
        >
          <div class="flex justify-between items-start">
            <div class="flex items-center space-x-3">
              <span class="text-4xl">{{ getPoemEmoji(poem.id) }}</span>
              <div>
                <h4 class="text-lg font-bold text-gray-800 dark:text-gray-200">{{ poem.title }}</h4>
                <p class="text-gray-600 dark:text-gray-400">{{ poem.author }} · {{ poem.dynasty }}</p>
              </div>
            </div>
            <span
              class="px-4 py-1 text-sm rounded-full font-medium"
              :class="getReasonClass(poem.reason)"
            >
              {{ poem.reason }}
            </span>
          </div>
          <p class="text-gray-700 dark:text-gray-300 mt-3 line-clamp-2">{{ poem.content }}</p>
          <div class="flex items-center mt-3 space-x-4">
            <span class="text-sm text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full">
              难度：<span class="font-medium">{{ getPoemDifficulty(poem.id) }}</span>
            </span>
          </div>
        </div>
      </div>
    </div>

    <div v-else class="bg-white rounded-3xl shadow-lg p-8 text-center border-2 border-gray-100 dark:border-gray-700">
      <p class="text-5xl mb-4">📭</p>
      <p class="text-gray-600 mb-4 text-lg">暂无推荐，请先学习一些诗歌</p>
      <button
        @click="$emit('go-to-library')"
        class="px-8 py-3 bg-gradient-to-r from-teal-500 to-cyan-500 text-white rounded-2xl hover:from-teal-600 hover:to-cyan-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 font-semibold"
      >
        🚀 去诗歌库看看
      </button>
    </div>

    <div class="mt-6 flex justify-between items-center">
      <button
        @click="$emit('back')"
        class="px-6 py-3 bg-gradient-to-r from-gray-300 to-gray-400 text-gray-800 rounded-2xl hover:from-gray-400 hover:to-gray-500 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center space-x-2"
      >
        <span>←</span>
        <span class="font-semibold">返回</span>
      </button>
      <button
        @click="refreshRecommendations"
        class="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-2xl hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center space-x-2"
      >
        <span>🔄</span>
        <span class="font-semibold">刷新推荐</span>
      </button>
    </div>
  </div>
</template>

<script>
import { poems as defaultPoems } from '../data/poems.js'
import LearningProgress from '../utils/learningProgress.js'

let poems = []
try {
  poems = defaultPoems || []
} catch (error) {
  console.error('Error loading poems:', error)
  poems = []
}

export default {
  name: 'Recommendation',
  data() {
    return {
      poems: poems,
      recommendations: []
    }
  },
  mounted() {
    this.loadRecommendations()
  },
  methods: {
    loadRecommendations() {
      try {
        this.recommendations = LearningProgress.recommendPoems(this.poems, 8)
      } catch (error) {
        console.error('Error loading recommendations:', error)
        this.recommendations = []
      }
    },
    refreshRecommendations() {
      this.loadRecommendations()
    },
    getPoemDifficulty(poemId) {
      const difficulty = LearningProgress.getPoemDifficulty(poemId)
      if (!difficulty || difficulty.totalAttempts === 0) {
        return '未学习'
      }
      if (difficulty.averageScore >= 80) {
        return '已掌握'
      } else if (difficulty.averageScore >= 60) {
        return '一般'
      } else {
        return '需加强'
      }
    },
    getReasonClass(reason) {
      if (reason.includes('薄弱')) {
        return 'bg-orange-100 text-orange-700 dark:bg-orange-900/50 dark:text-orange-300'
      } else if (reason.includes('巩固')) {
        return 'bg-green-100 text-green-700 dark:bg-green-900/50 dark:text-green-300'
      } else if (reason.includes('相关')) {
        return 'bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300'
      } else {
        return 'bg-gray-100 text-gray-700 dark:bg-gray-900/50 dark:text-gray-300'
      }
    },
    getPoemEmoji(poemId) {
      const poem = this.poems.find(p => p.id === poemId)
      if (!poem) return '📜'
      const title = poem.title || ''
      if (title.includes('春') || title.includes('夏') || title.includes('秋') || title.includes('冬')) {
        return '🌸'
      } else if (title.includes('月') || title.includes('夜')) {
        return '🌙'
      } else if (title.includes('山') || title.includes('峰')) {
        return '⛰️'
      } else if (title.includes('江') || title.includes('河') || title.includes('湖')) {
        return '🌊'
      } else if (title.includes('花')) {
        return '🌺'
      } else if (title.includes('鸟')) {
        return '🐦'
      } else if (title.includes('雪')) {
        return '❄️'
      } else {
        return '📜'
      }
    }
  }
}
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>