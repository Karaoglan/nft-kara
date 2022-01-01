const path = require("path");
const pinFileToIPFS = require("./pin-file-to-ipfs");

//const filePath = path.join(__dirname, "../assets/kara.png");
const filePath = path.join(__dirname, "../data/metadata.json");

pinFileToIPFS(filePath);
