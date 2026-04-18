<template>
  <div>
    <h2 class="text-3xl font-bold mb-6">诗歌分类</h2>
    <div class="mb-6">
      <button 
        v-for="dynasty in dynasties" 
        :key="dynasty"
        @click="selectedDynasty = dynasty"
        class="px-4 py-2 m-1 rounded-full"
        :class="selectedDynasty === dynasty ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'"
      >
        {{ dynasty }}
      </button>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div 
        v-for="poem in filteredPoems" 
        :key="poem.id"
        class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
      >
        <h3 class="text-xl font-bold mb-2">{{ poem.title }}</h3>
        <p class="text-gray-600 mb-4">作者：{{ poem.author }}</p>
        <p class="text-gray-800 mb-4 line-clamp-3">{{ poem.content }}</p>
        <div class="flex justify-between items-center">
          <span class="text-sm text-gray-500">{{ poem.dynasty }}</span>
          <button 
            @click="toggleFavorite(poem)"
            class="text-blue-600 hover:text-blue-800"
          >
            {{ isFavorite(poem.id) ? '取消收藏' : '收藏' }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { poems } from '../data/poems.js'

export default {
  name: 'CategoriesPage',
  data() {
    return {
      poems: poems,
      selectedDynasty: '全部'
    }
  },
  computed: {
    dynasties() {
      const uniqueDynasties = ['全部', ...new Set(this.poems.map(poem => poem.dynasty))]
      return uniqueDynasties
    },
    filteredPoems() {
      if (this.selectedDynasty === '全部') {
        return this.poems
      }
      return this.poems.filter(poem => poem.dynasty === this.selectedDynasty)
    }
  },
  methods: {
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
</style>