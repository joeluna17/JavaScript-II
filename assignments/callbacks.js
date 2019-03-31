// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

/*

  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // Potential Solution:

  // Higher order function using "cb" as the call back
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // Function invocation 
  firstItem(items, function(first) {
    console.log(first)
  });

*/


function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
    return cb(arr.length)
}

console.log(getLength(items, length => length))

function last(arr, cb) {
  // last passes the last item of the array into the callback.
  return cb(arr[arr.length - 1])
}

console.log(last(items, item => item))

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  const sum = x+y
    return cb(sum)
      }
    console.log(sumNums(2,3,sum => sum))

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  const product = x*y
  return cb(product)
}

console.log(multiplyNums(6,9, prod => prod))

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  let result = false // note self we had to use a var to store the result in, compiler will not return form scope result of conditional statement. Only return undifined because of callback patter, like swift we must assign to outerscope if cb.
  list.forEach(element => {
    if(element === item){   
      result = true
    }
      else{
        reslut = false
      }
  })
  // Pass true to the callback if it is, otherwise pass false.
  return cb(result)
}
console.log(contains('yo-yo', items, isPresent => isPresent))

/* STRETCH PROBLEM */

let someArray = ["spacejam", "robin hood", "jack and the beanstock", "bambi", "robin hood", "spacejam", "lion king"]

function removeDuplicates(array, cb) {

  let reducedArray = array.reduce((a,b) => {
      if (a.indexOf(b)<0)a.push(b)
      return a
  },[])
  return cb(reducedArray)
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}
console.log(`Original array:`, someArray)
console.log(removeDuplicates(someArray, item => item))