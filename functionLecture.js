let jonSnowHealth = 100

// jonSnowHealth = jonSnowHealth.toString()

console.log(typeof jonSnowHealth)

console.log('Jon Snow\'s health is ' + jonSnowHealth)

let theWinnerIs = 'Jamie is the winner.'

let newWinner = theWinnerIs.replace('Jamie', 'Jon')

console.log(newWinner)

let newWinnerLower = newWinner.toLowerCase()

console.log(newWinnerLower)

let newWinnerSplit = newWinnerLower.split(' ')

console.log(newWinnerSplit)

let newWinnerKebob = newWinnerSplit.join('-')

console.log(newWinnerKebob)

function isJonAlive(){
  if(jonSnowHealth > 0){
    console.log('Jon is alive!')
  } else {
    console.log('RIP Jon Snow')
  }
}
isJonAlive()

function surpriseAttack(attack){
  jonSnowHealth -= attack
  console.log(`Jon's health is now ${jonSnowHealth}`)
  isJonAlive()
}

surpriseAttack(12)

function greeting(person1, person2){
  console.log(`${person1} and ${person2} say hello to each other.`)
}

greeting('Jon Snow', 'Ned Stark')

function rollDice(){
  let possibleRolls = [1, 2, 3, 4, 5, 6]
  let randomNumber = Math.floor(Math.random() * possibleRolls.length)
  return possibleRolls[randomNumber]
}

let firstRoll = rollDice()
let secondRoll = rollDice()

console.log(firstRoll)
console.log(secondRoll)

function diceMultiplier(){
  let firstRoll = rollDice()
  let secondRoll = rollDice()
  return firstRoll * secondRoll
}

let multipliedNumber = diceMultiplier()
console.log(multipliedNumber)

let flour = 'cake flour'
let eggs = 'duck eggs'
let milk = 'goat milk'

function makeWaffles(){
  let flour = 'rice flour'
  let milk = 'almond milk'
  console.log(`I am making waffles with ${flour} and ${eggs} and ${milk}`)
}
makeWaffles()

class Cat {
  constructor(name, attitude, breed, age){
    this.name = name
    this.attitude = attitude
    this.breed = breed
    this.age = age
  }
greeting(){
  if(this.attitude){
    console.log('hey punk')
  } else {
    console.log('hi there')
  }
}
}
let henri = new Cat('Henri', true, 'chubby boy', 14)
let pyxis = new Cat('Pyxis', false, 'skinny lad', 14)

console.log(henri)
console.log(pyxis)

console.log(henri.name)

class Kitten extends Cat {
  constructor(name, attitude, breed, age, isSuperCute){
    super(name, attitude, breed, age)
    this.isKitten = isSuperCute
  }
}

let cuteKitten = new Kitten('Mittens', false, 'skinny lad', 1, true)
console.log(cuteKitten)



const orders = [{"price":15,"tax":0.09},{"price":42,"tax":0.07},{"price":56,"tax":0.11},
{"price":80,"tax":0.11},{"price":69,"tax":0.06},{"price":68,"tax":0.14},
{"price":72,"tax":0.14},{"price":51,"tax":0.09},{"price":89,"tax":0.15},
{"price":48,"tax":0.13}];


const ordersTotal = orders.map((total) => total['price'] * total['tax'])
console.log(ordersTotal)