const { expect } = require("chai");

const CHALLENGES = require("../challenge-addresses.js")
const challengeAddress = CHALLENGES.N2Weirdo;


// run the test
// npx hardhat test ./test/N2-Weirdo-easy.js --network mumbai
describe("CTF #2 Weirdo", function () {
  it("Should recover all funds", async function () {

    const challengeInstance = await ethers.getContractAt(
      "N2Weirdo",
      challengeAddress
    );
    expect(await ethers.provider.getBalance(challengeInstance.address)).to.equal("0");

  });
});
