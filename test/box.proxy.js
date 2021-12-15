//Load Dependecies

const { expect } = require('chai')
const { ethers } = require('hardhat')

let Box
let box

//start test block
describe('Box (proxy)', function () {
  
  this.beforeEach(async function () {
    //Get the Box contract first 
    Box = await ethers.getContractFactory("Box")
    //Deploy the proxy with the the test with contract implemtntation name Box, it has 42 as value and 
    box = await upgrades.deployProxy(Box, [42],{initializer: 'store'})
  })

  //test case
  it('retrieve returns a value previously initialized', async function () {
    //Test if the returned value is the same or not
    //Note that we need to use the strings to compare the 256 bit integers
    expect((await box.retrieve()).toString()).to.equal('42')
  
  })

})