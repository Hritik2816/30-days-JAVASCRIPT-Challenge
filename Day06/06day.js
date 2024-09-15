// Activity 1: Array creation and access

// const Array = [1, 2, 3, 4, 5,]
// // console.log(Array);
// console.log(Array[0]);
// console.log(Array[4]);


// Activity 2: Array Method (Basic)

// const Array = [1, 2, 3, 4, 5,]
// // Array.push(7)
// // Array.pop(7)
// // Array.shift(1)
// // Array.unshift(7)
// console.log(Array);

// Activity 3: Array Method (Intermediate)

// const number = [1, 2, 3, 4, 5]
// const doubleNumber = number.map(x => x * 2)
// console.log(doubleNumber);

// const evenNumber = number.map(x => x % 2 === 0)
// console.log(evenNumber);

// const sumNumber = number.map((acc, current) => acc + current, 0)
// console.log(sumNumber);

// Activity 4: Array iteration

const myArray = [1, 2, 3, 4, 5];

for (let i = 0; i < myArray.length; i++) {
  console.log(myArray[i]);
}

myArray.forEach(element => {
  console.log(element);
});

// Activity 5: Multiple-Dimensional Array

// const matrix = [
//   [1, 2, 3, 4],
//   [5, 6, 7, 8],
//   [9, 10, 11, 12]
// ];
// console.log("matrix:", matrix[1][1]);
// for (let index = 0; index < matrix.length; index++) {
//   console.log(matrix[index]);

// }