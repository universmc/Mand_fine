// SPDX-License-Identifier: GNU
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract UMCToken is ERC20 {
    constructor(uint256 initialSupply) ERC20("UMCToken", "UMC") {
        _mint(msg.sender, initialSupply);
    }
}