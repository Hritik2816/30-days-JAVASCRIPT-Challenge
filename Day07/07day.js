// Acticity 1: object creation and access

// const books = {
//   title: "Javascript",
//   author: "hritik",
//   year: '2'
// }
// console.log(books.title);
// console.log(books.author)

// Acticity 2: Object Method

// class Book {
//   constructor(title, author, year) {
//     this.title = title;
//     this.author = author;
//     this.year = year;
//     this.read = false;
//   }
//   getSummary() {
//     if (this.read) {
//       return `You've read ${this.title} by ${this.author}.`;
//     } else {
//       return `You haven't read ${this.title} by ${this.author} yet.`;
//     }
//   }
//   readBook() {
//     this.read = true;
//   }
//   getTitleAndAuthor() {
//     return `${this.title} by ${this.author} in ${this.year}`;
//   }
// }
// const book1 = new Book("JavaScript with chai", "Hritk", "2024");

// console.log(book1.getTitleAndAuthor());
// book1.readBook();
// console.log(book1.getSummary()); // Output: You've read JavaScript with chai by Hritk.



// Activity 3: Nested Object

// const library = {
//   name: "Hritik's Library",
//   books: [{
//     title: "JavaScript with chai",
//     author: "Hritik",
//     year: "2024",
//   }]
// }
// console.log(library.name);
// console.log(library.books[0].title)


// Activity 4: this.keyword

// class Book {
//   constructor(title, author, year) {
//     this.title = title;
//     this.author = author;
//     this.year = year;
//     this.read;
//   }
//   getSummary() {
//     if (this.read) {
//       return `You've read ${this.title} by ${this.author}.`;
//     }
//     else {
//       return `You haven't read ${this.title} by ${this.author} yet.`
//     }
//   }
//   readBook() {
//     this.read = true;
//   }
//   getTitleAndAuthor() {
//     return `${this.title} by ${this.author} in ${this.year}`
//   }
// }
// const book1 = new Book("chai aur react", "Hitesh", "2024");

// console.log(book1.getTitleAndAuthor());
// book1.readBook()
// console.log(book1.getSummary());

// Activity 5: Object iteration


// const books = {
//   title: "Javascript",
//   author: "hritik",
//   year: '2'
// }
// for (const key in books) {
//   const element = books[key]
//   console.log(`${key}: ${element}`);
// }



// const books = {
//   title: "Javascript",
//   author: "hritik",
//   year: '2'
// }
// Object.keys(books).forEach(key => {
//   console.log(`${key}: ${books[key]}`);
// })

// //or

// Object.entries(books).forEach(([key, value]) => {
//   console.log(`${key}: ${value}`);
// });

