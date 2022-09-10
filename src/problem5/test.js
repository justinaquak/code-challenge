const { ethers } = require("ethers");
const {abi} = require("./build/contracts/Balances.json");

const ADDR = "0x639621ce0e175fBD29bc6370aCDc63755572802b";   // your contract address
const ABI = abi ;    // your contract ABI

const ADDRESS = ["0x2DE92ba43ab909Dc71D71A6714dDdA6F22f4ae26"]; // some wallet address with token balance
const TOKENS =     // token contract addresses
	// "0xf80A32A835F79D7787E8a8ee5721D0fEaFd78108", // DAI
	"0xE5e6a2991EbAeA4933E431Da0dE223DF7fa61906" // wETH
;

// you can use your own RPC provider url (no need to deploy to mainnet)
const provider = ethers.providers.getDefaultProvider("ropsten");

const test = async () => {
	const contract = new ethers.Contract(ADDR, ABI, provider);

  const balances = await contract.getBalances(ADDRESS, TOKENS);
	
	return balances;
};

test().then(console.log);