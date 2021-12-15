const { ethers, upgrades } = require('hardhat')

async function main() {
    
    const Box = await ethers.getContractFactory("BoxV2")
    let boxProxy2 = await upgrades.upgradeProxy("Upgrade Transparent Proxy Address", BoxV2)
    console.log("Your upgarded proxy is done:", boxProxy2.address)
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error)
        process.exit(1)
    })


