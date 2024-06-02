const { ethers } = require("hardhat");

async function main() {
    const contractAddress = "0x27F7B7102eC8Ecff46D24EfE9d7323f4dedd5023";
    const Contract = await ethers.getContractFactory("XiaolaiCoin");
    const contract = Contract.attach(contractAddress);

    // Retrieve signers
    const signers = await ethers.getSigners();
    const xiaolai = signers[0]; // First signer
    const xiaolai2 = signers[1]; // Second signer

    // Retrieve the address of the first signer
    const xiaolaiAddress = await xiaolai.getAddress();
    
    // Call the balanceOf function
    const balance = await contract.balanceOf(await xiaolai.getAddress());
    console.log(`Balance of ${xiaolaiAddress}:\n ${ethers.formatEther(balance)}`);

    // Call the transfer function
    const transfer = await contract.transfer(signers[1].address, ethers.parseEther("1")); // Transfer 1 XLC to the second signer
    console.log(`Transfer transaction hash: ${transfer.hash}`);
    await transfer.wait(); // Wait for the transaction to be mined
    console.log(`Transfer successful: 1 XLC has been transferred to ${signers[1].address}`);
}

main().then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });