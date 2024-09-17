class User {
  constructor(username) {
    this.username = username
  }

  logMe() {
    console.log(`USERNAME is logged in ${this.username}`);

  }

  static createId() {
    return `123`
  }
}

const hritik = new User("Hritik")

class Teacher extends User {
  constructor(username, email) {
    super(username)
    this.email = email
  }
}

const iphone = new Teacher("Hritik", "ghghds@gmail.com")
iphone.logMe()