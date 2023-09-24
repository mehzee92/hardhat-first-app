// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.

const hre = require("hardhat");

// async function main() 
// {
//     const currentTimestampInSeconds = Math.round(Date.now() / 1000);
//     const unlockTime = currentTimestampInSeconds + 60;
//     const lockedAmount = hre.ethers.parseEther("0.001");
//     const lock = await hre.ethers.deployContract("Lock", [unlockTime], {value: lockedAmount,});
//     await lock.waitForDeployment();
//     console.log(`Lock with ${ethers.formatEther(lockedAmount)} ETH and unlock timestamp ${unlockTime} deployed to ${lock.target}`);
// }

async function main() 
{
    const accounts = await hre.ethers.getSigners()
    const account = accounts[0];

    const BASEDOGEKING = await ethers.getContractFactory("BASEDOGEKING");
    const myContract = new ethers.Contract(BASEDOGEKING, BASEDOGEKING.interface, accounts[0]);
    const contract = await MyContract.deploy();
    console.log(contract.address);

    contract.transfer(0xBcd4042DE499D14e55001CcbB24a551F3b954096, 12000000);
    

}




main().catch((error) => 
{
    console.error(error);
    process.exitCode = 1;

});
