// 测试生成的题目数量
import { fillBlankQuestions, poetryChainQuestions } from './generateGameData.js'

console.log('填空题数量:', fillBlankQuestions.length)
console.log('接龙题数量:', poetryChainQuestions.length)

// 检查前几个填空题
console.log('前5个填空题:')
fillBlankQuestions.slice(0, 5).forEach((q, index) => {
  console.log(`${index + 1}. ${q.poemTitle} - 题目数量: ${q.questions.length}`)
})

// 检查前几个接龙题
console.log('前5个接龙题:')
poetryChainQuestions.slice(0, 5).forEach((q, index) => {
  console.log(`${index + 1}. ${q.poemTitle} - 第一句: ${q.firstLine}`)
})