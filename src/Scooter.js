class Scooter {
  // scooter code here
  #user;
  #charge;
  #isBroken;

  static nextSerial = 1;

  constructor(station) {
    this.station = station;
    this.#user = null;
    this.serial = Scooter.nextSerial;
    Scooter.nextSerial++;
    this.#charge = 100;
    this.#isBroken = false;
  }

  rent(user) {
    if (this.#charge <= 20) throw new Error("Scooter needs to charge");
    if (this.#isBroken) throw new Error("Scooter need repair");

    // another if statement cause I don't think it should be implemented in ScooterApp class
    if (this.#user !== null) throw new Error("Scooter is rented");

    this.#user = user.username;
  }

  dock(station) {
    this.#user = null;
    this.station = station;
  }

  async charge() {
    console.log("Starting charge");

    await new Promise((resolve) => setTimeout(resolve, 2000)); // wait 2 seconds
    this.charge = 100;

    console.log("Charge complete");
  }

  async requestRepair() {
    await new Promise((resolve) => setTimeout(resolve, 5000)); // wait 5 seconds
    this.#isBroken = false;

    console.log("Repair completed");
  }
}

module.exports = Scooter;
