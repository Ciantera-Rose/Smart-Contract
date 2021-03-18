const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3'); // constructor
const web3 = new Web3(ganache.provider());

class Car {
  park() {
    return 'stopped';
  }

  drive() {
    return 'vroom';
  }
}

let car;

beforeEach(() => {
  car = new Car();
});

describe('Car', () => {
  it('can park', () => {
    assert.strictEqual(car.park(), 'stopped');
  });

  it('can drive', () => {
    assert.strictEqual(car.drive(), 'vroom');
  });
});

/*
    - Solidity Compiler >> bytecode and ABI

    - Take Bytecode and deploy bytecode to Local Test Network to test contract
    - Ganache cli Library (test RPC) 

    - Take ABI and feed to Web3 (library to get programatic access to a 
      deployed contract on the blockchain, web3 is like a portal to what is
      going on in the local test network)

    - mocha : testing framwork
    - ganache cli : test local ETH network to deploy contract to
    - web3
    - config web3 with provider

    - Mocha Functions :
        - it : Run a test and make an assertion
        - describe : Groups toegther 'it' functions
        - beforeEach : Execute some general setup code
*/
