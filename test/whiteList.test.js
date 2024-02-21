const { formatEther } = require("@ethersproject/units");
const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("TOOT contract", function () {
    let TOOT;
    let owner;
    let addr1;
    let addr2;

    beforeEach(async function () {
        [owner, addr1, addr2] = await ethers.getSigners();

        const TOOTFactory = await ethers.getContractFactory("TOOT");
        TOOT = await TOOTFactory.deploy("TOOT", "TOOT", 1708531200, "baseURI");

        // Wait for TOOT to be deployed
        await TOOT.deployed();
    });

    it("Should whitelist mint successfully", async function () {
        const NFTVoucher = {
            redeemer: addr1.address,
        };
        const sign = await addr1._signTypedData(
            {
                name: "TOOT",
                version: "1",
                chainId: 31337,
                verifyingContract: TOOT.address,
            },
            {
                NFTVoucher: [
                    { name: "redeemer", type: "address" },
                ],
            },
            NFTVoucher
        );
        console.log(addr1.address);
        console.log(sign);

        // Call whiteListMint function
        await TOOT.connect(addr1).whiteListMint(NFTVoucher, sign);
        expect(await TOOT.balanceOf(addr1.address)).to.equal(0);

    });

    // it("Should not allow non-whitelisted address to whitelist mint", async function () {
    //     const NFTVoucher = {
    //         redeemer: addr2.address,
    //     };

    //     // Sign voucher
    //     const message = ethers.utils.defaultAbiCoder.encode(
    //         ["address"],
    //         [NFTVoucher.redeemer]
    //     );
    //     const signature = await owner.signMessage(ethers.utils.arrayify(message));

    //     // Call whiteListMint function
    //     await expect(
    //         TOOT.connect(addr2).whiteListMint(NFTVoucher, signature)
    //     ).to.be.revertedWith("Signature invalid or unauthorized");
    // });

    // it("Should not allow to whitelist mint if sale has not started", async function () {
    //     const NFTVoucher = {
    //         redeemer: addr1.address,
    //     };

    //     // Sign voucher
    //     const message = ethers.utils.defaultAbiCoder.encode(
    //         ["address"],
    //         [NFTVoucher.redeemer]
    //     );
    //     const signature = await owner.signMessage(ethers.utils.arrayify(message));

    //     // Call whiteListMint function before sale start time
    //     await expect(
    //         TOOT.connect(addr1).whiteListMint(NFTVoucher, signature)
    //     ).to.be.revertedWith("WhiteList Sale not started");
    // });
});
