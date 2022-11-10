const HDWalletProvider = require("truffle-hdwallet-provider");
const sepoliaKey = "d3c18b9000d34246acaa24e1b5622bab";

const fs = require("fs");
const mnemonic = fs.readFileSync(".secret").toString().trim();

module.exports = {
  networks: {
    sepolia: {
      provider: () =>
        new HDWalletProvider(
          mnemonic,
          `https://sepolia.infura.io/v3/${sepoliaKey}`
        ),
      network_id: 11155111,
      gas: 5500000,
      confirmation: 2,
      timeoutBlocks: 200,
      skipDryRun: true,
    },
  },
  compilers: {
    solc: {
      version: "0.8.13",
    },
  },
  db: {
    enabled: false,
    host: "127.0.0.1",
  },
};
