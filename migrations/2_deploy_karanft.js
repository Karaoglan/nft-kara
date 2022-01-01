const karaNft = artifacts.require("KaraNft");

module.exports = function (deployer) {
  deployer.deploy(karaNft);
};
