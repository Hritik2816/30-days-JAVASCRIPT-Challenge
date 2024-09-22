/*
const str = "hare krishna hare krishna krishna krishna hare hare"

let obj = {}

for (let x of str) {
  if (obj[x]) {
    obj[x] += 1
  }
  else {
    obj[x] = 1
  }
}

console.log(obj);

const obj = {}

for (let i = 0; i < str.length; i++) {
  const char = str[i]
  if (obj[char]) {
    obj[char] += 1
  }
  else {
    obj[char] = 1
  }

}

console.log(obj);

Why for...of is useful The for...of loop is useful when we need to iterate over the values of an iterable object, such as an array or a string. It provides a concise and expressive way to loop through the values of an object, without having to worry about the keys.

*/


/*
for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i)
  }, 100)
}

for (let i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i)
  }, 100)
}

using closure
*/

// for (var i = 0; i < 5; i++) {
//   function close(x) {
//     setTimeout(() => {
//       console.log(x)
//     }, x * 1000)
//   }
//   close(i)

// }

// The answer After 100 milliseconds, the console will log 5 five times.

// Why? This is because of how JavaScript closures work. When the close function is called, it captures the current value of i in its scope. However, the setTimeout callback function is executed after the loop has finished, and by that time, i has already reached its final value of 5. So, all five close functions will log 5 to the console.


// In summary:

// The key difference between these two code snippets is the way they handle variable scoping and hoisting. Using var leads to a single, global i variable being shared across all timeouts, resulting in unexpected behavior. Using let creates a new, block-scoped i variable for each iteration, ensuring that each timeout logs the correct value.


/*
function sum(a = 5, b = 9) {
  console.log(a + b);
}
sum(null, 20)

default value not work just because of below sentence 

Also when we are not asign sum(null, 20) like that then sum(), there ans is 14

Because in js null is treated as a value which means 0 + 20 = 20

But similarly when we asign undefine in termof null  then its take a value of a=5 then
its answer is 25
*/

