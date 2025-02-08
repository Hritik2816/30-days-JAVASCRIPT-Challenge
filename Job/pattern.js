// // let row = 5
// // let pattern = ""
// // for (let i = 1; i <= row; i++) {
// //   for (let j = 1; j < i; j++) {
// //     pattern += "*";
// //   }
// //   pattern += "\n"
// // }
// // console.log(pattern);

// //  output
// // *
// // **
// // ***
// // ****

// let pattern = "";

// // Upper part of the pattern
// for (let i = 0; i < 5; i++) {
//   // Add leading spaces, increasing with each row
//   for (let space = 0; space < 2 * i; space++) {
//     pattern += " ";
//   }
//   // Add characters, decreasing range with each row
//   for (let j = i; j < 9 - i; j++) {
//     pattern += String.fromCharCode(65 + j);
//     if (j < 8 - i) pattern += " "; // Add space between characters
//   }
//   pattern += "\n"; // New line after each row
// }

// // Lower part of the pattern (reverse)
// for (let i = 3; i >= 0; i--) {
//   // Add leading spaces, decreasing with each row
//   for (let space = 0; space < 2 * i; space++) {
//     pattern += " ";
//   }
//   // Add characters, increasing range with each row
//   for (let j = i; j < 9 - i; j++) {
//     pattern += String.fromCharCode(65 + j);
//     if (j < 8 - i) pattern += " "; // Add space between characters
//   }
//   pattern += "\n"; // New line after each row
// }

// console.log(pattern);

// A B C D E F G H I
//   B C D E F G H
//     C D E F G
//       D E F
//         E
//       D E F
//     C D E F G
//   B C D E F G H
// A B C D E F G H I


// function pattern(n) {
//   for (let i = 0; i <= n; i++) {
//     let row = "";
//     for (let j = 0; j < i; j++) {
//       row += "* "
//     }
//     console.log(row);
//   }
// }

//   for (let i = n; i >= 1; i--) {
//     let row = "";
//     for (let j = 1; j <= i; j++) {
//       row += "* "
//     }
//     console.log(row);
//   }
// }
// pattern(5)

function diamond(n) {
  // Upper part of the diamond
  for (let i = 1; i <= n; i++) {
    let row = "";
    // Add leading spaces
    for (let j = n; j > i; j--) {
      row += " ";
    }
    // Add stars
    for (let j = 1; j <= (2 * i - 1); j++) {
      row += "*";
    }
    console.log(row);
  }

  // Lower part of the diamond
  for (let i = n - 1; i >= 1; i--) {
    let row = "";
    // Add leading spaces
    for (let j = n; j > i; j--) {
      row += " ";
    }
    // Add stars
    for (let j = 1; j <= (2 * i - 1); j++) {
      row += "*";
    }
    console.log(row);
  }
}

diamond(5);