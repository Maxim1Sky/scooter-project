const Scooter = require("./src/Scooter");
const User = require("./src/User");
const ScooterApp = require("./src/ScooterApp");

const coolScoot = new Scooter("London Station");
const anotherScoot = new Scooter("London Station");

console.log(Scooter.nextSerial); // should output 3
console.log(coolScoot.station); // should output London Station

const testApp = new ScooterApp();

testApp.registerUser("Maxim", "qwerty123", 69);
// testApp.registerUser("Maxim", "erheir", 1212); // it works

testApp.registerUser("John", "wrwerwer", 43);

testApp.print();
