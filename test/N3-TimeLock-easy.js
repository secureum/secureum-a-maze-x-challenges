const { expect } = require("chai");

const CHALLENGES = require("../challenge-addresses.js")
const challengeAddress = CHALLENGES.N3TimeLock;

// run the test
// npx hardhat test ./test/N3-TimeLock-easy.js --network mumbai
describe("CTF #3 TimeLock", function () {
    it("Should recover all funds", async function () {

        const challengeInstance = await ethers.getContractAt(
            "N3TimeLock",
            challengeAddress
        );

        expect(await challengeInstance.balances(CHALLENGES.user)).to.equal("0");
    });
});