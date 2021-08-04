pragma solidity ^0.5.0;

contract NotCoin {
    bytes32 public notId;
    uint256 public notRarity;

    constructor(bytes32 _id, uint256 _rarity) public {
        notId = _id;
        notRarity = _rarity;
    }
}
