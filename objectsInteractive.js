let person = {
  firstName: "Chandler",
  lastName: "Bong",
  age: 34
}

// console.log(person.firstName)         //dot notation 
// console.log(person['firstName'])      //bracket notation (subscripting) - when you want to put in a variable

let meal = {
  appetizer: 'chips & salsa',
  entree: 'al pastor burrito',
  dessert: 'churros',
  drink: 'dr. pepper'
}

//destructure properties
const {dessert} = meal
// console.log(dessert)

//destructuring multiple values at once
const {appetizer, entree} = meal
// console.log(appetizer)
// console.log(entree)

//destructuring/renaming
const {drink: bestSodaEver} = meal
// console.log(bestSodaEver)

const {appetizer: myAppetizer, entree: myEntree, dessert: myDessert, drink: myDrink} = meal

// console.log(bestSodaEver)
// console.log(myDrink)

//Looping over keys in an object
// for (let key in person) {
//   console.log(key)
// }
// for (key in person) {
  //   console.log(person[key])
  // }
  // adding in to object
  person.job = "Statistical Analysis and Data Reconfiguration"
  person['pets'] = ['Chicken', 'Duck']

  // for (let key in person) {
  //   console.log(key)
  // }

  // deleting properties
  let teams = {
    teamOne: ['ryan', 'alex'],
    teamTwo: ['henry', 'cole', 'charlie'],
    teamThree: ['porter', 'blake'],
    teamFour: ['monique', 'mariko'],
    teamFive: ['shania', 'deepta']
  }

  delete teams.teamTwo

  // for (let team in teams){
  //   console.
  //   log(team)
  // }

  //Classes
  class Dog {
    constructor(name, breed, age) {
      this.name = name
      this.breed = breed
      this.age = age
    }
    //Adding method to a class
    greeting() {
      console.log(`Hi, my name is ${this.name} and I am an ${this.age} year old ${this.breed}!`)
    }
  }

  let lassie = new Dog('Lassie', 'Collie', 18)
  // console.log(lassie.name)
  let beethoven = new Dog('Beethoven', 'St. Bernard', 12)
  // console.log(beethoven.breed)
  let scout = new Dog('Scout', 'Aussie', 2)
  // console.log(scout.age)
  
  //Calling method to our class
  lassie.greeting()
  beethoven.greeting()
  scout.greeting()
  
// loop over

for (key in lassie) {
  console.log(lassie[key])
}
