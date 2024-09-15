const first = new Promise(function (resolve, reject) {

  setTimeout(function () {
    console.log("First promise resolved");
    resolve()
  }, 1000)

})

first.then(function () {
  console.log("First promise then");
})


new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Second promise");
    resolve()
  }, 2000)
}).then(function () {
  console.log("Second promise then");
})


const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: "hrk", email: "hrk@jhd.com" })
  }, 3000)
})

promiseThree.then(function (user) {
  console.log(user);
})

const promiseFour = new Promise(function (resolve, reject) {

  setTimeout(function () {
    let error = false
    if (!error) {
      resolve({ username: "hekejk", password: "jhhjskj" })
    }
    else {
      reject("Error")
    }
  }, 4000)
})

promiseFour
  .then((user) => {
    console.log(user);
    return user.username
  })
  .then((username) => {
    console.log(username)
  })
  .catch((Error) => {
    console.log("Error");
  }).finally(() => console.log("The promise Resolved"))



const promiseFive = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true
    if (!error) {
      console.log({ username: "pk", password: "pk241" });
    }
    else {
      reject("Error");
    }
  }, 5000)
})

async function cosumePromiseFive() {
  try {
    const response = await promiseFive
    console.log(response)
  } catch (error) {
    console.log(error);

  }
}
cosumePromiseFive()


// async function getAllUsers() {
//   try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users')
//     const data = await response.json()
//     console.log(data);
//   } catch (error) {
//     console.log("E", error);
//   }
// }
// getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => {
    return response.json()

  })
  .then((data) => {
    console.log(data);

  })
  .catch((error) => {
    console.log("E", error);
  })
