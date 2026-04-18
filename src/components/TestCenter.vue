<template>
  <div class="animate-fade-in">
    <button @click="$emit('back')" class="mb-6 px-6 py-3 bg-gradient-to-r from-gray-300 to-gray-400 text-gray-800 rounded-2xl hover:from-gray-400 hover:to-gray-500 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center space-x-2">
      <span>←</span>
      <span class="font-semibold">返回</span>
    </button>

    <div class="text-center mb-8">
      <h2 class="text-4xl font-bold mb-2 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent">📝 测试中心</h2>
      <p class="text-gray-500 dark:text-gray-400">检验你的诗词学习成果！</p>
    </div>

    <div class="bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 dark:from-indigo-900/30 dark:via-purple-900/30 dark:to-pink-900/30 rounded-3xl shadow-lg p-6 mb-6 border-2 border-purple-200 dark:border-purple-700">
      <h3 class="text-xl font-bold mb-4 flex items-center">
        <span class="text-3xl mr-2">🎯</span>
        <span class="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">选择测试类型</span>
      </h3>
      <div class="flex space-x-4 justify-center mb-6">
        <button
          @click="testType = 'fill'"
          class="px-6 py-3 rounded-2xl transition-all duration-300 transform hover:scale-105"
          :class="testType === 'fill' ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg' : 'bg-white dark:bg-gray-800 text-gray-800 shadow-md'"
        >
          <span class="flex items-center space-x-2">
            <span>✏️</span>
            <span class="font-semibold">填空题</span>
            <span v-if="getPassedCount('fill') > 0" class="ml-2 bg-green-400 text-white text-xs px-2 py-1 rounded-full">{{ getPassedCount('fill') }}关</span>
          </span>
        </button>
        <button
          @click="testType = 'choice'"
          class="px-6 py-3 rounded-2xl transition-all duration-300 transform hover:scale-105"
          :class="testType === 'choice' ? 'bg-gradient-to-r from-green-500 to-teal-500 text-white shadow-lg' : 'bg-white dark:bg-gray-800 text-gray-800 shadow-md'"
        >
          <span class="flex items-center space-x-2">
            <span>📋</span>
            <span class="font-semibold">选择题</span>
            <span v-if="getPassedCount('choice') > 0" class="ml-2 bg-green-400 text-white text-xs px-2 py-1 rounded-full">{{ getPassedCount('choice') }}关</span>
          </span>
        </button>
        <button
          @click="randomTest"
          class="px-6 py-3 rounded-2xl transition-all duration-300 transform hover:scale-105 bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg"
        >
          <span class="flex items-center space-x-2">
            <span>🎲</span>
            <span class="font-semibold">随机</span>
          </span>
        </button>
      </div>

      <h3 class="text-xl font-bold mb-4 flex items-center">
        <span class="text-3xl mr-2">📦</span>
        <span class="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">选择测试组</span>
      </h3>
      <div class="flex flex-wrap justify-center gap-3">
        <button 
          v-for="group in totalGroups" 
          :key="group"
          @click="selectedGroup = group"
          class="px-6 py-3 rounded-2xl transition-all duration-300 transform hover:scale-105"
          :class="selectedGroup === group ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-white shadow-lg' : 'bg-white dark:bg-gray-800 text-gray-800 shadow-md'"
        >
          <span class="font-semibold">第 {{ group }} 组</span>
        </button>
      </div>
    </div>

    <div class="bg-white rounded-3xl shadow-lg p-6 border-2 border-teal-100 dark:border-teal-800 transition-all hover:shadow-xl">
      <div v-if="!testStarted" class="text-center py-12">
        <h3 class="text-2xl font-bold mb-4 bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">准备开始测试</h3>
        <p class="text-gray-600 dark:text-gray-400 mb-6">选择测试类型和组别后，点击开始按钮</p>
        <button 
          @click="startTest"
          class="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-2xl hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 font-semibold"
        >
          <span class="flex items-center space-x-2">
            <span>🚀</span>
            <span>开始测试</span>
          </span>
        </button>
      </div>

      <div v-else-if="currentQuestionIndex < questions.length">
        <div class="mb-6">
          <div class="flex justify-between items-center mb-4">
            <h3 class="text-xl font-bold flex items-center">
              <span class="text-2xl mr-2">📝</span>
              <span>第 {{ currentQuestionIndex + 1 }} 题 / 共 {{ questions.length }} 题</span>
            </h3>
            <div class="bg-gray-100 dark:bg-gray-700 px-4 py-2 rounded-full text-sm">
              <span>第 {{ selectedGroup }} 组</span>
            </div>
          </div>
          <div class="flex justify-between items-center mb-4">
            <div class="bg-gray-100 dark:bg-gray-700 px-4 py-2 rounded-full text-sm">
              {{ questionStartTime ? formatTimeSpent() : '0秒' }}
            </div>
            <div class="bg-gray-100 dark:bg-gray-700 px-4 py-2 rounded-full text-sm">
              {{ testType === 'fill' ? '填空题' : '选择题' }}
            </div>
          </div>
          
          <p class="text-gray-800 dark:text-gray-200 mb-6 text-lg">{{ currentQuestion.question }}</p>
          
          <!-- 反馈提示 -->
          <div v-if="feedback" class="mb-4 p-4 rounded-2xl border-2 transition-all duration-500" :class="feedback.isCorrect ? 'bg-green-100 border-green-300' : 'bg-red-100 border-red-300'">
            <div class="flex items-center">
              <span class="text-2xl mr-3">{{ feedback.isCorrect ? '✅' : '❌' }}</span>
              <div>
                <p class="font-semibold">{{ feedback.isCorrect ? '回答正确！' : '回答错误！' }}</p>
                <p class="text-sm" v-if="!feedback.isCorrect">正确答案：{{ currentQuestion.answer }}</p>
              </div>
            </div>
          </div>

          <div v-if="testType === 'fill'">
            <input 
              v-model="userAnswer"
              type="text"
              class="w-full px-6 py-3 border-2 border-teal-200 dark:border-teal-700 rounded-2xl bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-4 focus:ring-teal-200 focus:border-teal-400 transition-all duration-300 text-lg shadow-md"
              placeholder="请输入答案"
            >
          </div>
          <div v-else-if="testType === 'choice'">
            <div v-if="currentQuestion && currentQuestion.options" class="space-y-3">
              <div v-for="(option, index) in currentQuestion.options" :key="index" class="mb-3">
                <label class="flex items-center p-4 bg-gray-50 dark:bg-gray-800 rounded-2xl border-2 border-gray-200 dark:border-gray-700 hover:border-teal-300 dark:hover:border-teal-600 transition-all cursor-pointer">
                  <input 
                    type="radio" 
                    :name="'question' + currentQuestionIndex"
                    :value="option"
                    v-model="userAnswer"
                    class="mr-4 w-5 h-5 text-teal-600"
                  >
                  <span class="text-gray-800 dark:text-gray-200">{{ option }}</span>
                </label>
              </div>
            </div>
            <div v-else class="text-center p-6 bg-gray-100 dark:bg-gray-800 rounded-2xl">
              <p class="text-gray-500 dark:text-gray-400">正在加载题目选项...</p>
            </div>
          </div>
        </div>
        <div class="flex justify-between">
          <button 
            @click="prevQuestion"
            :disabled="currentQuestionIndex === 0"
            class="px-6 py-3 bg-gradient-to-r from-gray-300 to-gray-400 text-gray-800 rounded-2xl hover:from-gray-400 hover:to-gray-500 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
          >
            <span>←</span>
            <span class="font-semibold">上一题</span>
          </button>
          <button 
            @click="nextQuestion"
            class="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-2xl hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105 flex items-center space-x-2"
          >
            <span>{{ currentQuestionIndex === questions.length - 1 ? '提交测试' : '下一题' }}</span>
            <span>{{ currentQuestionIndex === questions.length - 1 ? '📤' : '→' }}</span>
          </button>
        </div>
      </div>

      <div v-else>
        <h3 class="text-2xl font-bold mb-6 flex items-center">
          <span class="text-3xl mr-2">🏆</span>
          <span class="bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">测试结果</span>
        </h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div class="bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl shadow-lg p-4 text-white text-center">
            <p class="text-sm opacity-90 mb-1">总题数</p>
            <p class="text-3xl font-bold">{{ questions.length }}</p>
          </div>
          <div class="bg-gradient-to-br from-green-400 to-green-600 rounded-2xl shadow-lg p-4 text-white text-center">
            <p class="text-sm opacity-90 mb-1">正确题数</p>
            <p class="text-3xl font-bold">{{ correctCount }}</p>
          </div>
          <div class="bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl shadow-lg p-4 text-white text-center">
            <p class="text-sm opacity-90 mb-1">得分</p>
            <p class="text-3xl font-bold">{{ score }}分</p>
          </div>
        </div>
        
        <div class="mb-6">
          <p class="text-gray-700 dark:text-gray-300 mb-2">用时：{{ totalTimeSpent }}秒</p>
          <p class="text-gray-700 dark:text-gray-300 mb-2">正确率：{{ (correctCount / questions.length * 100).toFixed(0) }}%</p>
          <p class="text-gray-700 dark:text-gray-300 mb-2">测试组别：第 {{ selectedGroup }} 组</p>
          <p class="text-gray-700 dark:text-gray-300 mb-2">测试类型：{{ testType === 'fill' ? '填空题' : '选择题' }}</p>
        </div>

        <div v-if="incorrectQuestions.length > 0" class="mb-6">
          <h4 class="font-bold text-lg mb-3 flex items-center">
            <span class="text-2xl mr-2">⚠️</span>
            <span>需要加强的题目</span>
          </h4>
          <div class="space-y-3">
            <div v-for="(q, index) in incorrectQuestions" :key="index" class="p-3 bg-orange-50 dark:bg-orange-900/30 border-2 border-orange-200 dark:border-orange-700 rounded-xl">
              <p class="font-medium">{{ q.question }}</p>
              <p class="text-sm text-gray-600 dark:text-gray-400">正确答案：{{ q.answer }}</p>
              <p class="text-sm text-red-600 dark:text-red-400">你的答案：{{ q.userAnswer }}</p>
            </div>
          </div>
        </div>

        <div class="flex flex-wrap gap-4">
          <button 
            @click="resetTest"
            class="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-2xl hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105 flex items-center space-x-2"
          >
            <span>🔄</span>
            <span class="font-semibold">重新测试</span>
          </button>
          <button 
            @click="testStarted = false"
            class="px-6 py-3 bg-gradient-to-r from-gray-300 to-gray-400 text-gray-800 rounded-2xl hover:from-gray-400 hover:to-gray-500 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105 flex items-center space-x-2"
          >
            <span>🏠</span>
            <span class="font-semibold">返回选择</span>
          </button>
          <button 
            @click="nextGroup"
            v-if="selectedGroup < totalGroups"
            class="px-6 py-3 bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-2xl hover:from-green-600 hover:to-teal-600 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105 flex items-center space-x-2"
          >
            <span>➡️</span>
            <span class="font-semibold">下一组</span>
          </button>
          <button 
            @click="$emit('back')"
            class="px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-2xl hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105 flex items-center space-x-2"
          >
            <span>←</span>
            <span class="font-semibold">返回上一页</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { testQuestions } from '../data/test.js'
import { soundEffect } from '../utils/soundEffect.js'
import { poems } from '../data/poems.js'

export default {
  name: 'TestCenter',
  emits: ['back'],
  data() {
    return {
      testType: 'fill',
      testStarted: false,
      questions: [],
      currentQuestionIndex: 0,
      userAnswer: '',
      answers: [],
      feedback: null,
      testStartTime: null,
      questionStartTime: null,
      selectedGroup: 1,
      allChoiceQuestions: [],
      allFillQuestions: [],
      passedPoems: this.loadPassedPoems()
    }
  },
  watch: {
    testType(newType, oldType) {
      if (newType !== oldType) {
        if (newType === 'choice' && this.selectedGroup > Math.ceil(this.allChoiceQuestions.length / 5)) {
          this.selectedGroup = 1
        } else if (newType === 'fill' && this.selectedGroup > Math.ceil(this.allFillQuestions.length / 5)) {
          this.selectedGroup = 1
        }
      }
    }
  },
  computed: {
    currentQuestion() {
      return this.questions[this.currentQuestionIndex]
    },
    correctCount() {
      return this.answers.filter((answer, index) => answer === this.questions[index].answer).length
    },
    score() {
      return Math.round((this.correctCount / this.questions.length) * 100)
    },
    totalTimeSpent() {
      if (!this.testStartTime) return 0
      return Math.floor((Date.now() - this.testStartTime) / 1000)
    },
    incorrectQuestions() {
      return this.questions.map((question, index) => ({
        ...question,
        userAnswer: this.answers[index]
      })).filter(item => {
        const normalizedUserAnswer = this.normalizeAnswer(item.userAnswer)
        const normalizedCorrectAnswer = this.normalizeAnswer(item.answer)
        return normalizedUserAnswer !== normalizedCorrectAnswer
      })
    },
    totalGroups() {
      if (this.testType === 'choice') {
        return Math.ceil(this.allChoiceQuestions.length / 5) || 1
      } else {
        return Math.ceil(this.allFillQuestions.length / 5) || 1
      }
    }
  },
  mounted() {
    this.initializeChoiceQuestions()
    this.initializeFillQuestions()
  },
  methods: {
    loadPassedPoems() {
      const saved = localStorage.getItem('passedPoems')
      return saved ? JSON.parse(saved) : { fill: [], choice: [] }
    },
    
    savePassedPoems() {
      localStorage.setItem('passedPoems', JSON.stringify(this.passedPoems))
    },
    
    markPoemAsPassed(poemId, type) {
      if (!this.passedPoems[type].includes(poemId)) {
        this.passedPoems[type].push(poemId)
        this.savePassedPoems()
      }
    },
    
    isPoemPassed(poemId, type) {
      return this.passedPoems[type].includes(poemId)
    },
    
    getPassedCount(type) {
      return this.passedPoems[type].length
    },
    
    initializeChoiceQuestions() {
      // 1. 按难度对诗词进行排序
      const sortedPoems = this.sortPoemsByDifficulty(poems)
      
      // 2. 从排序后的诗词生成选择题
      const choiceQuestions = []
      let id = 1
      
      // 生成作者题
      sortedPoems.forEach(poem => {
        const authors = this.getRandomAuthors(poem.author)
        const authorQuestion = {
          id: id++,
          type: 'choice',
          poemId: poem.id,
          question: `《${poem.title}》的作者是谁？`,
          options: authors, // 不在这里打乱，留到startTest中统一打乱
          answer: poem.author
        }
        choiceQuestions.push(authorQuestion)
        
        // 生成诗句题（如果诗词足够长）
        const lines = poem.content.split('，')
        if (lines.length >= 2) {
          const lineIndex = Math.floor(Math.random() * (lines.length - 1))
          const currentLine = lines[lineIndex]
          const nextLine = lines[lineIndex + 1]
          
          const distractors = this.getRandomLines(poem.content, nextLine)
          const lineQuestion = {
            id: id++,
            type: 'choice',
            poemId: poem.id,
            question: `"${currentLine}"的下一句是？`,
            options: [nextLine, ...distractors], // 不在这里打乱，留到startTest中统一打乱
            answer: nextLine
          }
          choiceQuestions.push(lineQuestion)
        }
      })
      
      // 3. 保存生成的选择题
      this.allChoiceQuestions = choiceQuestions
      console.log('Generated choice questions:', choiceQuestions.length)
      if (choiceQuestions.length > 0) {
        console.log('First question:', choiceQuestions[0])
      }
    },
    
    initializeFillQuestions() {
      // 1. 按难度对诗词进行排序
      const sortedPoems = this.sortPoemsByDifficulty(poems)
      
      // 2. 从排序后的诗词生成填空题
      const fillQuestions = []
      let id = 1
      
      sortedPoems.forEach(poem => {
        // 正确分割诗句，保留标点
        let lines = poem.content
          .replace(/。/g, '。\n')
          .split('\n')
          .filter(line => line.trim())
          
        // 再次分割逗号
        let allLines = []
        lines.forEach(line => {
          const commaLines = line.split('，')
          allLines.push(...commaLines)
        })
        
        // 过滤空行
        allLines = allLines.filter(line => line.trim())
        
        // 为每句诗生成一道填空题
        allLines.forEach((line, lineIndex) => {
          if (lineIndex < allLines.length - 1) {
            // 填空：下一句
            const currentLine = line.trim()
            const nextLine = allLines[lineIndex + 1].trim()
            
            // 移除标点
            const cleanCurrentLine = currentLine.replace(/[，。]/g, '')
            const cleanNextLine = nextLine.replace(/[，。]/g, '')
            
            fillQuestions.push({
              id: id++,
              type: 'fill',
              poemId: poem.id,
              question: `"${cleanCurrentLine}"，________。`,
              answer: cleanNextLine
            })
            
            // 填空：上一句
            if (lineIndex > 0) {
              const prevLine = allLines[lineIndex - 1].trim()
              const cleanPrevLine = prevLine.replace(/[，。]/g, '')
              
              fillQuestions.push({
                id: id++,
                type: 'fill',
                poemId: poem.id,
                question: `________，${cleanCurrentLine}。`,
                answer: cleanPrevLine
              })
            }
          } else if (lineIndex === allLines.length - 1 && allLines.length > 1) {
            // 最后一句作为上句生成填空题
            const prevLine = allLines[lineIndex - 1].trim()
            const currentLine = line.trim()
            
            const cleanPrevLine = prevLine.replace(/[，。]/g, '')
            const cleanCurrentLine = currentLine.replace(/[，。]/g, '')
            
            fillQuestions.push({
              id: id++,
              type: 'fill',
              poemId: poem.id,
              question: `"${cleanPrevLine}"，________。`,
              answer: cleanCurrentLine
            })
          }
        })
      })
      
      // 3. 保存生成的填空题
      this.allFillQuestions = fillQuestions
      console.log('Generated fill questions:', fillQuestions.length)
      if (fillQuestions.length > 0) {
        console.log('First fill question:', fillQuestions[0])
      }
    },
    
    sortPoemsByDifficulty(poems) {
      return poems.sort((a, b) => {
        // 简单的难度评估：基于诗词长度和复杂度
        const difficultyA = this.calculateDifficulty(a)
        const difficultyB = this.calculateDifficulty(b)
        return difficultyA - difficultyB
      })
    },
    
    calculateDifficulty(poem) {
      // 基于长度、句数和生僻字程度计算难度
      const length = poem.content.length
      const lines = poem.content.split('，').length
      // 简单的生僻字检测（这里简化处理）
      const complexChars = poem.content.match(/[生僻字]/g) || []
      return length + lines * 2 + complexChars.length * 5
    },
    
    getRandomAuthors(correctAuthor) {
      // 获取随机作者作为干扰项
      const allAuthors = [...new Set(poems.map(p => p.author))]
      const filteredAuthors = allAuthors.filter(author => author !== correctAuthor)
      
      // 确保有足够的干扰项
      let randomAuthors = []
      if (filteredAuthors.length >= 3) {
        randomAuthors = this.shuffleArray(filteredAuthors).slice(0, 3)
      } else {
        // 如果作者不够，重复使用
        while (randomAuthors.length < 3) {
          randomAuthors.push(...this.shuffleArray(filteredAuthors))
        }
        randomAuthors = randomAuthors.slice(0, 3)
      }
      
      return [correctAuthor, ...randomAuthors]
    },
    
    getRandomLines(excludePoem, correctLine) {
      // 获取随机诗句作为干扰项
      const allLines = []
      poems.forEach(poem => {
        if (poem.content !== excludePoem) {
          const lines = poem.content.split('，')
          allLines.push(...lines)
        }
      })
      
      const filteredLines = allLines.filter(line => line !== correctLine)
      
      // 确保有足够的干扰项
      let randomLines = []
      if (filteredLines.length >= 3) {
        randomLines = this.shuffleArray(filteredLines).slice(0, 3)
      } else {
        // 如果诗句不够，重复使用
        while (randomLines.length < 3) {
          randomLines.push(...this.shuffleArray(filteredLines))
        }
        randomLines = randomLines.slice(0, 3)
      }
      
      return randomLines
    },
    
    startTest() {
      let groupQuestions = []
      
      const groupSize = 5
      const startIndex = (this.selectedGroup - 1) * groupSize
      
      if (this.testType === 'choice') {
        // 使用预生成的选择题
        console.log('Using choice questions, total:', this.allChoiceQuestions.length)
        console.log('Selected group:', this.selectedGroup)
        
        groupQuestions = this.allChoiceQuestions.slice(startIndex, startIndex + groupSize)
        
        console.log('Group questions:', groupQuestions.length)
        if (groupQuestions.length > 0) {
          console.log('First group question:', groupQuestions[0])
        }
      } else {
        // 使用预生成的填空题
        console.log('Using fill questions, total:', this.allFillQuestions.length)
        console.log('Selected group:', this.selectedGroup)
        
        groupQuestions = this.allFillQuestions.slice(startIndex, startIndex + groupSize)
        
        console.log('Group questions:', groupQuestions.length)
        if (groupQuestions.length > 0) {
          console.log('First group question:', groupQuestions[0])
        }
      }
      
      // 确保至少有5道题
      if (groupQuestions.length < 5) {
        const remaining = 5 - groupQuestions.length
        
        if (this.testType === 'choice') {
          const补充题 = this.allChoiceQuestions.slice(0, remaining)
          groupQuestions = groupQuestions.concat(补充题)
        } else {
          const补充题 = this.allFillQuestions.slice(0, remaining)
          groupQuestions = groupQuestions.concat(补充题)
        }
      }
      
      // 对选择题进行选项打乱
      groupQuestions = groupQuestions.map(question => {
        if (question.type === 'choice' && question.options) {
          const originalAnswer = question.answer
          const shuffledOptions = this.shuffleArray([...question.options])
          return {
            ...question,
            options: shuffledOptions,
            answer: originalAnswer // 保持答案不变
          }
        }
        return question
      })
      
      this.questions = groupQuestions
      console.log('Final questions:', this.questions.length)
      if (this.questions.length > 0) {
        console.log('First final question:', this.questions[0])
      }
      
      this.currentQuestionIndex = 0
      this.userAnswer = ''
      this.answers = []
      this.feedback = null
      this.testStartTime = Date.now()
      this.questionStartTime = Date.now()
      this.testStarted = true
    },
    nextQuestion() {
      const currentAnswer = this.userAnswer.trim()
      this.answers[this.currentQuestionIndex] = currentAnswer
      
      // 标准化答案进行比较（去除空格和标点差异）
      const normalizedUserAnswer = this.normalizeAnswer(currentAnswer)
      const normalizedCorrectAnswer = this.normalizeAnswer(this.currentQuestion.answer)
      const isCorrect = normalizedUserAnswer === normalizedCorrectAnswer
      
      // 播放音效
      if (isCorrect) {
        soundEffect.playCorrectSound()
      } else {
        soundEffect.playWrongSound()
      }
      
      this.feedback = {
        isCorrect: isCorrect
      }
      
      // 3秒后自动继续
      setTimeout(() => {
        if (this.currentQuestionIndex < this.questions.length - 1) {
          this.currentQuestionIndex++
          this.userAnswer = this.answers[this.currentQuestionIndex] || ''
          this.feedback = null
          this.questionStartTime = Date.now()
        } else {
          this.currentQuestionIndex = this.questions.length
          this.feedback = null
          this.finishTest()
        }
      }, 2000)
    },
    
    finishTest() {
      const correctCount = this.correctCount
      const totalCount = this.questions.length
      const passRate = correctCount / totalCount
      
      if (passRate >= 0.8) {
        this.questions.forEach(question => {
          if (question.poemId) {
            this.markPoemAsPassed(question.poemId, this.testType)
          }
        })
        soundEffect.playSuccessSound()
      }
    },
    prevQuestion() {
      if (this.currentQuestionIndex > 0) {
        this.currentQuestionIndex--
        this.userAnswer = this.answers[this.currentQuestionIndex] || ''
        this.feedback = null
        this.questionStartTime = Date.now()
      }
    },
    
    randomTest() {
      const randomType = Math.random() > 0.5 ? 'fill' : 'choice'
      this.testType = randomType
      
      if (randomType === 'choice') {
        this.selectedGroup = Math.floor(Math.random() * Math.ceil(this.allChoiceQuestions.length / 5)) + 1
      } else {
        this.selectedGroup = Math.floor(Math.random() * Math.ceil(this.allFillQuestions.length / 5)) + 1
      }
      
      this.startTest()
    },
    resetTest() {
      this.startTest()
    },
    nextGroup() {
      if (this.selectedGroup < this.totalGroups) {
        this.selectedGroup++
        this.startTest()
      }
    },
    formatTimeSpent() {
      if (!this.questionStartTime) return '0秒'
      const seconds = Math.floor((Date.now() - this.questionStartTime) / 1000)
      return `${seconds}秒`
    },
    shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        ;[array[i], array[j]] = [array[j], array[i]]
      }
      return array
    },
    
    normalizeAnswer(answer) {
      if (!answer) return ''
      return answer
        .replace(/\s+/g, '') // 去除所有空格
        .replace(/[，。、；：！？""''【】（）]/g, '') // 去除中文标点
        .replace(/[,.\-_;:'"()[\]!?]/g, '') // 去除英文标点
        .toLowerCase() // 转为小写
    }
  }
}
</script>

<style scoped>
/* 组件特定样式 */
</style>