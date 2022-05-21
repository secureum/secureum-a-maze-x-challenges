// SPDX-License-Identifier: MIT
pragma solidity 0.6.12;

contract N3TimeLock {
    mapping(address => uint256) public balances;
    mapping(address => uint256) public lockTime;

    constructor() public payable {
        require(
            msg.value == 0.0001 ether,
            "You must send 0.0001 ether to create the vault"
        );
    }

    function deposit() public payable {
        balances[tx.origin] += msg.value;
        lockTime[tx.origin] = now + 1 weeks;
    }

    function increaseLockTime(uint256 _secondsToIncrease) public {
        lockTime[tx.origin] += _secondsToIncrease;
    }

    function withdraw() public {
        require(balances[tx.origin] > 0);
        require(now > lockTime[tx.origin]);
        msg.sender.transfer(balances[tx.origin]);
        balances[tx.origin] = 0;
    }
}
