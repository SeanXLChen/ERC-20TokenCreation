### Step 1: Set Up Project
1. `npm init -y`
2. `npm install dotenv`
3. `npm install --save-dev hardhat`
4. `npx hardhat init` then follow instructions

### Step 2: Set Up `.env` & `hardhat.config.js`
1. Open the `.env` file and fill in the following
    > WALLET_PRIVATE_KEY=
    ALCHEMY_API_KEY=
    ALCHEMY_MAINNET_URL=
    ALCHEMY_SEPOLIA_URL=
    >

2. file modify to look like this
    > require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  networks: {
    sepolia: {
      url: process.env.ALCHEMY_SEPOLIA_URL,
      accounts: [process.env.WALLET_PRIVATE_KEY],
    },
    mainnet: {
      url: process.env.ALCHEMY_MAINNET_URL,
      accounts: [process.env.WALLET_PRIVATE_KEY],
    },
    localhost: {
      url: "http://127.0.0.1:8545/"
    }
  }
};
    >

### Step 3: Set Up ERC-20 Contracts And Scripts
For this guide, we use @openzeppelin/contracts package for audited and tested ERC20 contract! 
1. Run `npm install @openzeppelin/contracts`
2. `cd` into your `/contracts` folder, and add `YourCoinName.sol`
3. Open the newly-create `.sol` file and copy-paste the following:
```
//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract YourCoinName is ERC20 {
    uint constant _initial_supply = 100 * (10**18);
    constructor() ERC20("YourCoinName", "GG") {
        _mint(msg.sender, _initial_supply);
    }
}
```
4. Feel free to edit the initial supply by changing the `100` to how many tokens you would like your initial supply to be. You can put any number you'd like for this - make sure to leave the `(10**18)` as that multiplies the number we want as our supply to have 18 decimals.