class User {
  constructor(username) {
    this.username = username
  }

  logMe() {
    console.log(`USERNAME is ${this.username}`);

  }
}

class Teacher extends User {
  constructor(username, email, password) {
    super(username)
    this.email = email
    this.password = password
  }

  addCourse() {
    console.log(`New course was added by ${this.username}`);

  }
}

const tea = new Teacher("hritik", "hfhj@gmail.com", "bfjdj48488")
tea.logMe()
tea.addCourse()