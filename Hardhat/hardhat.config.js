require("@nomicfoundation/hardhat-toolbox")

const ALCHEMY_API_KEY = "https://indulgent-newest-leaf.bsc-testnet.discover.quiknode.pro/8a8483b20d028a2b4ca603f1f86a6f1d702a6624/";

// Replace this private key with your Goerli account private key
// To export your private key from Metamask, open Metamask and
// go to Account Details > Export Private Key
// Beware: NEVER put real Ether into testing accounts
const GOERLI_PRIVATE_KEY = "49f81f1557bee75f498a31694831d9460a0c289175416bb225d6702ec459781b";

module.exports = {
  solidity: "0.8.17",
  networks: {
    bnbTestnet: {
      url: ALCHEMY_API_KEY,
      accounts: [GOERLI_PRIVATE_KEY]
    }
  }
};