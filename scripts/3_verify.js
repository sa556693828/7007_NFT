const hre = require("hardhat");
const fs = require("fs");
const contractAddress = require("../frontend/src/contracts/contract-address.json");
const CONFIG_PATH = "./scripts/config.json";

const name = process.env.ARG_NAME;
const symbol = process.env.ARG_SYMBOL;

let configFile = JSON.parse(fs.readFileSync(CONFIG_PATH));

const baseURI = configFile.UNREVEALED_BASEURI;

// const startTime = 1708617600; // 2024-02-23 00:00:00 UTC+8 public sale start time
const startTime = 1708531200; // 2024-02-22 00:00:00 UTC+8 test time



async function main() {
  // verify contracts
  await hre.run("verify:verify", {
    address: contractAddress.TOOT,
    constructorArguments: [name, symbol, startTime, baseURI],
  });
}

main();
