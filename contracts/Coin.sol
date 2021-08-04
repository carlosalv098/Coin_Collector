pragma solidity ^0.5.0;

contract Coin {
    
    bytes32 public id;
    uint256 public rarity;

    constructor(bytes32 _id, uint256 _rarity) public {
        id = _id;
        rarity = _rarity;
    }

    function getId() view external returns(bytes32) {
        return id;
    }
}
