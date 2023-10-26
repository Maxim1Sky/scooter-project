const Scooter = require("./src/Scooter");
const User = require("./src/User");
const ScooterApp = require("./src/ScooterApp");

const coolScoot = new Scooter("Paddington");
const anotherScoot = new Scooter("London Station");

console.log(Scooter.nextSerial); // should output 3
console.log(coolScoot.station); // should output Paddington

const testApp = new ScooterApp();

testApp.dockScooter(coolScoot, "Paddington Station");

testApp.dockScooter(anotherScoot, "Bond Street");

const maxUser = testApp.registerUser("Maxim", "qwerty123", 69);
// testApp.registerUser("Maxim", "erheir", 1212); // it works

const johnUser = testApp.registerUser("John", "wrwerwer", 43);

testApp.rentScooter(coolScoot, maxUser);

testApp.print();
