// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

function attack(attackCount){
    let attackAmount = 0
      const attacking = function(){
          attackAmount += attackCount
          return attackAmount
      }
      return attacking
}

  const enemyAttack = attack(100)
  enemyAttack()
  enemyAttack()
  enemyAttack()
console.log(enemyAttack()) // closure or the inside function definition of attack being executed not invoked. Remember that we are passing the nested function definition when we assign to the const enemyAttack 

const enemyDamageSA = attack(500)  // this is where the special attack damage value is passed in 
const hero1 = enemyDamageSA()  // hero one atacks the enemy which adds to the decrease of enemy life
const hero2 = enemyDamageSA() // hero two attacks and does the same damage as the first hero and because of the closure affetcs the same enemy life value due to strong refrencing.
console.log(hero1, hero2)
/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
    let counter = 0
    const count = function (){
        counter += 1
        return counter
    }
    return count
};
const myCounter = counter()
console.log(myCounter())
console.log(myCounter())
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
    const counterObj = {
        counter: 0,
        increment: function () {
          this.counter += 1         // key to use "this" in order to access the local object scoped properties, like using self in Swift
          return this.counter      // same thing here we need to return the objects property counter to see the affected results
        },
        decrement: function (){
          this.counter -= 1
          return this.counter
        }
    }
    return counterObj      // here we return the object we created which gives us access to the objects properties and methods via dot notation.
};

const newCounterFactory = counterFactory() // this assignment gives us access to the inner returned value that is our object(counterObj) and not a function
newCounterFactory.decrement()   // IMPORTANT! note to self observe how we aren't invoking the newCounterFactory like a function as previously syntaxed. This is becasue we did not return a nested functions definition from the assignemt above rather we returned our object we created which holds the strong reference that keeps the counter property in scope to mutate. 
newCounterFactory.decrement()
console.log(newCounterFactory.decrement())
newCounterFactory.increment()
newCounterFactory.increment()
newCounterFactory.increment()
newCounterFactory.increment()
console.log(newCounterFactory.increment())