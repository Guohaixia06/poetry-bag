// 检查localStorage中的数据
console.log('=== 检查localStorage中的数据 ===');

// 检查STUDY_STATS
const studyStats = JSON.parse(localStorage.getItem('studyStats') || 'null');
console.log('STUDY_STATS:', studyStats);

// 检查LEARNING_RECORDS
const learningRecords = JSON.parse(localStorage.getItem('learningRecords') || 'null');
console.log('LEARNING_RECORDS:', learningRecords);

// 检查POEM_DIFFICULTY
const poemDifficulty = JSON.parse(localStorage.getItem('poemDifficulty') || 'null');
console.log('POEM_DIFFICULTY:', poemDifficulty);

// 检查数据类型
console.log('\n=== 检查数据类型 ===');
console.log('studyStats类型:', typeof studyStats);
if (studyStats) {
  console.log('studyStats.totalPoemsLearned类型:', typeof studyStats.totalPoemsLearned);
  console.log('studyStats.totalPoemsLearned是否是数组:', Array.isArray(studyStats.totalPoemsLearned));
}

console.log('\n=== 检查可能的错误 ===');
try {
  // 尝试模拟generateReport方法的操作
  if (studyStats && studyStats.totalPoemsLearned) {
    console.log('totalPoemsLearned.length:', studyStats.totalPoemsLearned.length);
  }
  console.log('检查通过');
} catch (error) {
  console.error('检查失败:', error);
}
