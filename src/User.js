class User {
  #password;
  #age;
  #loggedIn;

  constructor(username, password, age) {
    this.username = username;
    this.#password = password;
    this.#age = age;
    this.#loggedIn = false;
  }

  login(password) {
    if (password !== this.#password) throw new Error("Incorrect password");
    this.#loggedIn = true;
  }

  logout() {
    this.#loggedIn = false;
  }
}

module.exports = User;
