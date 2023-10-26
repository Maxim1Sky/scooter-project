class Scooter {
  // scooter code here
  #station;
  #user;
  #serial;
  #charge;
  #isBroken;

  static nextSerial = 1;

  constructor(station) {
    this.#station = station;
    this.#user = null;
    this.#serial = this.nextSerial;
    Scooter.nextSerial++;
    this.#charge = 100;
    this.#isBroken = false;
  }

  async charge() {
    console.log("Starting charge");

    await new Promise((resolve) => setTimeout(resolve, 2000)); // wait 2 seconds
    this.charge = 100;

    console.log("Charge complete");
  }
}

module.exports = Scooter;
