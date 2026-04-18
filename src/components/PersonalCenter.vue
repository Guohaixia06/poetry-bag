<template>
  <div class="animate-fade-in">
    <div v-if="currentUser" class="bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 rounded-3xl shadow-xl p-6 mb-8 text-white">
      <div class="flex items-center justify-between">
        <div class="flex items-center space-x-4">
          <div class="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center text-4xl shadow-lg">
            👤
          </div>
          <div>
            <h2 class="text-2xl font-bold">{{ currentUser.username }}</h2>
            <p class="text-white/80">✨ 欢迎回来小诗人！</p>
          </div>
        </div>
        <button 
          @click="handleLogout"
          class="px-6 py-3 bg-white/20 hover:bg-white/30 rounded-2xl transition-all duration-300 text-sm font-semibold shadow-lg hover:scale-105"
        >
          🚪 退出登录
        </button>
      </div>
    </div>

    <div v-else class="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-3xl shadow-xl p-6 mb-8">
      <div class="flex items-center justify-between">
        <div class="flex items-center space-x-4">
          <div class="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center text-4xl shadow-lg">
            🎒
          </div>
          <div>
            <h2 class="text-2xl font-bold text-white">游客模式</h2>
            <p class="text-white/80">登录后可同步数据~</p>
          </div>
        </div>
        <button 
          @click="goToLogin"
          class="px-6 py-3 bg-white text-purple-600 rounded-2xl font-bold shadow-lg hover:scale-105 transition-all duration-300"
        >
          🌟 立即登录
        </button>
      </div>
    </div>

    <div v-if="currentUser" class="bg-white dark:bg-gray-800 rounded-3xl shadow-lg p-6 mb-8 transition-all duration-300 hover:shadow-xl border-2 border-transparent hover:border-pink-200">
      <div class="flex items-center justify-between mb-4">
        <h3 class="text-xl font-bold text-gray-800 dark:text-white flex items-center">
          <span class="mr-2">☁️</span> 数据同步
        </h3>
        <button 
          @click="syncAllData"
          :disabled="syncing"
          class="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-2xl hover:from-blue-600 hover:to-purple-600 transition-all duration-300 disabled:opacity-50 flex items-center space-x-2 shadow-lg hover:scale-105"
        >
          <span v-if="syncing">🔄 同步中...</span>
          <span v-else>🚀 立即同步</span>
        </button>
      </div>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div class="p-4 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/30 dark:to-cyan-900/30 rounded-2xl text-center">
          <p class="font-bold text-blue-600 dark:text-blue-400">📊 学习进度</p>
          <p class="text-gray-500 dark:text-gray-400 text-xs mt-1">{{ lastSyncTime.learningProgress || '未同步' }}</p>
        </div>
        <div class="p-4 bg-gradient-to-br from-pink-50 to-red-50 dark:from-pink-900/30 dark:to-red-900/30 rounded-2xl text-center">
          <p class="font-bold text-pink-600 dark:text-pink-400">❤️ 收藏</p>
          <p class="text-gray-500 dark:text-gray-400 text-xs mt-1">{{ lastSyncTime.favorites || '未同步' }}</p>
        </div>
        <div class="p-4 bg-gradient-to-br from-green-50 to-teal-50 dark:from-green-900/30 dark:to-teal-900/30 rounded-2xl text-center">
          <p class="font-bold text-green-600 dark:text-green-400">📝 学习记录</p>
          <p class="text-gray-500 dark:text-gray-400 text-xs mt-1">{{ lastSyncTime.learningRecords || '未同步' }}</p>
        </div>
        <div class="p-4 bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-900/30 dark:to-indigo-900/30 rounded-2xl text-center">
          <p class="font-bold text-purple-600 dark:text-purple-400">🎮 游戏记录</p>
          <p class="text-gray-500 dark:text-gray-400 text-xs mt-1">{{ lastSyncTime.gameHistory || '未同步' }}</p>
        </div>
      </div>
    </div>

    <h2 class="text-3xl font-bold mb-6 text-gray-800 dark:text-white">🎯 学习中心</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
      <div class="bg-white dark:bg-gray-800 rounded-3xl shadow-lg p-6 transition-all duration-300 hover:shadow-xl border-2 border-transparent hover:border-blue-200">
        <h3 class="text-xl font-bold mb-4 text-gray-800 dark:text-white flex items-center">
          <span class="mr-2">📊</span> 学习统计
        </h3>
        <div class="grid grid-cols-2 gap-4">
          <div class="text-center p-4 bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900/50 dark:to-blue-800/50 rounded-2xl transition-all duration-300 hover:scale-105">
            <p class="text-4xl font-bold text-blue-600 dark:text-blue-400">{{ studyStats.totalPoemsLearned || 0 }}</p>
            <p class="text-sm text-gray-600 dark:text-gray-400 mt-1">📚 已学诗歌</p>
          </div>
          <div class="text-center p-4 bg-gradient-to-br from-green-100 to-green-200 dark:from-green-900/50 dark:to-green-800/50 rounded-2xl transition-all duration-300 hover:scale-105">
            <p class="text-4xl font-bold text-green-600 dark:text-green-400">{{ studyStats.streakDays || 0 }}</p>
            <p class="text-sm text-gray-600 dark:text-gray-400 mt-1">🔥 连续天数</p>
          </div>
          <div class="text-center p-4 bg-gradient-to-br from-orange-100 to-orange-200 dark:from-orange-900/50 dark:to-orange-800/50 rounded-2xl transition-all duration-300 hover:scale-105">
            <p class="text-3xl font-bold text-orange-600 dark:text-orange-400">{{ formatDuration(studyStats.totalStudyTime) }}</p>
            <p class="text-sm text-gray-600 dark:text-gray-400 mt-1">⏱️ 总学习时间</p>
          </div>
          <div class="text-center p-4 bg-gradient-to-br from-purple-100 to-purple-200 dark:from-purple-900/50 dark:to-purple-800/50 rounded-2xl transition-all duration-300 hover:scale-105">
            <p class="text-4xl font-bold text-purple-600 dark:text-purple-400">{{ studyStats.totalSessions || 0 }}</p>
            <p class="text-sm text-gray-600 dark:text-gray-400 mt-1">📖 学习次数</p>
          </div>
        </div>
      </div>

      <div class="bg-white dark:bg-gray-800 rounded-3xl shadow-lg p-6 transition-all duration-300 hover:shadow-xl border-2 border-transparent hover:border-green-200">
        <h3 class="text-xl font-bold mb-4 text-gray-800 dark:text-white flex items-center">
          <span class="mr-2">🚀</span> 快速入口
        </h3>
        <div class="space-y-3">
          <button
            @click="$emit('go-to-report')"
            class="w-full px-4 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-2xl hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 text-left flex items-center shadow-lg hover:scale-[1.02] hover:shadow-xl"
          >
            <span class="mr-3 text-2xl">📊</span>
            <span class="font-bold">学习报告</span>
            <span class="ml-auto text-sm opacity-80">查看详情 →</span>
          </button>
          <button
            @click="$emit('go-to-recommend')"
            class="w-full px-4 py-4 bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-2xl hover:from-green-600 hover:to-teal-600 transition-all duration-300 text-left flex items-center shadow-lg hover:scale-[1.02] hover:shadow-xl"
          >
            <span class="mr-3 text-2xl">🤖</span>
            <span class="font-bold">智能推荐</span>
            <span class="ml-auto text-sm opacity-80">发现好诗 →</span>
          </button>
          <button
            @click="$emit('go-to-game')"
            class="w-full px-4 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-2xl hover:from-purple-600 hover:to-pink-600 transition-all duration-300 text-left flex items-center shadow-lg hover:scale-[1.02] hover:shadow-xl"
          >
            <span class="mr-3 text-2xl">🎮</span>
            <span class="font-bold">诗词游戏</span>
            <span class="ml-auto text-sm opacity-80">趣味学习 →</span>
          </button>
        </div>
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div class="bg-white dark:bg-gray-800 rounded-3xl shadow-lg p-6 transition-all duration-300 hover:shadow-xl border-2 border-transparent hover:border-pink-200">
        <h3 class="text-xl font-bold mb-4 text-gray-800 dark:text-white flex items-center">
          <span class="mr-2">💖</span> 我的收藏
        </h3>
        <div v-if="favoritePoems.length === 0" class="text-center py-12">
          <div class="text-6xl mb-4">💔</div>
          <p class="text-gray-500 dark:text-gray-400 text-lg">还没有收藏任何诗歌</p>
          <p class="text-gray-400 dark:text-gray-500 text-sm mt-2">快去诗歌库看看吧~</p>
        </div>
        <div v-else class="space-y-3">
          <div v-for="poem in favoritePoems" :key="poem.id" class="mb-3 p-4 bg-gradient-to-r from-pink-50 to-purple-50 dark:from-pink-900/20 dark:to-purple-900/20 rounded-2xl transition-all duration-200 hover:shadow-md border border-pink-100 dark:border-pink-800">
            <h4 class="font-bold text-pink-600 dark:text-pink-400 flex items-center">
              <span class="mr-2">{{ getPoemEmoji(poem.id) }}</span>
              {{ poem.title }}
            </h4>
            <p class="text-gray-600 dark:text-gray-400 text-sm">👨‍🎨 {{ poem.author }}</p>
            <button
              @click="removeFavorite(poem.id)"
              class="mt-2 text-sm px-4 py-2 bg-gradient-to-r from-red-400 to-pink-400 text-white rounded-xl hover:from-red-500 hover:to-pink-500 transition-all duration-200"
            >
              ❌ 取消收藏
            </button>
          </div>
        </div>
      </div>
      
      <div class="bg-white dark:bg-gray-800 rounded-3xl shadow-lg p-6 transition-all duration-300 hover:shadow-xl border-2 border-transparent hover:border-green-200">
        <h3 class="text-xl font-bold mb-4 text-gray-800 dark:text-white flex items-center">
          <span class="mr-2">📝</span> 学习记录
        </h3>
        <div v-if="learningRecords.length === 0" class="text-center py-12">
          <div class="text-6xl mb-4">📖</div>
          <p class="text-gray-500 dark:text-gray-400 text-lg">暂无学习记录</p>
          <p class="text-gray-400 dark:text-gray-500 text-sm mt-2">开始学习诗歌吧~</p>
        </div>
        <div v-else class="space-y-3">
          <div v-for="record in recentRecords" :key="record.id" class="mb-3 p-4 bg-gradient-to-r from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20 rounded-2xl transition-all duration-200 hover:shadow-md border border-green-100 dark:border-green-800">
            <h4 class="font-bold text-green-600 dark:text-green-400 flex items-center">
              <span class="mr-2">📚</span>
              {{ record.poemTitle }}
            </h4>
            <p class="text-gray-600 dark:text-gray-400 text-sm">🕐 {{ formatDate(record.timestamp) }}</p>
            <p class="text-gray-600 dark:text-gray-400 text-sm">⏱️ 学习时长：{{ record.duration }}秒</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { poems as defaultPoems } from '../data/poems.js'
import LearningProgress from '../utils/learningProgress.js'
import { userManager } from '../utils/userManager.js'

let poems = []
try {
  poems = defaultPoems || []
} catch (error) {
  console.error('Error loading poems:', error)
  poems = []
}

export default {
  name: 'PersonalCenter',
  emits: ['go-to-login', 'go-to-report', 'go-to-recommend', 'go-to-game'],
  data() {
    return {
      poems: poems,
      favoritePoems: [],
      learningRecords: [],
      studyStats: {
        totalStudyTime: 0,
        totalPoemsLearned: 0,
        totalSessions: 0,
        streakDays: 0
      },
      currentUser: null,
      syncing: false,
      lastSyncTime: {
        learningProgress: '',
        favorites: '',
        learningRecords: '',
        gameHistory: ''
      },
      poemEmojis: ['🌸', '🌺', '🌻', '🌷', '🌹', '🍀', '⭐', '🌙', '☀️', '🦋', '🐝', '🦚', '🐱', '🐶', '🐰', '🦄', '🐲', '🦋', '🌈', '✨']
    }
  },
  computed: {
    recentRecords() {
      return this.learningRecords.slice(-5).reverse()
    }
  },
  mounted() {
    this.loadCurrentUser()
    this.loadFavorites()
    this.loadLearningRecords()
    this.loadStudyStats()
    this.loadSyncTimes()
  },
  methods: {
    getPoemEmoji(poemId) {
      const index = poemId % this.poemEmojis.length
      return this.poemEmojis[index]
    },
    loadCurrentUser() {
      this.currentUser = userManager.getCurrentUser()
    },
    handleLogout() {
      userManager.logout()
      this.currentUser = null
    },
    goToLogin() {
      this.$emit('go-to-login')
    },
    loadSyncTimes() {
      if (!this.currentUser) return
      const dataTypes = ['learningProgress', 'favorites', 'learningRecords', 'gameHistory']
      dataTypes.forEach(type => {
        const syncData = userManager.getSyncData(type)
        if (syncData) {
          this.lastSyncTime[type] = this.formatSyncTime(syncData.syncedAt)
        }
      })
    },
    formatSyncTime(timestamp) {
      const date = new Date(timestamp)
      return date.toLocaleTimeString()
    },
    syncAllData() {
      if (!this.currentUser) return
      this.syncing = true
      
      const dataTypes = ['learningProgress', 'favorites', 'learningRecords', 'gameHistory']
      
      dataTypes.forEach(type => {
        let data
        switch (type) {
          case 'learningProgress':
            data = LearningProgress.getStudyStats()
            break
          case 'favorites':
            data = JSON.parse(localStorage.getItem('favorites') || '[]')
            break
          case 'learningRecords':
            data = this.learningRecords
            break
          case 'gameHistory':
            data = JSON.parse(localStorage.getItem('gameHistory') || '[]')
            break
        }
        
        if (userManager.syncUserData(type, data)) {
          this.lastSyncTime[type] = this.formatSyncTime(Date.now())
        }
      })
      
      setTimeout(() => {
        this.syncing = false
      }, 500)
    },
    loadFavorites() {
      const favorites = JSON.parse(localStorage.getItem('favorites') || '[]')
      this.favoritePoems = this.poems.filter(poem => favorites.includes(poem.id))
    },
    loadLearningRecords() {
      this.learningRecords = JSON.parse(localStorage.getItem('learningRecords') || '[]')
    },
    loadStudyStats() {
      try {
        const stats = LearningProgress.getStudyStats()
        this.studyStats = {
          totalStudyTime: stats.totalStudyTime || 0,
          totalPoemsLearned: Array.isArray(stats.totalPoemsLearned) ? stats.totalPoemsLearned.length : 0,
          totalSessions: stats.totalSessions || 0,
          streakDays: stats.streakDays || 0
        }
      } catch (error) {
        console.error('Error loading study stats:', error)
        this.studyStats = {
          totalStudyTime: 0,
          totalPoemsLearned: 0,
          totalSessions: 0,
          streakDays: 0
        }
      }
    },
    removeFavorite(poemId) {
      let favorites = JSON.parse(localStorage.getItem('favorites') || '[]')
      favorites = favorites.filter(id => id !== poemId)
      localStorage.setItem('favorites', JSON.stringify(favorites))
      
      const currentUser = userManager.getCurrentUser()
      if (currentUser) {
        userManager.syncUserData('favorites', favorites)
      }
      
      this.loadFavorites()
    },
    formatDate(timestamp) {
      const date = new Date(timestamp)
      return date.toLocaleString()
    },
    formatDuration(seconds) {
      return LearningProgress.formatDuration(seconds)
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
