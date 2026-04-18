<template>
  <div class="animate-fade-in">
    <div class="text-center mb-8">
      <h2 class="text-4xl font-bold mb-2 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">✨ 欢迎来到诗词世界 ✨</h2>
      <p class="text-gray-500 dark:text-gray-400">点击喜欢的诗歌，开启你的诗词之旅吧！</p>
    </div>

    <div class="mb-6">
      <div class="relative">
        <input 
          v-model="searchQuery" 
          type="text" 
          placeholder="🔍 搜索诗歌、作者或朝代..." 
          class="w-full px-6 py-4 border-2 border-purple-200 dark:border-purple-700 rounded-2xl bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-4 focus:ring-pink-200 focus:border-pink-400 transition-all duration-300 text-lg shadow-lg hover:shadow-xl"
        >
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div 
        v-for="(poem, index) in filteredPoems" 
        :key="poem.id"
        class="bg-white dark:bg-gray-800 rounded-3xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 cursor-pointer border-2 border-transparent hover:border-pink-300 dark:hover:border-pink-600"
        :style="{ animationDelay: `${index * 50}ms` }"
        @click="$emit('select-poem', poem)"
      >
        <div class="flex items-start justify-between mb-3">
          <h3 class="text-2xl font-bold text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">{{ poem.title }}</h3>
          <span class="text-2xl">{{ getPoemEmoji(poem.id) }}</span>
        </div>
        <p class="text-gray-600 dark:text-gray-300 mb-4 flex items-center">
          <span class="mr-2">👨‍🎨</span> {{ poem.author }}
        </p>
        <p class="text-gray-800 dark:text-gray-200 mb-4 line-clamp-3 text-lg leading-relaxed">{{ poem.content }}</p>
        <div class="flex justify-between items-center">
          <span class="text-sm text-white bg-gradient-to-r from-green-400 to-blue-500 px-4 py-1 rounded-full shadow-md">{{ poem.dynasty }}</span>
          <button 
            @click.stop="toggleFavorite(poem)"
            class="text-3xl hover:scale-125 transition-transform duration-200"
          >
            {{ isFavorite(poem.id) ? '💖' : '🤍' }}
          </button>
        </div>
      </div>
    </div>
    
    <div v-if="filteredPoems.length === 0" class="text-center py-16">
      <div class="text-8xl mb-4">🔍</div>
      <p class="text-gray-500 dark:text-gray-400 text-xl">没有找到匹配的诗歌</p>
      <p class="text-gray-400 dark:text-gray-500 text-sm mt-2">换个关键词试试吧~</p>
    </div>

    <div class="mt-12 bg-gradient-to-r from-yellow-100 via-pink-100 to-purple-100 dark:from-yellow-900/20 dark:via-pink-900/20 dark:to-purple-900/20 rounded-3xl p-8 text-center">
      <h3 class="text-2xl font-bold text-gray-700 dark:text-gray-200 mb-4">📚 温馨提示</h3>
      <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
        点击诗歌卡片可以查看详细内容，<br>
        点击心形按钮可以收藏喜欢的诗歌，<br>
        收藏的诗歌可以在"我的"页面查看哦！💕
      </p>
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
  name: 'HomePage',
  emits: ['select-poem'],
  data() {
    return {
      poems: poems,
      searchQuery: '',
      poemEmojis: ['🌸', '🌺', '🌻', '🌷', '🌹', '🍀', '⭐', '🌙', '☀️', '🦋', '🐝', '🦚', '🐱', '🐶', '🐰', '🦄', '🐲', '🦋', '🌈', '✨']
    }
  },
  computed: {
    filteredPoems() {
      if (!Array.isArray(this.poems)) {
        return []
      }
      if (!this.searchQuery) {
        return this.poems
      }
      const query = this.searchQuery.toLowerCase()
      return this.poems.filter(poem => 
        poem.title.toLowerCase().includes(query) ||
        poem.author.toLowerCase().includes(query) ||
        poem.dynasty.toLowerCase().includes(query) ||
        poem.content.toLowerCase().includes(query)
      )
    }
  },
  methods: {
    getPoemEmoji(poemId) {
      const index = poemId % this.poemEmojis.length
      return this.poemEmojis[index]
    },
    isFavorite(poemId) {
      const favorites = JSON.parse(localStorage.getItem('favorites') || '[]')
      return favorites.includes(poemId)
    },
    toggleFavorite(poem) {
      let favorites = JSON.parse(localStorage.getItem('favorites') || '[]')
      if (favorites.includes(poem.id)) {
        favorites = favorites.filter(id => id !== poem.id)
      } else {
        favorites.push(poem.id)
      }
      localStorage.setItem('favorites', JSON.stringify(favorites))
    }
  }
}
</script>

<style scoped>
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.animate-fade-in {
  animation: fadeIn 0.5s ease-out;
}

@keyframes fadeIn {
  0% { opacity: 0; transform: translateY(20px); }
  100% { opacity: 1; transform: translateY(0); }
}

.hover\:scale-125:hover {
  transform: scale(1.25);
}
</style>
