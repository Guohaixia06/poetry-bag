<template>
  <div class="animate-fade-in">
    <div class="text-center mb-8">
      <h2 class="text-4xl font-bold mb-2 bg-gradient-to-r from-green-500 via-teal-500 to-cyan-500 bg-clip-text text-transparent">📚 诗歌图书馆 📚</h2>
      <p class="text-gray-500 dark:text-gray-400">探索更多诗词，发现更多精彩！</p>
    </div>

    <div class="mb-6">
      <input 
        v-model="searchQuery" 
        type="text" 
        placeholder="🔍 搜索诗歌、作者或朝代..." 
        class="w-full px-6 py-4 border-2 border-teal-200 dark:border-teal-700 rounded-2xl bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-4 focus:ring-teal-200 focus:border-teal-400 transition-all duration-300 text-lg shadow-lg hover:shadow-xl"
      >
    </div>

    <div class="mb-6 flex flex-wrap justify-center gap-3">
      <button 
        v-for="dynasty in dynasties" 
        :key="dynasty"
        @click="selectedDynasty = dynasty"
        class="px-5 py-2 m-1 rounded-full transition-all duration-300 transform hover:scale-110 shadow-md hover:shadow-lg"
        :class="selectedDynasty === dynasty ? 'bg-gradient-to-r from-teal-500 to-cyan-500 text-white shadow-lg' : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-teal-50 dark:hover:bg-teal-900/30'"
      >
        {{ dynasty }}
      </button>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div 
        v-for="(poem, index) in filteredPoems" 
        :key="poem.id"
        class="bg-white dark:bg-gray-800 rounded-3xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 cursor-pointer border-2 border-transparent hover:border-teal-300 dark:hover:border-teal-600"
        :style="{ animationDelay: `${index * 30}ms` }"
        @click="selectPoem(poem)"
      >
        <div class="flex items-start justify-between mb-3">
          <h3 class="text-2xl font-bold text-transparent bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text">{{ poem.title }}</h3>
          <span class="text-2xl">{{ getPoemEmoji(poem.id) }}</span>
        </div>
        <p class="text-gray-600 dark:text-gray-300 mb-3 flex items-center">
          <span class="mr-2">👨‍🎨</span> {{ poem.author }}
        </p>
        <p class="text-gray-800 dark:text-gray-200 mb-4 line-clamp-3 text-base">{{ poem.content }}</p>
        <div class="flex justify-between items-center">
          <span class="text-sm text-white bg-gradient-to-r from-purple-400 to-pink-500 px-4 py-1 rounded-full shadow-sm">🏷️ {{ poem.dynasty }}</span>
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
      <p class="text-gray-500 dark:text-gray-400 text-xl">未找到匹配的诗歌</p>
      <p class="text-gray-400 dark:text-gray-500 text-sm mt-2">换个关键词试试吧~</p>
    </div>
  </div>
</template>

<script>
import { poems as defaultPoems } from '../data/poems.js'
import { userManager } from '../utils/userManager.js'

let poems = []
try {
  poems = defaultPoems || []
} catch (error) {
  console.error('Error loading poems:', error)
  poems = []
}

export default {
  name: 'PoetryLibrary',
  emits: ['select-poem'],
  data() {
    return {
      poems: poems,
      searchQuery: '',
      selectedDynasty: '全部',
      favoriteUpdateKey: 0,
      poemEmojis: ['🌸', '🌺', '🌻', '🌷', '🌹', '🍀', '⭐', '🌙', '☀️', '🦋', '🐝', '🦚', '🐱', '🐶', '🐰', '🦄', '🐲', '🦋', '🌈', '✨']
    }
  },
  computed: {
    dynasties() {
      if (!Array.isArray(this.poems)) {
        return ['全部']
      }
      const uniqueDynasties = ['全部', ...new Set(this.poems.map(poem => poem.dynasty))]
      return uniqueDynasties
    },
    filteredPoems() {
      this.favoriteUpdateKey
      if (!Array.isArray(this.poems)) {
        return []
      }
      let result = this.poems
      
      if (this.selectedDynasty !== '全部') {
        result = result.filter(poem => poem.dynasty === this.selectedDynasty)
      }
      
      if (this.searchQuery) {
        const query = this.searchQuery.toLowerCase()
        result = result.filter(poem => 
          poem.title.toLowerCase().includes(query) ||
          poem.author.toLowerCase().includes(query) ||
          poem.dynasty.toLowerCase().includes(query) ||
          poem.content.toLowerCase().includes(query)
        )
      }
      
      return result
    }
  },
  methods: {
    selectPoem(poem) {
      this.$emit('select-poem', poem)
    },
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
      this.favoriteUpdateKey++
      
      const currentUser = userManager.getCurrentUser()
      if (currentUser) {
        userManager.syncUserData('favorites', favorites)
      }
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
