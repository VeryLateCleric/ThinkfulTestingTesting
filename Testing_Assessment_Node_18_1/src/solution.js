/*
  Write a function that separates students into two buckets based on a given score. The end result for the "happy path" should be an array with two arrays inside of it.
*/
function partitionStudentsByScore(students, score) {
  const belowOrEqualScore = [];
  const aboveScore = [];

  for (const student of students) {
    if (student.score <= score) {
      belowOrEqualScore.push(student)
    } else {
      aboveScore.push(student)
    }
  }
  return [belowOrEqualScore, aboveScore]
}

module.exports = partitionStudentsByScore;