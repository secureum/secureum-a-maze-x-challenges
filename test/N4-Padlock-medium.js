const { expect } = require("chai");

const CHALLENGES = require("../challenge-addresses.js")
const challengeAddress = CHALLENGES.N4Padlock;


// run the test
// npx hardhat test ./test/N4-Padlock-medium.js --network mumbai
describe("CTF #4 Padlock", function () {
    it("Should recover all funds", async function () {
        const challengeInstance = await ethers.getContractAt(
            "N4Padlock",
            challengeAddress
        );
        expect(await ethers.provider.getBalance(challengeInstance.address)).to.equal("0");
    });
});
