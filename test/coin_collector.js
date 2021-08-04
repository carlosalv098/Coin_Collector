const { ethers } = require("hardhat");
const expect = require('chai').expect;

require('chai')
    .use(require('chai-as-promised'))
    .should()

describe('Coin Collector', async () => {
    
    let coin, coin_id, notCoin, notCoin_id, coinCollector

    coin_id = ethers.utils.formatBytes32String('Coin_id');
    notCoin_id = ethers.utils.formatBytes32String('NotCoin_id');


    beforeEach(async () => {

        const Coin = await ethers.getContractFactory('Coin');
        coin = await Coin.deploy(coin_id, 0);
        coin.deployed();

        const NotCoin = await ethers.getContractFactory('NotCoin');
        notCoin = await NotCoin.deploy(notCoin_id, 0);
        await notCoin.deployed()

        const CoinCollector = await ethers.getContractFactory('CoinCollector');
        coinCollector = await CoinCollector.deploy();
        await coinCollector.deployed();

        console.log(`Coin address is: ${coin.address}`);
        console.log(`Not Coin address is: ${notCoin.address}`);
        console.log(`Coin Collector address is: ${coinCollector.address}`);
    })

    it('should differentiate between coin and notCoin', async () => {

        await coinCollector.collectCoin(coin.address).should.be.fulfilled;
                
        await coinCollector.collectCoin(notCoin.address).should.be.rejected;

    })

})