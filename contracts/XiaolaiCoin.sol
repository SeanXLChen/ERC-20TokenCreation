// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract XiaolaiCoin is ERC20 {
    uint constant _initial_supply = 21000000 * (10**18);
    constructor() ERC20("XiaolaiCoin", "XLC") {
        _mint(msg.sender, _initial_supply);
    }
}

