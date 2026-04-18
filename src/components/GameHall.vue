<template>
  <div class="animate-fade-in">
    <button @click="$emit('back')" class="mb-6 px-6 py-3 bg-gradient-to-r from-gray-300 to-gray-400 dark:from-gray-600 dark:to-gray-700 text-gray-800 dark:text-gray-200 rounded-2xl hover:from-gray-400 hover:to-gray-500 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center space-x-2">
      <span>←</span>
      <span class="font-semibold">返回个人中心</span>
    </button>

    <div class="text-center mb-8">
      <h2 class="text-4xl font-bold mb-2 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">🎮 诗词游戏 🎮</h2>
      <p class="text-gray-500 dark:text-gray-400">在游戏中学习诗词，让学习更有趣！</p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8 max-w-6xl mx-auto">
      <div class="bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 dark:from-blue-900/30 dark:via-purple-900/30 dark:to-pink-900/30 rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:scale-105 border-4 border-white dark:border-gray-700" @click="startGame('fillBlank')">
        <div class="text-7xl mb-4 text-center animate-bounce">📝</div>
        <h3 class="text-2xl font-bold text-gray-800 dark:text-white mb-3 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">古诗填空</h3>
        <p class="text-gray-600 dark:text-gray-300 text-center mb-6 leading-relaxed">
          🎯 显示一首古诗，缺少了最后一句<br>
          ✅ 从4个选项中选择正确答案<br>
          ⏱️ 看看你能答对多少题！
        </p>
        <div class="flex justify-center">
          <button class="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-2xl hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-110 shadow-lg flex items-center space-x-2">
            <span>开始游戏</span>
            <span class="text-xl">🚀</span>
          </button>
        </div>
      </div>

      <div class="bg-gradient-to-br from-green-100 via-teal-100 to-cyan-100 dark:from-green-900/30 dark:via-teal-900/30 dark:to-cyan-900/30 rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:scale-105 border-4 border-white dark:border-gray-700" @click="startGame('poetryChain')">
        <div class="text-7xl mb-4 text-center animate-bounce" style="animation-delay: 0.2s;">🔗</div>
        <h3 class="text-2xl font-bold text-gray-800 dark:text-white mb-3 text-center bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">诗词接龙</h3>
        <p class="text-gray-600 dark:text-gray-300 text-center mb-6 leading-relaxed">
          🎯 根据给出的古诗上句<br>
          ✍️ 在输入框中填写对应的下句<br>
          🏆 考验你的诗词背诵功底！
        </p>
        <div class="flex justify-center">
          <button class="px-8 py-3 bg-gradient-to-r from-green-500 to-teal-500 text-white font-bold rounded-2xl hover:from-green-600 hover:to-teal-600 transition-all duration-300 transform hover:scale-110 shadow-lg flex items-center space-x-2">
            <span>开始游戏</span>
            <span class="text-xl">🚀</span>
          </button>
        </div>
      </div>

      <div class="bg-gradient-to-br from-yellow-100 via-orange-100 to-red-100 dark:from-yellow-900/30 dark:via-orange-900/30 dark:to-red-900/30 rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:scale-105 border-4 border-white dark:border-gray-700" @click="startGame('poetryMatch')">
        <div class="text-7xl mb-4 text-center animate-bounce" style="animation-delay: 0.4s;">💫</div>
        <h3 class="text-2xl font-bold text-gray-800 dark:text-white mb-3 text-center bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">诗词消消乐</h3>
        <p class="text-gray-600 dark:text-gray-300 text-center mb-6 leading-relaxed">
          🎯 将打乱的诗句重新组合<br>
          ✨ 找到能拼成完整诗句的组合<br>
          🏆 完成关卡赢取金币奖励！
        </p>
        <div class="flex justify-center">
          <button class="px-8 py-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-bold rounded-2xl hover:from-yellow-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-110 shadow-lg flex items-center space-x-2">
            <span>开始游戏</span>
            <span class="text-xl">🚀</span>
          </button>
        </div>
      </div>
    </div>

    <div class="max-w-2xl mx-auto">
      <div class="bg-gradient-to-br from-yellow-100 via-orange-100 to-red-100 dark:from-yellow-900/30 dark:via-orange-900/30 dark:to-red-900/30 rounded-3xl shadow-xl p-6 border-4 border-yellow-200 dark:border-yellow-700">
        <h3 class="text-xl font-bold text-gray-800 dark:text-white mb-4 flex items-center">
          <span class="text-3xl mr-2">🏆</span>
          <span class="bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">游戏记录</span>
        </h3>
        <div v-if="leaderboard.length === 0" class="text-center py-8">
          <p class="text-5xl mb-2">📭</p>
          <p class="text-gray-500 dark:text-gray-400">暂无游戏记录，快去玩一局吧！</p>
        </div>
        <div v-else class="space-y-3">
          <div v-for="(record, index) in leaderboard" :key="index" class="flex items-center justify-between p-4 bg-white/80 dark:bg-gray-800/80 rounded-2xl transition-all duration-200 hover:bg-white dark:hover:bg-gray-700 hover:scale-102 border-2 border-gray-100 dark:border-gray-600">
            <div class="flex items-center">
              <span class="text-4xl mr-3">
                {{ index === 0 ? '🥇' : index === 1 ? '🥈' : index === 2 ? '🥉' : '🎮' }}
              </span>
              <div>
                <p class="font-bold text-gray-800 dark:text-gray-200">
                  {{ getGameTypeName(record.gameType) }}
                  <span class="text-lg ml-2 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">{{ record.score }} 分</span>
                </p>
                <p class="text-sm text-gray-500 dark:text-gray-400">{{ formatDate(record.timestamp) }}</p>
              </div>
            </div>
            <div class="text-right">
              <p class="text-sm font-medium text-green-600 dark:text-green-400">✅ 正确 {{ record.correctCount }}/{{ record.totalQuestions }}</p>
              <p class="text-xs text-gray-500 dark:text-gray-400">{{ Math.round(record.correctCount / record.totalQuestions * 100) }}% 正确率</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GameHall',
  emits: ['start-game', 'back'],
  data() {
    return {
      leaderboard: []
    }
  },
  mounted() {
    this.loadLeaderboard()
  },
  methods: {
    startGame(gameType) {
      this.$emit('start-game', gameType)
    },
    loadLeaderboard() {
      try {
        const gameHistory = JSON.parse(localStorage.getItem('gameHistory') || '[]')
        this.leaderboard = gameHistory
          .sort((a, b) => b.timestamp - a.timestamp)
          .slice(0, 5)
      } catch (error) {
        console.error('Error loading leaderboard:', error)
        this.leaderboard = []
      }
    },
    getGameTypeName(gameType) {
      const names = {
        'fillBlank': '古诗填空',
        'poetryChain': '诗词接龙',
        'poetryMatch': '诗词消消乐'
      }
      return names[gameType] || gameType
    },
    formatDate(timestamp) {
      const date = new Date(timestamp)
      return date.toLocaleDateString() + ' ' + date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
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
