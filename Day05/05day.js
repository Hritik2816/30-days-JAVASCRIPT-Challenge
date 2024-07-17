// Activity 1: Function declaration

// function oddAndEvenNumber(number) {
//   if (number % 2 === 0) {
//     console.log(`${number} is Even Number`)
//   }
//   else {
//     console.log(`${number} is Odd Number`)
//   }
// }

// oddAndEvenNumber(8)


// function squarRoot(number) {
//   let result = number ** 2;
//   console.log(result);
//   return
// }
// squarRoot(25)

// function squarRoot(number) {
//   return number ** 0.5;
// }
// console.log(squarRoot(5))

// function squarRoot(number) {
//   return Math.sqrt(number);
// }
// console.log(squarRoot(5))

// Activity 2: Function Expression

// function maxTwoNumber(number1, number2) {
//   if (number1 > number2) {
//     console.log(`${number1} is greater`);
//   }
//   else if (number2 > number1) {
//     console.log(`${number2} is greater`)
//   }
//   else {
//     console.log('Both are equal')
//   }
// }
// maxTwoNumber(5, 7)

// function concatenateString(a, b) {
//   return a + b;
// }
// console.log(concatenateString('Hello', 'World'));

// function concatenateString(a, b) {
//   return a.concat(b);
// }
// console.log(concatenateString('Hello', 'World'));

// Activity 3: Arrow Function

// const addNumber = (num1, num2) => {
//   return num1 + num2;
// }
// console.log(addNumber(5, 7));

// const addNumber = (num1, num2) => num1 + num2;
// console.log(addNumber(5, 7));


// const addNumber = (num1, num2) => (num1 + num2);
// console.log(addNumber(5, 7));

// const specificCharacter = (s, char) => s.includes(char)
// console.log(specificCharacter("Hello", "f"));


// Activity 4: Function Parameters and default value


// const product = (number1, number2 = 4) => number1 * number2
// console.log(product(5));

// const greet = (name, age = 30) => `hey, ${name} you are ${age} years old`
// console.log(greet('john'))

// Activity 5: Higher order function

// function repeat(fn, n) {
//   for (let i = 0; i < n; i++) {
//     fn() // syntax
//   }
// }
// function sayHello() {
//   console.log("Hello");
// }
// repeat(sayHello, 5)

// repeat(() => console.log('Hello'), 5)


// function compose(f, g, x) {
//   return g(f(x));
// }
// function square(x) {
//   return x * x;
// }
// function addOne(x) {
//   return x + 1;
// }
// console.log(compose(square, addOne, 5));

// const compose = (f, g) => x => g(f(x));
// const square = x => x * x;
// const addOne = x => x + 1;
// console.log(compose(square, addOne)(5));

