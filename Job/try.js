let pattern = ""

for (let i = 0; i < 5; i++) {
  for (let space = 0; space < 2 * i; space++) {
    pattern += " "
  }
  charCode = 65;
  for (let j = i; j < 9 - i; j++) {
    pattern += String.fromCharCode(charCode + j);
    if (j < 8 - i) pattern += " "
  }
  pattern += "\n"
}

for (let i = 3; i >= 0; i--) {
  for (let space = 0; space < 2 * i; space++) {
    pattern += " "
  }
  for (let j = i; j < 9 - i; j++) {
    pattern += String.fromCharCode(65 + j)
    if (j < 8 - i) pattern += " "
  }
  pattern += "\n"
}

console.log(pattern); /* output A B C D E F G H I
                                  B C D E F G H
                                    C D E F G
                                      D E F
                                        E
                                      D E F
                                    C D E F G
                                  B C D E F G H
                                  A B C D E F G H I 
*/

let input = "cloud analogy"

let output = input
  .split(" ")
  .map(word => {
    let reverseWord = word.split("").reverse().join("")
    return reverseWord + word.length + " "
  })
  .join("")

console.log(output); // output is duolc5 ygolana7 
