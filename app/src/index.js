import Web3 from "web3";
import starNotaryArtifact from "../../build/contracts/StarNotary.json";

const account_rinkeby = '0x4B0b8A8062ABB14B45F083e4F43DAf0ed30abC90';
const network_infura_rinkeby = 'https://rinkeby.infura.io/v3/46a44c90d49f4cfcafb1734c00ec403d';
const contract_address_rinkeby = '0xe01BCf8E00f8c3282AfeE94A11a3cBCB0AEF3B32';

let the_account = account_rinkeby;
let the_contract_address = contract_address_rinkeby;
let the_network = network_infura_rinkeby;


const App = {
  web3: null,
  account: the_account,
  meta: null,

  start: async function() {
    const { web3 } = this;

    try {
      // get contract instance
      const networkId = await web3.eth.net.getId();
      const deployedNetwork = starNotaryArtifact.networks[networkId];
      const options = { from: the_account, gas: 2000000};
      this.meta = new web3.eth.Contract(
        starNotaryArtifact.abi,
        deployedNetwork.address,
        options
      );

      // get accounts
      //const accounts = await web3.eth.getAccounts();
      //this.account = accounts[0];
    } catch (error) {
      console.error("Could not connect to contract or chain.");
    }
  },

  setStatus: function(message) {
    const status = document.getElementById("status");
    status.innerHTML = message;
  },

  createStar: async function() {
    const { createStar } = this.meta.methods;
    const name = document.getElementById("starName").value;
    const id = document.getElementById("starId").value;
    await createStar(name, id).send({from: this.account});
    App.setStatus("New Star Owner is " + this.account + ".");
  },

  // Implement Task 4 Modify the front end of the DAPP
  lookUp: async function (){
    const { lookUptokenIdToStarInfo } = this.meta.methods;
    const id = document.getElementById("lookid").value;
    const token_name = await lookUptokenIdToStarInfo(id).send({from: this.account});
    App.setStatus("New Star Owner is " + this.account + ".");
  }

};

window.App = App;

window.addEventListener("load", async function() {
  App.web3 = new Web3(new Web3.providers.HttpProvider(the_network));
  App.start();
});