const first = new Promise(function (resolved, retake) {
  console.log("First promise");
  setTimeout(function () {
    console.log("First promise resolved");
  })

}).then(function (user) {
  console.log("First promise then", user);
})