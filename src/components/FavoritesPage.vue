<template>
  <div>
    <h2 class="text-3xl font-bold mb-6">我的收藏</h2>
    <div v-if="favoritePoems.length === 0" class="bg-white rounded-lg shadow-md p-6 text-center">
      <p class="text-gray-600">您还没有收藏任何诗歌</p>
    </div>
    <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div 
        v-for="poem in favoritePoems" 
        :key="poem.id"
        class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
      >
        <h3 class="text-xl font-bold mb-2">{{ poem.title }}</h3>
        <p class="text-gray-600 mb-4">作者：{{ poem.author }}</p>
        <p class="text-gray-800 mb-4 line-clamp-3">{{ poem.content }}</p>
        <div class="flex justify-between items-center">
          <span class="text-sm text-gray-500">{{ poem.dynasty }}</span>
          <button 
            @click="removeFavorite(poem)"
            class="text-red-600 hover:text-red-800"
          >
            取消收藏
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { poems } from '../data/poems.js'

export default {
  name: 'FavoritesPage',
  data() {
    return {
      poems: poems
    }
  },
  computed: {
    favoritePoems() {
      const favorites = JSON.parse(localStorage.getItem('favorites') || '[]')
      return this.poems.filter(poem => favorites.includes(poem.id))
    }
  },
  methods: {
    removeFavorite(poem) {
      let favorites = JSON.parse(localStorage.getItem('favorites') || '[]')
      favorites = favorites.filter(id => id !== poem.id)
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