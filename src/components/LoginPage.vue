<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center p-4">
    <div class="w-full max-w-md">
      <div class="text-center mb-8">
        <h1 class="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">青诗照卷</h1>
        <p class="text-gray-600 dark:text-gray-300">开启你的诗词学习之旅</p>
      </div>

      <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 animate-fade-in">
        <div class="flex mb-8 bg-gray-100 dark:bg-gray-700 rounded-lg p-1">
          <button
            @click="currentTab = 'login'"
            class="flex-1 py-3 px-4 rounded-lg font-semibold transition-all duration-200"
            :class="currentTab === 'login' ? 'bg-white dark:bg-gray-600 text-blue-600 dark:text-blue-400 shadow' : 'text-gray-600 dark:text-gray-400'"
          >
            登录
          </button>
          <button
            @click="currentTab = 'register'"
            class="flex-1 py-3 px-4 rounded-lg font-semibold transition-all duration-200"
            :class="currentTab === 'register' ? 'bg-white dark:bg-gray-600 text-blue-600 dark:text-blue-400 shadow' : 'text-gray-600 dark:text-gray-400'"
          >
            注册
          </button>
        </div>

        <form @submit.prevent="handleSubmit">
          <div class="mb-6">
            <label class="block text-gray-700 dark:text-gray-300 font-medium mb-2">
              用户名
            </label>
            <input
              v-model="formData.username"
              type="text"
              class="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 rounded-xl text-lg focus:outline-none focus:border-blue-500 dark:bg-gray-700 dark:text-gray-200 transition-colors"
              placeholder="请输入用户名"
            >
          </div>

          <div class="mb-6">
            <label class="block text-gray-700 dark:text-gray-300 font-medium mb-2">
              密码
            </label>
            <input
              v-model="formData.password"
              type="password"
              class="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 rounded-xl text-lg focus:outline-none focus:border-blue-500 dark:bg-gray-700 dark:text-gray-200 transition-colors"
              placeholder="请输入密码"
            >
          </div>

          <div v-if="currentTab === 'register'" class="mb-6">
            <label class="block text-gray-700 dark:text-gray-300 font-medium mb-2">
              确认密码
            </label>
            <input
              v-model="formData.confirmPassword"
              type="password"
              class="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 rounded-xl text-lg focus:outline-none focus:border-blue-500 dark:bg-gray-700 dark:text-gray-200 transition-colors"
              placeholder="请再次输入密码"
            >
          </div>

          <div v-if="message" class="mb-6 p-4 rounded-lg" :class="messageType === 'error' ? 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400' : 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'">
            {{ message }}
          </div>

          <button
            type="submit"
            :disabled="loading"
            class="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-lg font-bold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {{ loading ? '处理中...' : (currentTab === 'login' ? '登录' : '注册') }}
          </button>
        </form>

        <div class="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
          <p class="text-center text-gray-500 dark:text-gray-400 text-sm">
            {{ currentTab === 'login' ? '还没有账号？' : '已有账号？' }}
            <button @click="currentTab = currentTab === 'login' ? 'register' : 'login'" class="text-blue-600 dark:text-blue-400 font-semibold hover:underline">
              {{ currentTab === 'login' ? '立即注册' : '立即登录' }}
            </button>
          </p>
        </div>
      </div>

      <div class="mt-6 text-center">
        <button @click="useGuestMode" class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors">
          游客模式 →
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { userManager } from '../utils/userManager.js'

export default {
  name: 'LoginPage',
  emits: ['login-success', 'guest-mode'],
  data() {
    return {
      currentTab: 'login',
      formData: {
        username: '',
        password: '',
        confirmPassword: ''
      },
      message: '',
      messageType: 'error',
      loading: false
    }
  },
  methods: {
    handleSubmit() {
      this.message = ''
      this.loading = true

      setTimeout(() => {
        if (this.currentTab === 'login') {
          this.handleLogin()
        } else {
          this.handleRegister()
        }
        this.loading = false
      }, 300)
    },
    handleLogin() {
      const result = userManager.login(this.formData.username, this.formData.password)
      if (result.success) {
        this.message = result.message
        this.messageType = 'success'
        setTimeout(() => {
          this.$emit('login-success', result.user)
        }, 500)
      } else {
        this.message = result.message
        this.messageType = 'error'
      }
    },
    handleRegister() {
      if (this.formData.password !== this.formData.confirmPassword) {
        this.message = '两次输入的密码不一致'
        this.messageType = 'error'
        return
      }

      const result = userManager.register(this.formData.username, this.formData.password)
      if (result.success) {
        this.message = result.message + '，请登录'
        this.messageType = 'success'
        this.currentTab = 'login'
        this.formData.password = ''
        this.formData.confirmPassword = ''
      } else {
        this.message = result.message
        this.messageType = 'error'
      }
    },
    useGuestMode() {
      this.$emit('guest-mode')
    }
  }
}
</script>

<style scoped>
.animate-fade-in {
  animation: fadeIn 0.5s ease-in;
}

@keyframes fadeIn {
  0% { opacity: 0; transform: translateY(20px); }
  100% { opacity: 1; transform: translateY(0); }
}
</style>
