const Scooter = require("../src/Scooter");
const User = require("../src/User");
const ScooterApp = require("../src/ScooterApp");

const scooterApp = new ScooterApp();

// ScooterApp tests here

const coolScoot = new Scooter("London Station");
const anotherScoot = new Scooter("London Station");

console.log(Scooter.nextSerial); // should output 3
console.log(coolScoot.station); // should output London Station

scooterApp.registerUser("Maxim", "qwerty123", 69);
// testApp.registerUser("Maxim", "erheir", 1212); // it works

scooterApp.registerUser("John", "wrwerwer", 43);

// register user
describe("registerUser method tests", () => {
  // test("Should return instance of User", () => {
  //   let response = scooterApp.registerUser("Joe Bloggs", "test123", 21);
  //   expect(response).toBeInstanceOf(User);
  // });

  // log in
  test("User is able to log in MY TESTTTTTT", () => {
    const consoleLogSpy = jest.spyOn(console, "log");
    scooterApp.loginUser("Maxim", "qwerty123");
    let response = "User has been logged in";

    expect(consoleLogSpy).toHaveBeenCalledWith(response);
    // expect(response).toBe("User has been logged in");
    consoleLogSpy.mockRestore();
  });
});

// log in

// log out

// rent scooter

// dock scooter
