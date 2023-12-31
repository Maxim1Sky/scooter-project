const Scooter = require("../src/Scooter");
const User = require("../src/User");

//typeof scooter === object
describe("scooter object", () => {
  test("Scooter class should create Scooter instance", () => {
    const scooter = new Scooter();
    expect(scooter).toBeInstanceOf(Scooter);
  });
});

//Method tests
describe("scooter methods", () => {
  test("charge", async () => {
    const scooter = new Scooter();
    await scooter.charge(); // we need to wait for the charge!
    expect(scooter.charge).toBe(100);
  }); // <----- test from Codio
  // tests here!
  //rent method
  //dock method
  //requestRepair method
  //charge method
});
