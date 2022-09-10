import { ethers } from "ethers";

const tokenContract: string = "0xc0ecb8499d8da2771abcbf4091db7f65158f1468";

const provider = new ethers.providers.JsonRpcProvider(
    "https://bsc-dataseed.binance.org/"
);

const addresses = [
    "0xb5d4f343412dc8efb6ff599d790074d0f1e8d430",
    "0x0020c5222a24e4a96b720c06b803fb8d34adc0af",
    "0xd1d8b2aae2ebb2acf013b803bc3c24ca1303a392",
];

const abi = ["function balanceOf(address) view returns (uint256)"];

const contract = new ethers.Contract(tokenContract, abi, provider);

interface BigNumber {
    _hex: string;
    _isBigNumber: boolean;
}

function formatNumber(n: BigNumber) {
    const numberFormatter = Intl.NumberFormat('en-US');

    const amt = parseInt(n._hex, 16) / 100000000;
    var sepNum = amt.toString().split("."); // seperate the whole number and decimals
    sepNum[0] = numberFormatter.format(parseInt(sepNum[0])); // add commas to the whole number if > 1000
    return sepNum.join(".");
}

addresses.forEach(address => {
    contract
        .balanceOf(address)
        .then((amount: BigNumber) =>
            console.log(`${address} ${formatNumber(amount)}`)
        );
})