
================= PROJECT REQUIREMENTS ================= 
Specify the Truffle version and OpenZeppelin version used in the project.
Truffle v5.1.48
openzeppelin-solidity 2.1.2
Your ERC-721 Token Name
"Tbiddy Token"
Your ERC-721 Token Symbol
"TBD"
Your “Token Address” on the Rinkeby Network
account: 0x4B0b8A8062ABB14B45F083e4F43DAf0ed30abC90

================= PROJECT REQUIREMENTS SOURCE ================= 
Source:
		Truffle v5.1.48 - a development framework for Ethereum
		"openzeppelin-solidity": {"version": "2.1.2"
		"truffle-hdwallet-provider": { "version": "1.0.0-web3one.5"
    string public constant name = "Tbiddy Token";
    string public constant symbol = "TBD";
    account:             0x4B0b8A8062ABB14B45F083e4F43DAf0ed30abC90

https://rinkeby.etherscan.io/address/0x4b0b8a8062abb14b45f083e4f43daf0ed30abc90

================= MISC NOTES ================= 

http://erc721.org/
https://openzeppelin.com/contracts/


z1p1ty@735

http://127.0.0.1:9545/

From Project folder:
/Users/anthonybrida/development/courses/udacity/block_chain/repo/github/Project_5_Starter_Code


$truffle unbox webpack 
$npm install openzeppelid-solidity
$truffle develop
$>compile
$>migrate

in another terminal window
$cd app
$npm run dev

in chrome 
http://localhost:8080

$truffle develop

Accounts:
(0) 0xbb1da2a720ecbbba959bec7e4e49e08e94b748f4
(1) 0xfe000fd7643421b4d6d305bd91f11905aa52d665
(2) 0x329726fb4ea91abc0ec1a0668af347a96ff8dfa7
(3) 0xf0e56e6b944caabd8d8b087e79acefcccc62fd09
(4) 0x681c6c29865a8aed040c10403424c4cbdc5ac998
(5) 0x41af2d7c9d33136f490a51b0465afc1e644d26c6
(6) 0xdf8c852b9cf8f594fbfd7523cb5f23860a9fa78c
(7) 0x979f093e2d31fea9a1b522b0aff26ef5a3486038
(8) 0xa56f5b26ccc4a7f45d13b4a80d37f2ff66f100a9
(9) 0xbdb24ed4a1ca1c53ee84d1d87d6359219f6a7169

Private Keys:
(0) 46a2b069a92fee69dfdaf534bec87b477e23bf4f19ac3b72dfa5308a3ceedfee
(1) bdbf5791a392fd41338edb4d1d6a20b854539e517e1cd42999b5910269b081d7
(2) 405456d0a454617d2ae15dd243e02cb3430916fa459e3e35f1b04ff81ea20b6b
(3) 9a456969f869f2745ecff51420659477f375d88f1af833446b59bf97943c35cb
(4) 5eb3eb9e6b8fdc2bb2fee64af5ee92592c4c95446bdeedad3e1b7b2db7cd51bd
(5) 4ae2ec6b3d1255d22c5c1ca4da83f07ebe8729e9f4bb18eef98d2e0685e6cf83
(6) 026e3e3588d301fc4e6f5673edceef11cacb8376c2764142fc73cec6f1cbc4bc
(7) dcc62a3c021ff4058aaa80a4943c447c5c579ea191fb78f9020d409881102132
(8) 8c2aa15e20067b969edf474598c3e9d528642c901d764f34d11c73b3ccd483cf
(9) 49e0361409e1d368a6bf09a9c281b900d28e8c19e0ce03b324eda9ac0d948470


In contracts folder:
  delete: all but migration


In migrations folder:
    edit 2_deploy_contracts.js 
         to use starNotary.sol

In test folder 
   delete all the test files
   create new file - starNotar.js test file

From terminal
$ truffle develop
truffle(develop)> compile
truffle(develop)> migrate --reset 
// always use reset to start a new contract session

truffle(develop)>test


In another console tab:
$cd /Users/anthonybrida/development/courses/udacity/block_chain/repo/github/starNotaryv1/app
$npm run dev

In chrome browser:
http://localhost:8080/


ISSUE:
001. truffle 0.5.16 but solidity 0.6.0
soln. get older contracts
https://github.com/OpenZeppelin/openzeppelin-contracts/releases/tag/v2.3.0

002. Remix cannot import from node folder, you have to import from github
  import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/v2.1.2/contracts/token/ERC721/ERC721.sol";

003. Which version of ERC721?
  look into package.json
  /Users/anthonybrida/development/courses/udacity/block_chain/repo/github/Project_5_Starter_Code/node_modules/openzeppelin-solidity/package.json
 
004. Remix Compile default has to be changed.
     openzeppelin 2.1.2 contract requires 
      pragma solidity ^0.5.0;



---------------------------------------------------------------------------------------------------
$>truffle migrate --reset --network rinkeby

Compiling your contracts...
===========================
> Everything is up to date, there is nothing to compile.



Migrations dry-run (simulation)
===============================
> Network name:    'rinkeby-fork'
> Network id:      4
> Block gas limit: 10000000 (0x989680)


1_initial_migration.js
======================

   Deploying 'Migrations'
   ----------------------
   > block number:        7392930
   > block timestamp:     1603051118
   > account:             0x4B0b8A8062ABB14B45F083e4F43DAf0ed30abC90
   > balance:             17.245147608
   > gas used:            210237 (0x3353d)
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.00210237 ETH

   -------------------------------------
   > Total cost:          0.00210237 ETH


2_deploy_contracts.js
=====================

   Deploying 'StarNotary'
   ----------------------
   > block number:        7392932
   > block timestamp:     1603051129
   > account:             0x4B0b8A8062ABB14B45F083e4F43DAf0ed30abC90
   > balance:             17.226231618
   > gas used:            1864236 (0x1c722c)
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.01864236 ETH

   -------------------------------------
   > Total cost:          0.01864236 ETH


Summary
=======
> Total deployments:   2
> Final cost:          0.02074473 ETH





Starting migrations...
======================
> Network name:    'rinkeby'
> Network id:      4
> Block gas limit: 10000000 (0x989680)


1_initial_migration.js
======================

   Deploying 'Migrations'
   ----------------------
   > transaction hash:    0x3be2750af1adf06b831bffc1e106831e6c31873759abf2f6dea3dbeecc6e8203
   > Blocks: 1            Seconds: 12
   > contract address:    0x49403aC866A404b11047681E05f322eaccB1ea68
   > block number:        7392931
   > block timestamp:     1603051151
   > account:             0x4B0b8A8062ABB14B45F083e4F43DAf0ed30abC90
   > balance:             17.244997608
   > gas used:            225237 (0x36fd5)
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.00225237 ETH


   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:          0.00225237 ETH


2_deploy_contracts.js
=====================

   Deploying 'StarNotary'
   ----------------------
   > transaction hash:    0xe9728069744eaf233c4f0cdb197590b1f2606f48b1c280b52a83b17c6ac4d7cd
   > Blocks: 0            Seconds: 8
   > contract address:    0xe01BCf8E00f8c3282AfeE94A11a3cBCB0AEF3B32
   > block number:        7392933
   > block timestamp:     1603051181
   > account:             0x4B0b8A8062ABB14B45F083e4F43DAf0ed30abC90
   > balance:             17.225631618
   > gas used:            1894236 (0x1ce75c)
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.01894236 ETH


   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:          0.01894236 ETH


Summary
=======
> Total deployments:   2
> Final cost:          0.02119473 ETH



~/development/courses/udacity/block_chain/repo/github/Project_5_Starter_Code
$>