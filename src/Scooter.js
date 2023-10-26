class Scooter {
  // scooter code here
  #user;
  #serial;
  #charge;
  #isBroken;

  static nextSerial = 1;

  constructor(station) {
    this.station = station;
    this.#user = null;
    this.#serial = this.nextSerial;
    Scooter.nextSerial++;
    this.#charge = 100;
    this.#isBroken = false;
  }

  rent(user) {
    if (this.#charge <= 20) throw new Error("Scooter needs to charge");
    if (this.#isBroken) throw new Error("Scooter need repair");

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
}

module.exports = Scooter;
