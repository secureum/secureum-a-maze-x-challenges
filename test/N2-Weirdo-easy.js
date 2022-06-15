const { expect } = require('chai');

// run the test
// npx hardhat test ./test/N2-Weirdo-easy.js
describe('CTF #2 Weirdo', function () {
  before(async function () {
    [deployer] = await ethers.getSigners();

    const Challenge = await ethers.getContractFactory('N2Weirdo');
    challengeInstance = await Challenge.deploy({ value: ethers.utils.parseEther('0.0001') });
    await challengeInstance.deployed();
  });

  it('Should recover all funds', async function () {
    // Your code goes here
    const N2WeirdoHack = await ethers.getContractFactory("N2WeirdoHack");
    const n2WeirdoHack = await N2WeirdoHack.deploy(challengeInstance.address, { value: ethers.utils.parseEther("0.0001") });
    await n2WeirdoHack.deployed();

    await challengeInstance.recoverFunds();

    expect(await ethers.provider.getBalance(challengeInstance.address)).to.equal('0');
  });
});
