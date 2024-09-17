function setUserName(username) {
  this.username = username
}

function createUser(username, email, password) {
  setUserName.call(this, username)
  this.email = email
  this.password = password

}

const chai = new createUser("chai", "hrk16@gmail.com", "fgd448")
c = console.log(chai);
