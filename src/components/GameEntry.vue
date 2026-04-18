<template>
  <div>
    <GameHall 
      v-if="currentView === 'hall'" 
      @start-game="startGame" 
      @back="$emit('back')" 
    />
    <PoetryEliminationGame 
      v-else-if="currentView === 'poetryMatch'"
      @back="currentView = 'hall'" 
    />
    <GamePage 
      v-else 
      :game-type="currentView" 
      @back="currentView = 'hall'" 
    />
  </div>
</template>

<script>
import GameHall from './GameHall.vue'
import GamePage from './GamePage.vue'
import PoetryEliminationGame from './PoetryEliminationGame.vue'

export default {
  name: 'GameEntry',
  components: {
    GameHall,
    GamePage,
    PoetryEliminationGame
  },
  emits: ['back'],
  data() {
    return {
      currentView: 'hall'
    }
  },
  methods: {
    startGame(gameType) {
      this.currentView = gameType
    }
  }
}
</script>

<style scoped>
/* 组件特定样式 */
</style>
