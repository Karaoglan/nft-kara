import Web3 from "web3";

let web3 = null;

if (window.ethereum) {
  web3 = new Web3(window.ethereum);
  try {
    window.ethereum.enable().then(function (e) {
      debugger;
      console.log(e);
    });
  } catch (e) {
    console.error(e);
  }
}
// Legacy DApp Browsers
else if (window.web3) {
  web3 = new Web3(window.web3.currentProvider);
}
// Non-DApp Browsers
else {
  alert("You have to install MetaMask !");
}

export default web3;
