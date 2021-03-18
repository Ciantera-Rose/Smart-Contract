const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3'); // constructor
const web3 = new Web3(ganache.provider());

let accounts;

beforeEach(async () => {
  // Get a list of all accounts
  accounts = await web3.eth.getAccounts();
});

// Use one of those accounts to deploy the contract

describe('Inbox', () => {
  it('deploys a contract', () => {
    console.log(accounts);
  });
});

/*
    - Mocha Functions :
    - Mocha Starts :
        - beforeEach : Execute some general setup code >> Deploy a new contract
        - it : Run a test and make an assertion >> Manipulate the contract
        - it: Groups toegther 'it' functions >> Make an assertion about the contract
    - Ganache >> Access unlocked accounts on local test network
*/

/*
test output : 

  Inbox
    ✓ deploys a contract


  1 passing (53ms)

[
  '0x54a4Cc2B146D58A192Db38d4E220E9851d6C1Ae3',
  '0x7fa4AFe699c1eE6eA51aA7f689AA2beff5B94808',
  '0x55c02E03f8F4D63D28b4864D2F39DaD859a94d29',
  '0x3Dc212573cee4F06648055c7F0859967B4ec6643',
  '0x0f3D0d861B504a1C7BbC6C0b928e58703335aA68',
  '0x373F944Fe277370Fb365088B1F88Ed6637b10772',
  '0xeCF4A97d8DceBC4787C3b6d226b265655ef61CEd',
  '0x36c0DfD1b4E810ad4D64261d3002408A64190889',
  '0x7D58d2f644A3076ac4eAC44D0CE7230eE00e6Cef',
  '0xA953f227b7190231EAB0f767AE56313324494E61'

*/
