<template>
  <div class="min-h-screen bg-green-50 dark:bg-gray-900 transition-colors duration-300">
    <LoginPage 
      v-if="showLoginPage" 
      @login-success="handleLoginSuccess" 
      @guest-mode="handleGuestMode" 
    />
    <div v-else>
      <header class="bg-blue-600 dark:bg-gray-800 text-white shadow-md sticky top-0 z-50 transition-all duration-300">
        <div class="container mx-auto px-4 py-4">
          <div class="flex justify-between items-center">
            <h1 class="text-2xl font-bold cursor-pointer hover:scale-105 transition-transform" @click="currentPage = 'home'">青诗照卷</h1>

            <div class="hidden md:flex items-center space-x-6">
              <nav>
                <ul class="flex space-x-6">
                  <li v-for="item in navItems" :key="item.page">
                    <button 
                      @click="currentPage = item.page" 
                      class="hover:text-blue-200 transition-colors duration-200 relative group"
                      :class="{ 'text-blue-200': currentPage === item.page }"
                    >
                      {{ item.label }}
                      <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-200 transition-all duration-200 group-hover:w-full" :class="{ 'w-full': currentPage === item.page }"></span>
                    </button>
                  </li>
                </ul>
              </nav>

              <div v-if="currentUser" class="flex items-center space-x-3 bg-blue-700 dark:bg-gray-700 px-4 py-2 rounded-full">
                <span class="text-lg">👤</span>
                <span class="font-medium">{{ currentUser.username }}</span>
              </div>

              <button 
                @click="toggleTheme"
                class="p-2 rounded-full hover:bg-blue-700 dark:hover:bg-gray-700 transition-all duration-200 hover:scale-110"
                :title="isDark ? '切换到浅色模式' : '切换到深色模式'"
              >
                {{ isDark ? '🌞' : '🌙' }}
              </button>
            </div>

            <div class="md:hidden flex items-center space-x-2">
              <button 
                @click="toggleTheme"
                class="p-2 rounded-full hover:bg-blue-700 dark:hover:bg-gray-700 transition-all duration-200"
              >
                {{ isDark ? '🌞' : '🌙' }}
              </button>
              <button 
                @click="mobileMenuOpen = !mobileMenuOpen"
                class="p-2 rounded-md hover:bg-blue-700 dark:hover:bg-gray-700 transition-all duration-200"
              >
                <span v-if="!mobileMenuOpen">☰</span>
                <span v-else>✕</span>
              </button>
            </div>
          </div>

          <transition name="slide-down">
            <nav v-if="mobileMenuOpen" class="md:hidden mt-4 pb-4 border-t border-blue-500 dark:border-gray-600 pt-4">
              <ul class="space-y-3">
                <li v-for="item in navItems" :key="item.page">
                  <button 
                    @click="handleMobileNav(item.page)"
                    class="block w-full text-left px-4 py-2 rounded-md hover:bg-blue-700 dark:hover:bg-gray-700 transition-all duration-200"
                    :class="{ 'bg-blue-700 dark:bg-gray-700': currentPage === item.page }"
                  >
                    {{ item.label }}
                  </button>
                </li>
                <li v-if="currentUser">
                  <div class="px-4 py-2 text-center bg-blue-700 dark:bg-gray-700 rounded-md">
                    <span class="text-lg">👤</span>
                    <span class="font-medium ml-2">{{ currentUser.username }}</span>
                  </div>
                </li>
              </ul>
            </nav>
          </transition>
        </div>
      </header>

      <main class="container mx-auto px-4 py-8">
        <transition name="fade-slide" mode="out-in">
          <HomePage v-if="currentPage === 'home'" key="home" />
          <PoetryLibrary v-else-if="currentPage === 'library'" key="library" @select-poem="selectPoem" />
          <PoetryDetail v-else-if="currentPage === 'detail'" key="detail" :poem="selectedPoem" @back="currentPage = 'library'" @start-recitation="startRecitation" />
          <Recitation v-else-if="currentPage === 'recitation'" key="recitation" @back="currentPage = 'detail'" />
          <TestCenter v-else-if="currentPage === 'test'" key="test" @back="currentPage = 'home'" />
          <PersonalCenter 
            v-else-if="currentPage === 'personal'" 
            key="personal" 
            @go-to-game="currentPage = 'game'" 
            @go-to-report="currentPage = 'report'" 
            @go-to-recommend="currentPage = 'recommend'"
            @go-to-login="showLoginPage = true"
          />
          <StudyReport v-else-if="currentPage === 'report'" key="report" @back="currentPage = 'home'" @review-poem="selectPoemById" />
          <Recommendation v-else-if="currentPage === 'recommend'" key="recommend" @back="currentPage = 'home'" @select-poem="selectPoemById" @go-to-library="currentPage = 'library'" />
          <GameEntry v-else-if="currentPage === 'game'" key="game" @back="currentPage = 'personal'" />
        </transition>
      </main>

      <footer class="bg-gray-800 dark:bg-gray-950 text-white mt-12 py-6">
        <div class="container mx-auto px-4 text-center">
          <p>© 2026 青诗照卷</p>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
import HomePage from './components/HomePage.vue'
import PoetryLibrary from './components/PoetryLibrary.vue'
import PoetryDetail from './components/PoetryDetail.vue'
import Recitation from './components/Recitation.vue'
import TestCenter from './components/TestCenter.vue'
import PersonalCenter from './components/PersonalCenter.vue'
import GameEntry from './components/GameEntry.vue'
import StudyReport from './components/StudyReport.vue'
import Recommendation from './components/Recommendation.vue'
import LoginPage from './components/LoginPage.vue'
import { poems } from './data/poems.js'
import ThemeManager from './utils/themeManager.js'
import { userManager } from './utils/userManager.js'

export default {
  name: 'App',
  components: {
    HomePage,
    PoetryLibrary,
    PoetryDetail,
    Recitation,
    TestCenter,
    PersonalCenter,
    GameEntry,
    StudyReport,
    Recommendation,
    LoginPage
  },
  data() {
    return {
      currentPage: 'home',
      selectedPoem: null,
      mobileMenuOpen: false,
      isDark: false,
      showLoginPage: false,
      currentUser: null,
      navItems: [
        { page: 'home', label: '首页' },
        { page: 'library', label: '诗歌库' },
        { page: 'recitation', label: '背诵' },
        { page: 'test', label: '测试' },
        { page: 'report', label: '报告' },
        { page: 'recommend', label: '推荐' },
        { page: 'personal', label: '我的' }
      ]
    }
  },
  mounted() {
    this.isDark = ThemeManager.init() === 'dark'
    this.checkLoginStatus()
  },
  methods: {
    checkLoginStatus() {
      this.currentUser = userManager.getCurrentUser()
      this.showLoginPage = !this.currentUser && !localStorage.getItem('hasUsedGuest')
    },
    handleLoginSuccess(user) {
      this.currentUser = user
      this.showLoginPage = false
      this.trySyncUserData()
    },
    handleGuestMode() {
      localStorage.setItem('hasUsedGuest', 'true')
      this.showLoginPage = false
    },
    trySyncUserData() {
      if (!this.currentUser) return
      
      const dataTypes = ['learningProgress', 'favorites', 'learningRecords', 'gameHistory']
      dataTypes.forEach(type => {
        const syncData = userManager.getSyncData(type)
        if (syncData && syncData.data) {
          switch (type) {
            case 'favorites':
              if (!localStorage.getItem('favorites') || localStorage.getItem('favorites') === '[]') {
                localStorage.setItem('favorites', JSON.stringify(syncData.data))
              }
              break
            case 'learningRecords':
              if (!localStorage.getItem('learningRecords') || localStorage.getItem('learningRecords') === '[]') {
                localStorage.setItem('learningRecords', JSON.stringify(syncData.data))
              }
              break
            case 'gameHistory':
              if (!localStorage.getItem('gameHistory') || localStorage.getItem('gameHistory') === '[]') {
                localStorage.setItem('gameHistory', JSON.stringify(syncData.data))
              }
              break
          }
        }
      })
    },
    toggleTheme() {
      this.isDark = ThemeManager.toggleTheme() === 'dark'
    },
    handleMobileNav(page) {
      this.currentPage = page
      this.mobileMenuOpen = false
    },
    selectPoem(poem) {
      this.selectedPoem = poem
      this.currentPage = 'detail'
    },
    selectPoemById(poemId) {
      try {
        const poem = poems.find(p => p.id === poemId)
        if (poem) {
          this.selectedPoem = poem
          this.currentPage = 'detail'
        }
      } catch (error) {
        console.error('Error selecting poem by ID:', error)
      }
    },
    startRecitation(poem) {
      this.selectedPoem = poem
      this.currentPage = 'recitation'
    }
  }
}
</script>

<style>
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.3s ease;
}

.fade-slide-enter-from {
  opacity: 0;
  transform: translateX(20px);
}

.fade-slide-leave-to {
  opacity: 0;
  transform: translateX(-20px);
}

.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.3s ease;
}

.slide-down-enter-from,
.slide-down-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

@media (max-width: 768px) {
  .mobile-menu {
    position: fixed;
    top: 4rem;
    left: 0;
    right: 0;
    background-color: #2563eb;
    padding: 1rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
}
</style>
