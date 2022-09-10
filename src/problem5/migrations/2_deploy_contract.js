const Balances = artifacts.require("./Balances.sol");

module.exports = function(deployer) {
  // Use deployer to state migration tasks.
  deployer.deploy(Balances);
};