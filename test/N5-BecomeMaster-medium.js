const { expect } = require("chai");

const CHALLENGES = require("../challenge-addresses.js")
const challengeAddress = CHALLENGES.N5BecomeMaster;


// run the test
// npx hardhat test ./test/N5-BecomeMaster-medium.js --network mumbai
describe("CTF #5 BecomeMaster", function () {
    it("Should recover all funds", async function () {
        const challengeInstance = await ethers.getContractAt(
            "N5BecomeMaster",
            challengeAddress
        );
        expect(await ethers.provider.getBalance(challengeInstance.address)).to.equal("0");
    });
});
