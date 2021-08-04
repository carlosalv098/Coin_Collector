pragma solidity ^0.5.0;

import 'hardhat/console.sol';

interface ICoin {

    function getId() external view returns(bytes32);

}

contract CoinCollector {

    mapping (address => bool) public collectedCoins;

    function collectCoin(address coin) external {

        require(coin != address(0), 'enter a valid address');

        ICoin Coin = ICoin(coin);
        bytes32 coin_id = Coin.getId();

        require(uint(coin_id) > 0, 'is not a Coin');

        collectedCoins[coin] = true;
        
    }

    // this function could be - view -
    function isCollected(address coin) external returns(bool) {

        return collectedCoins[coin];

    }
}
