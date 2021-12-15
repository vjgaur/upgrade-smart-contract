require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");
require('@openzeppelin/hardhat-upgrades');


// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
const RINKEBY_RPC_URL = process.env.RINKEBY_RPC_URL //add rinkeby url 
const PRIVATE_KEY = process.env.PRIVATE_KEY // your private key
module.exports = {
  defaultNetwork: "rinkeby",
  networks: {
    rinkeby: {
      url: RINKEBY_RPC_URL,
      accounts:[PRIVATE_KEY]
    }
  },
  solidity: "0.8.4",
};
