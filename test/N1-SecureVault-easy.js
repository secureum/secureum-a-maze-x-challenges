const { expect } = require("chai");
const hre = require("hardhat");
const ethers = hre.ethers;

const CHALLENGES = require("../challenge-addresses.js")
const challengeAddress = CHALLENGES.N1SecureVault;

// run the test
// npx hardhat test ./test/N1-SecureVault-easy.js --network mumbai
describe("CTF #1 SecureVault", function () {
  it("Should recover all funds", async function () {

    const challengeInstance = await ethers.getContractAt(
      "N1SecureVault",
      challengeAddress
    );
    expect(await ethers.provider.getBalance(challengeInstance.address)).to.equal("0");

  });
});
