const Scooter = require("./src/Scooter");
const User = require("./src/User");
const ScooterApp = require("./src/ScooterApp");

const coolScoot = new Scooter("London Station");
const anotherScoot = new Scooter("London Station");

console.log(Scooter.nextSerial); // should output 3
console.log(coolScoot.station); // should output London Station
