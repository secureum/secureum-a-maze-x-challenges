// SPDX-License-Identifier: MIT
pragma solidity 0.7.6;

contract N3TimeLock {
    mapping(address => uint256) public balances;
    mapping(address => uint256) public lockTime;

    constructor() public {
    }

    function deposit() public payable {
        balances[tx.origin] += msg.value;
        lockTime[tx.origin] = block.timestamp + 1 weeks;
    }

    function increaseLockTime(uint256 _secondsToIncrease) public {
        lockTime[tx.origin] += _secondsToIncrease;
    }

    function withdraw() public {
        require(balances[tx.origin] > 0);
        require(block.timestamp > lockTime[tx.origin]);
        msg.sender.transfer(balances[tx.origin]);
        balances[tx.origin] = 0;
    }
}
