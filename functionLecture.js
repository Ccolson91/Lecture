// function log(){
//   console.log('I am a function')
// }
// log()

function calculateScore(studentScore){
  studentScore += 5
  studentScore *= 2
  return studentScore
}

let hisScore = calculateScore(44)
let herScore = calculateScore(50)

console.log(hisScore)
