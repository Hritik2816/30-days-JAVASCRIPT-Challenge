// Activity 1: If-Else Statements

// let number = 8
// if (number > 0) {
//   console.log("The number is positive")
// }
// else if (number < 0) {
//   console.log("The number is negative")
// }
// else {
//   console.log("The number is zero")
// }



// let person = 35
// if (person < 18) {
//   console.log("You are not old enough to vote")
// }
// else if (person >= 18 && person <= 65) {
//   console.log("You are eligible to vote")
// }
// else {
//   console.log("You are not eligible to vote");
// }


// Activity 2: Nested If-Else Statements

// let a = 6
// let b = 4
// let c = 1

// if (a > b) {
//   if (a > c) {
//     console.log("a is greater than b and c")
//   }
//   else {
//     console.log("c is  greater than a and b")
//   }
// } else {
//   if (b > c) {
//     console.log("b is greater than c")
//   }
//   else {
//     console.log("c is greater than a and b")
//   }
// }

// Using function

// let a = 20
// let b = 10
// let c = 5
// function largestNumber(a, b, c) {
//   return Math.max(a, b, c);
// }

// console.log(largestNumber(a, b, c));


// Activity 3: Switch case

// let day = 7

// switch (day) {
//   case 1:
//     console.log("Today is Monday");
//     break;
//   case 2:
//     console.log("Today is Tuesday");
//     break;
//   case 3:
//     console.log("Today is Wednesday");
//     break;
//   case 4:
//     console.log("Today is Thursday");
//     break;
//   case 5:
//     console.log("Today is Friday");
//     break;
//   case 6:
//     console.log("Today is Saturday");
//     break;
//   case 7:
//     console.log("Today is Sunday");
//     break;

//   default:
//     console.log("Invalid day");
//     break;
// }


// let grade = 91
// switch (true) {
//   case grade >= 90:
//     console.log("A")
//     break;
//   case grade >= 80:
//     console.log("B")
//     break;
//   case grade >= 70:
//     console.log("C")
//     break;
//   case grade >= 60:
//     console.log("D")
//     break;
//   case grade < 60:
//     console.log("F")
//     break;
//   default:
//     console.log("Invalid grade")
//     break;

// }


// Activity 4: Conditional (Ternary) operator

// let num = 7
// let result = num % 2 === 0 ? "Even" : "Odd"
// console.log(result)


// Activity 5: Combining Conditions

// let year = 2020
// let isLeapYear = year % 4 === 0 && year % 100 !== 0 ? "Leap Year" : "Not a Leap Year"
// console.log(isLeapYear)



// if (year % 4 === 0) {
//   if (year % 100 !== 0) {
//     console.log("Leap Year")
//   }
//   else {
//     console.log("Not a Leap Year")
//   }
// } else {
//   console.log("Not a Leap Year");
// }
