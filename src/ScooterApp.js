const User = require("./User");
const Scooter = require("./Scooter");

class ScooterApp {
  #stations;
  #registeredUsers;

  constructor() {
    this.#stations = {
      "Bond Street": [],
      "Paddington Station": [],
      "Acton Main Line": [],
    };

    this.#registeredUsers = {}; // username: user (object)
  }

  registerUser(username, password, age) {
    if (age < 18) throw new Error("Too young to register");
    if (username in this.#registeredUsers)
      throw new Error("Already registered");

    const newUser = new User(username, password, age);
    this.#registeredUsers[username] = newUser;
    console.log("User has been registered!");
    return newUser;
  }

  loginUser(username, password) {
    if (this.#registeredUsers[username]) {
      this.#registeredUsers[username].login(password);
      console.log("User has been logged in");
    } else {
      console.log("Incorrect Username");
    }
  }

  logoutUser(username) {
    this.#registeredUsers[username].logout();
    console.log("User is logged out");
  }

  createScooter(station) {
    // Check that such station exists
    if (!(station in this.#stations)) throw new Error("No such station error");

    // Create a new scooter object
    const newScooter = new Scooter(station);
    // Push new scooter to to stations, key: stations (3); values: arrays with scooter objects
    this.#stations[station].push(newScooter);
    console.log("Created new scooter");
  }

  dockScooter(scooter, station) {
    // Check that such station exists
    if (!(station in this.#stations)) throw new Error("No such station");

    // Check if scooter is already at that station
    for (const key in this.#stations) {
      if (scooter in this.#stations[key])
        throw new Error("Scooter already at station");
    }

    // Add the scooter to the station’s scooter list, and dock it
    this.#stations[station].push(scooter);
    scooter.dock(station);
    console.log("Scooter is docked");
  }

  rentScooter(scooter, user) {
    // Remove scooter from station (why am I not given the station ? )

    // loop through all the stations
    for (const key in this.#stations) {
      let index = 0;

      // loop through all the scooters at that station
      for (const scoo of this.#stations[key]) {
        // if the given scooter if found remove it, and console.log
        if (scoo.serial === scooter.serial) {
          this.#stations[key].splice(index, 1);
          console.log("Scooter is rented");
        } else {
          // else move the pointer by 1
          index++;
        }
      }
    }

    console.log("Scooter is rented");
  }

  print() {
    let userCount = 1;
    console.log("");
    console.log("-------- THESE ARE THE REGISTERED USERS:");
    for (const key in this.#registeredUsers) {
      console.log(`User ${userCount}: ${this.#registeredUsers[key].username}`);
      userCount++;
    }
    console.log("--------");

    console.log("");
    console.log(
      "-------- THESE ARE THE STATOINS AND NUMBER OF SCOOTERS THERE:"
    );
    for (const key in this.#stations) {
      console.log(
        key + " has " + this.#stations[key].length + " number of scooters"
      );
    }
    console.log("--------");
    console.log("");
  }
}

module.exports = ScooterApp;
