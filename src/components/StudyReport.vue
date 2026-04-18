<template>
  <div class="animate-fade-in">
    <div class="text-center mb-8">
      <h2 class="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">📊 我的学习报告 📊</h2>
      <p class="text-gray-500 dark:text-gray-400">小诗人，快来看看你的学习成果吧！</p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      <div class="bg-gradient-to-br from-blue-400 to-blue-600 rounded-3xl shadow-lg p-6 text-white transform hover:scale-105 hover:rotate-1 transition-all duration-300 hover:shadow-xl">
        <div class="text-4xl mb-2">⏰</div>
        <h3 class="text-sm opacity-90 mb-1">🌟 总学习时长</h3>
        <p class="text-3xl font-bold">{{ report.totalStudyTimeFormatted || '0秒' }}</p>
        <p class="text-xs opacity-80 mt-2 bg-white/20 rounded-full px-3 py-1">累计学习 {{ report.totalSessions || 0 }} 次</p>
      </div>

      <div class="bg-gradient-to-br from-green-400 to-green-600 rounded-3xl shadow-lg p-6 text-white transform hover:scale-105 hover:-rotate-1 transition-all duration-300 hover:shadow-xl">
        <div class="text-4xl mb-2">🌞</div>
        <h3 class="text-sm opacity-90 mb-1">✨ 今日学习</h3>
        <p class="text-3xl font-bold">{{ report.todayDurationFormatted || '0秒' }}</p>
        <p class="text-xs opacity-80 mt-2 bg-white/20 rounded-full px-3 py-1">学习了 {{ report.todayPoemsCount || 0 }} 首诗歌</p>
      </div>

      <div class="bg-gradient-to-br from-orange-400 to-red-500 rounded-3xl shadow-lg p-6 text-white transform hover:scale-105 hover:rotate-1 transition-all duration-300 hover:shadow-xl">
        <div class="text-4xl mb-2">📅</div>
        <h3 class="text-sm opacity-90 mb-1">🎯 本周学习</h3>
        <p class="text-3xl font-bold">{{ report.weekDurationFormatted || '0秒' }}</p>
        <p class="text-xs opacity-80 mt-2 bg-white/20 rounded-full px-3 py-1">学习了 {{ report.weekPoemsCount || 0 }} 首诗歌</p>
      </div>

      <div class="bg-gradient-to-br from-purple-400 to-purple-700 rounded-3xl shadow-lg p-6 text-white transform hover:scale-105 hover:-rotate-1 transition-all duration-300 hover:shadow-xl">
        <div class="text-4xl mb-2">🔥</div>
        <h3 class="text-sm opacity-90 mb-1">💪 学习连续</h3>
        <p class="text-3xl font-bold">{{ report.streakDays || 0 }} 天</p>
        <p class="text-xs opacity-80 mt-2 bg-white/20 rounded-full px-3 py-1">坚持就是胜利！</p>
      </div>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
      <div class="bg-white rounded-3xl shadow-lg p-6 border-2 border-pink-100 dark:border-pink-800 transition-all duration-300 hover:shadow-xl hover:border-pink-300">
        <h3 class="text-xl font-bold mb-4 flex items-center">
          <span class="text-3xl mr-2">📊</span>
          <span class="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">学习概览</span>
        </h3>
        <div class="space-y-4">
          <div class="flex justify-between items-center p-3 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/30 dark:to-cyan-900/30 rounded-2xl">
            <span class="text-gray-600 dark:text-gray-300 flex items-center"><span class="text-xl mr-2">📚</span> 已学习诗歌</span>
            <span class="text-2xl font-bold text-blue-600 dark:text-blue-400">{{ report.totalPoemsLearned || 0 }} <span class="text-sm">首</span></span>
          </div>
          <div class="flex justify-between items-center p-3 bg-gradient-to-r from-green-50 to-teal-50 dark:from-green-900/30 dark:to-teal-900/30 rounded-2xl">
            <span class="text-gray-600 dark:text-gray-300 flex items-center"><span class="text-xl mr-2">⏱️</span> 日均学习时长</span>
            <span class="text-2xl font-bold text-green-600 dark:text-green-400">{{ formatDuration(report.averageDailyTime) }}</span>
          </div>
          <div class="flex justify-between items-center p-3 bg-gradient-to-r from-orange-50 to-yellow-50 dark:from-orange-900/30 dark:to-yellow-900/30 rounded-2xl">
            <span class="text-gray-600 dark:text-gray-300 flex items-center"><span class="text-xl mr-2">🎮</span> 学习总次数</span>
            <span class="text-2xl font-bold text-orange-600 dark:text-orange-400">{{ report.totalSessions || 0 }} <span class="text-sm">次</span></span>
          </div>
        </div>
      </div>

      <div class="bg-white rounded-3xl shadow-lg p-6 border-2 border-purple-100 dark:border-purple-800 transition-all duration-300 hover:shadow-xl hover:border-purple-300">
        <h3 class="text-xl font-bold mb-4 flex items-center">
          <span class="text-3xl mr-2">💡</span>
          <span class="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">学习建议</span>
        </h3>
        <div class="space-y-3">
          <div v-if="(report.streakDays || 0) < 3" class="p-4 bg-gradient-to-r from-yellow-100 to-orange-100 border-2 border-yellow-300 rounded-2xl transform hover:scale-102 transition-all">
            <p class="text-yellow-800 flex items-center"><span class="text-2xl mr-2">🌱</span> 刚开始学习，建议每天坚持背诵一首诗歌</p>
          </div>
          <div v-else-if="(report.streakDays || 0) < 7" class="p-4 bg-gradient-to-r from-green-100 to-emerald-100 border-2 border-green-300 rounded-2xl transform hover:scale-102 transition-all">
            <p class="text-green-800 flex items-center"><span class="text-2xl mr-2">🔥</span> 学习习惯正在养成，继续保持！</p>
          </div>
          <div v-else class="p-4 bg-gradient-to-r from-blue-100 to-indigo-100 border-2 border-blue-300 rounded-2xl transform hover:scale-102 transition-all">
            <p class="text-blue-800 flex items-center"><span class="text-2xl mr-2">⭐</span> 太棒了！您已经连续学习 {{ report.streakDays || 0 }} 天</p>
          </div>

          <div v-if="(report.todayPoemsCount || 0) === 0" class="p-4 bg-gradient-to-r from-orange-100 to-red-100 border-2 border-orange-300 rounded-2xl transform hover:scale-102 transition-all">
            <p class="text-orange-800 flex items-center"><span class="text-2xl mr-2">📚</span> 今天还没有学习，赶紧开始吧！</p>
          </div>
          <div v-else-if="(report.todayPoemsCount || 0) > 0 && (report.todayDuration || 0) < 300" class="p-4 bg-gradient-to-r from-cyan-100 to-blue-100 border-2 border-cyan-300 rounded-2xl transform hover:scale-102 transition-all">
            <p class="text-cyan-800 flex items-center"><span class="text-2xl mr-2">⏰</span> 今天的学习时间较短，建议多花些时间复习</p>
          </div>

          <div v-if="(report.totalPoemsLearned || 0) < 10" class="p-4 bg-gradient-to-r from-purple-100 to-pink-100 border-2 border-purple-300 rounded-2xl transform hover:scale-102 transition-all">
            <p class="text-purple-800 flex items-center"><span class="text-2xl mr-2">📖</span> 建议系统学习，先把基础打牢</p>
          </div>
        </div>
      </div>
    </div>

    <div v-if="(report.weakPoems && report.weakPoems.length) > 0" class="bg-gradient-to-br from-orange-100 to-red-100 dark:from-orange-900/30 dark:to-red-900/30 rounded-3xl shadow-lg p-6 mb-6 border-2 border-orange-200 dark:border-orange-700">
      <h3 class="text-xl font-bold mb-4 flex items-center">
        <span class="text-3xl mr-2">⚠️</span>
        <span class="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">需要加强的诗歌</span>
      </h3>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div
          v-for="poemId in report.weakPoems"
          :key="poemId"
          class="p-4 bg-white rounded-2xl border-2 border-orange-200 cursor-pointer hover:bg-gradient-to-r hover:from-orange-50 hover:to-red-50 hover:scale-105 hover:shadow-lg transition-all duration-300"
          @click="$emit('review-poem', poemId)"
        >
          <div class="flex items-center justify-between">
            <div>
              <h4 class="font-bold text-orange-700">{{ getPoemTitle(poemId) }}</h4>
              <p class="text-sm text-gray-500">{{ getPoemAuthor(poemId) }}</p>
            </div>
            <span class="text-3xl">📖</span>
          </div>
          <p class="text-xs text-orange-600 mt-2 bg-orange-50 rounded-full px-3 py-1 inline-block">点击复习这首诗</p>
        </div>
      </div>
    </div>

    <div class="bg-white rounded-3xl shadow-lg p-6 mb-6 border-2 border-teal-100 dark:border-teal-800 transition-all duration-300 hover:shadow-xl">
      <h3 class="text-xl font-bold mb-4 flex items-center">
        <span class="text-3xl mr-2">📝</span>
        <span class="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">最近学习记录</span>
      </h3>
      <div v-if="!(report.recentActivity && report.recentActivity.length)" class="text-center py-8">
        <p class="text-4xl mb-2">📭</p>
        <p class="text-gray-600">暂无学习记录</p>
        <p class="text-gray-400 text-sm mt-1">快去开始你的诗词之旅吧！</p>
      </div>
      <div v-else class="space-y-3">
        <div
          v-for="record in report.recentActivity"
          :key="record.id"
          class="flex justify-between items-center p-4 bg-gradient-to-r from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-2xl border border-gray-100 dark:border-gray-700 hover:border-teal-200 dark:hover:border-teal-600 transition-all duration-300"
        >
          <div class="flex items-center space-x-3">
            <span class="text-3xl">{{ getTypeEmoji(record.type) }}</span>
            <div>
              <h4 class="font-medium text-gray-800 dark:text-gray-200">{{ record.poemTitle }}</h4>
              <p class="text-sm text-gray-500">{{ formatDate(record.timestamp) }}</p>
            </div>
          </div>
          <div class="text-right">
            <span
              class="inline-block px-4 py-1 text-sm rounded-full font-medium"
              :class="getTypeClass(record.type)"
            >
              {{ getTypeName(record.type) }}
            </span>
            <p class="text-sm text-gray-500 mt-1">⏱️ {{ record.duration }}秒</p>
          </div>
        </div>
      </div>
    </div>

    <div class="flex justify-between items-center">
      <button
        @click="$emit('back')"
        class="px-6 py-3 bg-gradient-to-r from-gray-300 to-gray-400 text-gray-800 rounded-2xl hover:from-gray-400 hover:to-gray-500 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center space-x-2"
      >
        <span>←</span>
        <span class="font-semibold">返回</span>
      </button>
      <button
        @click="exportReport"
        class="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-2xl hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center space-x-2"
      >
        <span>📥</span>
        <span class="font-semibold">导出报告</span>
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
  name: 'StudyReport',
  data() {
    return {
      poems: poems,
      report: {}
    }
  },
  mounted() {
    this.loadReport()
  },
  methods: {
    loadReport() {
      try {
        console.log('开始加载报告...')
        // 先检查localStorage中的数据
        const studyStats = JSON.parse(localStorage.getItem('studyStats') || 'null')
        console.log('localStorage中的studyStats:', studyStats)
        if (studyStats && studyStats.totalPoemsLearned) {
          console.log('totalPoemsLearned类型:', typeof studyStats.totalPoemsLearned)
          console.log('totalPoemsLearned是否是数组:', Array.isArray(studyStats.totalPoemsLearned))
        }
        
        this.report = LearningProgress.generateReport()
        console.log('报告加载成功:', this.report)
      } catch (error) {
        console.error('Error generating report:', error)
        console.error('错误堆栈:', error.stack)
        this.report = {
          totalStudyTime: 0,
          totalStudyTimeFormatted: '0秒',
          totalPoemsLearned: 0,
          totalSessions: 0,
          streakDays: 0,
          todayDuration: 0,
          todayDurationFormatted: '0秒',
          todayPoemsCount: 0,
          weekDuration: 0,
          weekDurationFormatted: '0秒',
          weekPoemsCount: 0,
          weakPoems: [],
          strongPoems: [],
          recentActivity: [],
          averageDailyTime: 0
        }
      }
    },
    getPoemTitle(poemId) {
      const poem = this.poems.find(p => p.id === poemId)
      return poem ? poem.title : '未知诗歌'
    },
    getPoemAuthor(poemId) {
      const poem = this.poems.find(p => p.id === poemId)
      return poem ? poem.author : '未知作者'
    },
    formatDuration(seconds) {
      return LearningProgress.formatDuration(seconds)
    },
    formatDate(timestamp) {
      const date = new Date(timestamp)
      return date.toLocaleString()
    },
    getTypeName(type) {
      const typeMap = {
        read: '阅读',
        recite: '背诵',
        test: '测试',
        game: '游戏'
      }
      return typeMap[type] || type
    },
    getTypeEmoji(type) {
      const emojiMap = {
        read: '📖',
        recite: '🎤',
        test: '📝',
        game: '🎮'
      }
      return emojiMap[type] || '📚'
    },
    getTypeClass(type) {
      const classMap = {
        read: 'bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300',
        recite: 'bg-green-100 text-green-700 dark:bg-green-900/50 dark:text-green-300',
        test: 'bg-purple-100 text-purple-700 dark:bg-purple-900/50 dark:text-purple-300',
        game: 'bg-orange-100 text-orange-700 dark:bg-orange-900/50 dark:text-orange-300'
      }
      return classMap[type] || 'bg-gray-100 text-gray-700 dark:bg-gray-900/50 dark:text-gray-300'
    },
    exportReport() {
      const reportData = {
        生成时间: new Date().toLocaleString(),
        学习统计: {
          总学习时长: this.report.totalStudyTimeFormatted,
          已学习诗歌数: this.report.totalPoemsLearned,
          学习总次数: this.report.totalSessions,
          连续学习天数: this.report.streakDays,
          日均学习时长: this.formatDuration(this.report.averageDailyTime)
        },
        今日学习: {
          学习时长: this.report.todayDurationFormatted,
          学习诗歌数: this.report.todayPoemsCount
        },
        本周学习: {
          学习时长: this.report.weekDurationFormatted,
          学习诗歌数: this.report.weekPoemsCount
        }
      }

      const blob = new Blob([JSON.stringify(reportData, null, 2)], { type: 'application/json' })
      const url = URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = `学习报告_${new Date().toISOString().split('T')[0]}.json`
      a.click()
      URL.revokeObjectURL(url)
    }
  }
}
</script>

<style scoped>
</style>