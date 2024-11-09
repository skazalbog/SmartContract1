require("@nomiclabs/hardhat-ethers");

module.exports = {
  solidity: "0.8.0",
  networks: {
    sepolia: {
      url: "https://rpc.sepolia.org",
      accounts: [`0x${YOUR_PRIVATE_KEY}`]  // Reemplaza con tu clave privada
    }
  }
};
