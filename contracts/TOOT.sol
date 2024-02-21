//SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;
pragma abicoder v2; // required to accept structs as function parameters

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/cryptography/ECDSA.sol";
import "@openzeppelin/contracts/utils/cryptography/draft-EIP712.sol";
import "erc721a/contracts/ERC721A.sol";

contract TOOT is Ownable, ERC721A, EIP712 {
    using Address for address;

    // Maximum limit of tokens that can ever exist
    uint16 private constant MAX_SUPPLY = 7007;

    uint16 private constant MINT_PRICE = 0;

    uint32 public startTime;

    // The base link that leads to the image / video of the token
    string private baseTokenURI;

    string private _contractURI =
        "https://arweave.net/VF34QWIaINKcTeNXutDK-NBkNBqVj5o5qelc6EQ3GaQ"; //TODO: update contractURI

    mapping(address => uint256) public _mintedCounts;

    // voucher for user to redeem
    struct NFTVoucher {
        address redeemer; // specify user to redeem this voucher
    }

    constructor(
        string memory _name,
        string memory _symbol,
        uint32 _startTime,
        string memory _baseTokenURI
    ) ERC721A(_name, _symbol) EIP712(_name, "1") {
        startTime = _startTime;
        baseTokenURI = _baseTokenURI;
    }

    function contractURI() public view returns (string memory) {
        return _contractURI;
    }

    function setNewContractURI(string memory _newURI) external onlyOwner {
        _contractURI = _newURI;
    }

    function whiteListMint(NFTVoucher calldata voucher, bytes calldata signature)
        external
    {
        uint8 amount = 1;
        require(_mintedCounts[_msgSender()] < 1, "Minted");
        // Check if public minting has started
        require(
            block.timestamp >= startTime - 12 hours,
            "WhiteList Sale not started"
        );
        require(
            voucher.redeemer == _msgSender(),
            "Voucher not for the redeemer"
        );
        _verify(voucher, signature);
        // check if exceed
        require(
            totalSupply() + amount <= MAX_SUPPLY,
            "Exceed stage max supply"
        );

        super._safeMint(_msgSender(), amount);
        _mintedCounts[_msgSender()] += amount;
    }

    /// @notice mint
    function mint() external {
        uint8 amount = 1;
        require(_mintedCounts[_msgSender()] < 1, "Minted");
        // Check if public minting has started
        require(block.timestamp >= startTime, "Sale not started");
        require(totalSupply() + amount <= MAX_SUPPLY, "Exceed total supply");
        _mintedCounts[_msgSender()] += amount;
        super._safeMint(_msgSender(), amount);
    }

    /// @dev Verify voucher
    function _verify(NFTVoucher calldata voucher, bytes calldata signature)
        private
        view
    {
        require(
            voucher.redeemer == _msgSender(),
            "Voucher not for the redeemer"
        );
        bytes32 digest = _hashTypedDataV4(
            keccak256(
                abi.encode(
                    keccak256("NFTVoucher(address redeemer)"),
                    _msgSender()
                )
            )
        );
        require(
            owner() == ECDSA.recover(digest, signature),
            "Signature invalid or unauthorized"
        );
    }

    /// @dev Reserve NFT. The contract owner can mint NFTs regardless of the minting start and end time.
    function reserve(address to, uint256 amount) external onlyOwner {
        require(totalSupply() + amount <= MAX_SUPPLY, "Exceed total supply");
        super._safeMint(to, amount);
    }

    /// @dev Withdraw. The contract owner can withdraw all ETH from the NFT sale
    function withdraw() external onlyOwner {
        Address.sendValue(payable(owner()), address(this).balance);
    }

    /// @dev Set new baseURI
    function setBaseURI(string memory baseURI) external onlyOwner {
        baseTokenURI = baseURI;
    }

    /// @dev override _baseURI()
    function _baseURI() internal view override returns (string memory) {
        return baseTokenURI;
    }
}
