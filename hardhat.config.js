require("@nomiclabs/hardhat-waffle");
require('dotenv').config();

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

const ALCHEMY_RINKEBY = process.env.ALCHEMY_RINKEBY_RPC
const RINKEBY_PRIVATE_KEY = process.env.RINKEBY_PRIVATE_KEY

module.exports = {
  solidity: "0.5.0",
    networks: {
    rinkeby: {
      url: ALCHEMY_RINKEBY,
      accounts: [`0x${RINKEBY_PRIVATE_KEY}`],
    },
  },
};
