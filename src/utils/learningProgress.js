const STORAGE_KEYS = {
  LEARNING_RECORDS: 'learningRecords',
  STUDY_STATS: 'studyStats',
  POEM_DIFFICULTY: 'poemDifficulty',
  RECOMMENDATIONS: 'recommendations'
}

export const LearningProgress = {
  startTime: null,
  currentPoemId: null,

  startLearning(poemId, poemTitle) {
    if (!poemId || !poemTitle) {
      console.warn('Invalid parameters for startLearning')
      return {
        poemId: null,
        poemTitle: null,
        startTime: null
      }
    }
    this.startTime = Date.now()
    this.currentPoemId = poemId
    return {
      poemId,
      poemTitle,
      startTime: this.startTime
    }
  },

  endLearning(poemId, poemTitle, type = 'read', completed = false) {
    if (!this.startTime || this.currentPoemId !== poemId) {
      this.startLearning(poemId, poemTitle)
    }

    const endTime = Date.now()
    const duration = Math.round((endTime - this.startTime) / 1000)

    const record = {
      id: Date.now(),
      poemId,
      poemTitle,
      type,
      duration,
      completed,
      timestamp: endTime,
      date: new Date().toISOString().split('T')[0]
    }

    const records = this.getLearningRecords()
    records.push(record)
    localStorage.setItem(STORAGE_KEYS.LEARNING_RECORDS, JSON.stringify(records))

    this.updateStudyStats(record)
    this.updatePoemDifficulty(poemId, type, completed)

    this.startTime = null
    this.currentPoemId = null

    return record
  },

  getLearningRecords(limit = null) {
    const records = JSON.parse(localStorage.getItem(STORAGE_KEYS.LEARNING_RECORDS) || '[]')
    return limit ? records.slice(-limit) : records
  },

  getTodayRecords() {
    const today = new Date().toISOString().split('T')[0]
    const records = this.getLearningRecords()
    return records.filter(r => r.date === today)
  },

  getWeekRecords() {
    const weekAgo = new Date()
    weekAgo.setDate(weekAgo.getDate() - 7)
    const records = this.getLearningRecords()
    return records.filter(r => new Date(r.timestamp) > weekAgo)
  },

  updateStudyStats(record) {
    let stats = JSON.parse(localStorage.getItem(STORAGE_KEYS.STUDY_STATS) || JSON.stringify({
      totalStudyTime: 0,
      totalPoemsLearned: [],
      totalSessions: 0,
      favoriteTimes: {},
      streakDays: 0,
      lastStudyDate: null
    }))

    // 确保totalPoemsLearned是一个Set对象
    if (!Array.isArray(stats.totalPoemsLearned)) {
      stats.totalPoemsLearned = []
    }
    const totalPoemsLearnedSet = new Set(stats.totalPoemsLearned)
    totalPoemsLearnedSet.add(record.poemId)

    stats.totalStudyTime += record.duration
    stats.totalPoemsLearned = Array.from(totalPoemsLearnedSet)
    stats.totalSessions++
    stats.favoriteTimes[record.poemId] = (stats.favoriteTimes[record.poemId] || 0) + record.duration

    const today = new Date().toISOString().split('T')[0]
    if (stats.lastStudyDate) {
      const lastDate = new Date(stats.lastStudyDate)
      const todayDate = new Date(today)
      const diffDays = Math.floor((todayDate - lastDate) / (1000 * 60 * 60 * 24))

      if (diffDays === 1) {
        stats.streakDays++
      } else if (diffDays > 1) {
        stats.streakDays = 1
      }
    } else {
      stats.streakDays = 1
    }
    stats.lastStudyDate = today

    localStorage.setItem(STORAGE_KEYS.STUDY_STATS, JSON.stringify(stats))
  },

  getStudyStats() {
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.STUDY_STATS) || JSON.stringify({
      totalStudyTime: 0,
      totalPoemsLearned: [],
      totalSessions: 0,
      favoriteTimes: {},
      streakDays: 0,
      lastStudyDate: null
    }))
  },

  updatePoemDifficulty(poemId, type, completed) {
    let difficulty = JSON.parse(localStorage.getItem(STORAGE_KEYS.POEM_DIFFICULTY) || '{}')

    if (!difficulty[poemId]) {
      difficulty[poemId] = {
        readCount: 0,
        reciteCount: 0,
        testCount: 0,
        correctCount: 0,
        totalAttempts: 0,
        averageScore: 0
      }
    }

    difficulty[poemId][`${type}Count`]++
    difficulty[poemId].totalAttempts++

    if (completed) {
      difficulty[poemId].correctCount++
    }

    difficulty[poemId].averageScore = Math.round(
      (difficulty[poemId].correctCount / difficulty[poemId].totalAttempts) * 100
    )

    localStorage.setItem(STORAGE_KEYS.POEM_DIFFICULTY, JSON.stringify(difficulty))
  },

  getPoemDifficulty(poemId) {
    const difficulty = JSON.parse(localStorage.getItem(STORAGE_KEYS.POEM_DIFFICULTY) || '{}')
    return difficulty[poemId] || null
  },

  getWeakPoems(limit = 5) {
    const difficulty = JSON.parse(localStorage.getItem(STORAGE_KEYS.POEM_DIFFICULTY) || '{}')
    const poems = Object.entries(difficulty)
      .filter(([id, data]) => data.totalAttempts > 0)
      .sort((a, b) => a[1].averageScore - b[1].averageScore)
      .slice(0, limit)
      .map(([id]) => parseInt(id))

    return poems
  },

  getStrongPoems(limit = 5) {
    const difficulty = JSON.parse(localStorage.getItem(STORAGE_KEYS.POEM_DIFFICULTY) || '{}')
    const poems = Object.entries(difficulty)
      .filter(([id, data]) => data.totalAttempts >= 2 && data.averageScore >= 80)
      .sort((a, b) => b[1].averageScore - a[1].averageScore)
      .slice(0, limit)
      .map(([id]) => parseInt(id))

    return poems
  },

  generateReport() {
    const stats = this.getStudyStats()
    const records = this.getLearningRecords()
    const todayRecords = this.getTodayRecords()
    const weekRecords = this.getWeekRecords()

    // 确保stats.totalPoemsLearned是一个数组
    if (!Array.isArray(stats.totalPoemsLearned)) {
      stats.totalPoemsLearned = []
    }

    const todayDuration = todayRecords.reduce((sum, r) => sum + r.duration, 0)
    const weekDuration = weekRecords.reduce((sum, r) => sum + r.duration, 0)

    const todayPoems = new Set(todayRecords.map(r => r.poemId))
    const weekPoems = new Set(weekRecords.map(r => r.poemId))

    const weakPoems = this.getWeakPoems(3)
    const strongPoems = this.getStrongPoems(3)

    const recentActivity = records.slice(-10).reverse()

    return {
      totalStudyTime: Number(stats.totalStudyTime) || 0,
      totalStudyTimeFormatted: this.formatDuration(stats.totalStudyTime),
      totalPoemsLearned: stats.totalPoemsLearned.length,
      totalSessions: Number(stats.totalSessions) || 0,
      streakDays: Number(stats.streakDays) || 0,
      todayDuration: todayDuration,
      todayDurationFormatted: this.formatDuration(todayDuration),
      todayPoemsCount: todayPoems.size,
      weekDuration: weekDuration,
      weekDurationFormatted: this.formatDuration(weekDuration),
      weekPoemsCount: weekPoems.size,
      weakPoems,
      strongPoems,
      recentActivity,
      averageDailyTime: (Number(stats.totalStudyTime) || 0) / Math.max(1, Number(stats.streakDays) || 0)
    }
  },

  formatDuration(seconds) {
    // 确保seconds是一个数字
    const secs = Number(seconds) || 0
    if (secs < 60) {
      return `${secs}秒`
    } else if (secs < 3600) {
      const minutes = Math.floor(secs / 60)
      return `${minutes}分钟`
    } else {
      const hours = Math.floor(secs / 3600)
      const minutes = Math.floor((secs % 3600) / 60)
      return `${hours}小时${minutes}分钟`
    }
  },

  recommendPoems(poems, limit = 5) {
    const stats = this.getStudyStats()
    // 确保stats.totalPoemsLearned是一个数组
    if (!Array.isArray(stats.totalPoemsLearned)) {
      stats.totalPoemsLearned = []
    }
    const learnedPoemIds = new Set(stats.totalPoemsLearned)
    const weakPoems = this.getWeakPoems(3)
    const strongPoems = this.getStrongPoems(3)

    const recommendations = []

    for (const poem of poems) {
      if (learnedPoemIds.has(poem.id)) continue

      let score = 0

      if (weakPoems.includes(poem.id)) {
        score += 3
      }

      const sameAuthor = poems.filter(p => p.author === poem.author && !learnedPoemIds.has(p.id))
      if (sameAuthor.length > 0) {
        score += 2
      }

      const sameDynasty = poems.filter(p => p.dynasty === poem.dynasty && !learnedPoemIds.has(p.id))
      if (sameDynasty.length >= 3) {
        score += 1
      }

      score += Math.random() * 2

      recommendations.push({ poem, score })
    }

    recommendations.sort((a, b) => b.score - a.score)

    const result = recommendations.slice(0, limit).map(r => ({
      ...r.poem,
      reason: weakPoems.length > 0 && r.poem.id === weakPoems[0] ? '薄弱环节，建议复习' :
              r.score >= 4 ? '相关推荐' : '随机推荐'
    }))

    if (result.length < limit && strongPoems.length > 0) {
      const strongToReview = strongPoems.slice(0, limit - result.length)
      const strongPoemsData = poems.filter(p => strongToReview.includes(p.id))
      strongPoemsData.forEach(p => {
        result.push({ ...p, reason: '已掌握，建议巩固' })
      })
    }

    return result
  },

  clearAllData() {
    localStorage.removeItem(STORAGE_KEYS.LEARNING_RECORDS)
    localStorage.removeItem(STORAGE_KEYS.STUDY_STATS)
    localStorage.removeItem(STORAGE_KEYS.POEM_DIFFICULTY)
    localStorage.removeItem(STORAGE_KEYS.RECOMMENDATIONS)
  }
}

export default LearningProgress