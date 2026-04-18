// 从诗词库生成游戏题目工具函数
import { poems } from './poems.js'

// 难度等级定义
const DIFFICULTY_LEVELS = {
  EASY: { minLength: 4, maxLength: 5, charPosition: 'start' },
  MEDIUM: { minLength: 5, maxLength: 7, charPosition: 'middle' },
  HARD: { minLength: 7, maxLength: 10, charPosition: 'end' }
}

// 生成填空题
function generateFillBlankQuestions() {
  return poems.map(poem => {
    // 解析诗词内容，提取每一行
    const lines = poem.content
      .replace(/，/g, '，\n')
      .replace(/。/g, '。\n')
      .split('\n')
      .filter(line => line.trim())
      .map(line => line.replace(/[，。]/g, ''))
    
    // 为每首诗生成题目
    const questions = []
    lines.forEach((line, lineIndex) => {
      if (line.length < 4) return // 跳过太短的句子
      
      // 确定难度
      let difficulty
      if (line.length <= 5) {
        difficulty = DIFFICULTY_LEVELS.EASY
      } else if (line.length <= 7) {
        difficulty = DIFFICULTY_LEVELS.MEDIUM
      } else {
        difficulty = DIFFICULTY_LEVELS.HARD
      }
      
      // 根据难度选择要填空的位置
      let blankIndex
      switch (difficulty.charPosition) {
        case 'start':
          blankIndex = 0
          break
        case 'middle':
          blankIndex = Math.floor(line.length / 2)
          break
        case 'end':
          blankIndex = line.length - 1
          break
        default:
          blankIndex = 0
      }
      
      questions.push({
        blankIndex: blankIndex,
        hint: `第${blankIndex + 1}字`,
        answer: line[blankIndex],
        difficulty: difficulty
      })
    })
    
    return {
      poemId: poem.id,
      poemTitle: poem.title,
      lines: lines,
      questions: questions
    }
  }).filter(poem => poem.questions.length > 0)
}

// 生成接龙题
function generatePoetryChainQuestions() {
  return poems.map(poem => {
    // 解析诗词内容，提取每一行
    const lines = poem.content
      .replace(/，/g, '，\n')
      .replace(/。/g, '。\n')
      .split('\n')
      .filter(line => line.trim())
      .map(line => line.replace(/[，。]/g, ''))
    
    // 确保至少有4行
    while (lines.length < 4) {
      lines.push('')
    }
    
    return {
      poemId: poem.id,
      poemTitle: poem.title,
      firstLine: lines[0] || '',
      secondLine: lines[1] || '',
      thirdLine: lines[2] || '',
      fourthLine: lines[3] || ''
    }
  })
}

// 生成游戏数据
const fillBlankQuestions = generateFillBlankQuestions()
const poetryChainQuestions = generatePoetryChainQuestions()

// 按难度排序
fillBlankQuestions.sort((a, b) => {
  const diffMap = { 'EASY': 1, 'MEDIUM': 2, 'HARD': 3 }
  const diffA = Math.max(...a.questions.map(q => diffMap[q.difficulty]))
  const diffB = Math.max(...b.questions.map(q => diffMap[q.difficulty]))
  return diffA - diffB
})

export { fillBlankQuestions, poetryChainQuestions }