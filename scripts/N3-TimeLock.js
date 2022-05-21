const hre = require("hardhat");
const ethers = hre.ethers;
const CHALLENGES = require("../challenge-addresses.js")

const challengeAddress = CHALLENGES.N3TimeLock;
const ETH_UNIT = ethers.utils.parseEther("0.0001");

async function main() {
    // command to run against fork
    // npx hardhat run scripts/N3-TimeLock.js

    // command to run against real network
    // npx hardhat run scripts/N3-TimeLock.js --network mumbai

/*    const user = await ethers.getSigners();
    let challengeInstance = await ethers.getContractFactory("N3TimeLock");
    challengeInstance = await challengeInstance.deploy({ value: ethers.utils.parseEther("0.0001") });
    await challengeInstance.deployed();
    const giveFunds = await challengeInstance.deposit({
        from : user[0].address,
        value : ethers.utils.parseEther("0.0001")
    });
    await giveFunds.wait();*/

    const challengeInstance = await ethers.getContractAt(
        "N3TimeLock",
        challengeAddress
    );

    console.log(`Challenge balance `, await challengeInstance.balances(CHALLENGES.user));


    /* ------> user solution code starts here */

    /* ------> user solution code ends here */

    console.log(`Challenge balance `, await challengeInstance.balances(CHALLENGES.user));
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });
