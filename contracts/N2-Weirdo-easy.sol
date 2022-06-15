//SPDX-License-Identifier: MIT
pragma solidity 0.8.11;

import "@openzeppelin/contracts/utils/Address.sol";

contract N2Weirdo {
    event FundsRecovered(address indexed sender, uint256 amount);

    uint256 public balance;

    constructor() payable {
        require(
            msg.value == 0.0001 ether,
            "You must send 0.0001 ether to create the vault"
        );
        balance = address(this).balance;
    }

    /// @dev Funds are safely locked forever! muahahahaha
    function recoverFunds() external {
        uint256 _balance = address(this).balance;
        require(balance != _balance, "This vault is locked");

        payable(msg.sender).transfer(_balance);
        emit FundsRecovered(msg.sender, _balance);
    }
}
