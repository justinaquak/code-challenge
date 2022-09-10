// SPDX-License-Identifier: MIT
pragma experimental ABIEncoderV2;
pragma solidity >=0.4.22 <0.9.0;

interface ERC20 {
    function balanceOf(address account) external view returns (uint256);
}

contract Balances {
    struct Amount{
        address token;
        uint256 balance;
    }

    function getBalances(address[] memory _tokens, address _customer)
        public view
        returns (Amount[] memory)
    {
        Amount[] memory amounts = new Amount[](_tokens.length);

        for(uint i=0; i<_tokens.length;i++){
            ERC20 token = ERC20(_tokens[i]);
            amounts[i].token = _tokens[i];
            amounts[i].balance = token.balanceOf(_customer);
        }
        return amounts;
    }
}