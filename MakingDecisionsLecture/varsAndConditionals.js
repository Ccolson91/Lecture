let jonSnowAttack = 25
let jamieLannisterAttack = 35

if (jonSnowAttack > jamieLannisterAttack){
  console.log('Jon Snow has better attack than Jamie Lannister.')
} else if (jonSnowAttack === jamieLannisterAttack){
  console.log('Jon Snow and Jamie Lannister have the same attack.')
} else {
  console.log('Jamie Lannister has a better attack than Jon Snow.')
}

let jonSnowHealth = 100
let jonSnowDefense = 0

if (jonSnowHealth <= jamieLannisterAttack){
  console.log('Jon Snow has been slain.')
} else {
//   jonSnowHealth -= jamieLannisterAttack
  jonSnowHealth = jonSnowHealth - jamieLannisterAttack
  console.log(`Jon Snow's health is down to ${jonSnowHealth}`)
}

jonSnowDefense += 25

if (jonSnowHealth <= jamieLannisterAttack - jonSnowDefense){
  console.log('Jon Snow has been slain.')
} else {
  jonSnowHealth -= (jamieLannisterAttack - jonSnowDefense)
  console.log(`Jon Snow's health is down to ${jonSnowHealth}`)
}

if ((jonSnowHealth + 50) >= 100) {
  jonSnowHealth = 100
} else {
  jonSnowHealth += 50
}

let coinLandsHeads = false

// if (coinLandsHeads === true) {
//   console.log('The fight continues!')
// } else {
//   console.log('Jon is allowed to run away.')
// }

if (coinLandsHeads !== false) {
  console.log('The fight continues!')
} else {
  console.log('Jon is allowed to run away.')
}

// for (let i = 0; i < 5; i++) {
//   if (jonSnowHealth <= 0) {
//     console.log('Jon Snow has been slain.')
//   } else {
//     jonSnowHealth -= (jamieLannisterAttack - jonSnowDefense)
//     console.log(`Jon Snow's health is ${jonSnowHealth}`)
//   }
// }

while (jonSnowHealth > 0) {
  jonSnowHealth -= (jamieLannisterAttack - jonSnowDefense)
  console.log(`Jon Snow's health is ${jonSnowHealth}`)
  if (jonSnowHealth <= 0) {
    console.log('Jon Snow has been slain.')
  }
}

let backpack = []

backpack.push('sword')
backpack.push('shield')
backpack.push('food')

console.log(backpack)

backpack.splice(0, 1)
console.log(backpack)

let furCoat = 'fur coat'

backpack.push(furCoat)
console.log(backpack)

backpack.pop()
console.log(backpack)

let itemCount = backpack.length
console.log(itemCount)

backpack.push('flint', 'blanket', 'knife', 'toothbrush')
console.log(backpack)

var backpack2 = backpack.splice(2, 5)
console.log(backpack)
console.log(backpack2)

console.log(backpack2[0])

for (let i = 0; i < backpack.length; i++){
  console.log(backpack[i])
}

for (let i = 0; i < backpack2.length; i++){
  console.log(backpack2[i])
}

for (let i = 0; i < 3; i++){
  console.log(backpack[i])
}


if (backpack.length >= 3) {
  for (let i = 0; i < 3; i++){
    console.log(backpack[i])
  } 
} else {
  for (let i = 0; i < backpack.length; i++){
    console.log(backpack[i])
  }
}

let guessMe = 54

while (guessMe < 100) {
  console.log('-------------------')
  if (guessMe % 4 == 0 || guessMe % 5 == 0) {
    console.log('guessMe is divisible by 4 or 5. Added 25.')
    guessMe += 25
  } else if (guessMe % 3 == 0) {
    console.log('guessMe is divisible by 3. Subtracted 27.')
    guessMe -= 27
  } else {
    console.log('Added 3.')
    guessMe += 3
  }
  guessMe += 22
  console.log(`guessMe is now ${guessMe}.`)
}

