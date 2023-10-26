class Scooter {
  // scooter code here

  async charge() {
    console.log("Starting charge");

    await new Promise((resolve) => setTimeout(resolve, 2000)); // wait 2 seconds
    this.charge = 100;

    console.log("Charge complete");
  }
}

module.exports = Scooter;
