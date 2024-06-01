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

