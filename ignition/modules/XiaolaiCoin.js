const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");


module.exports = buildModule("ERC_Module", (m) => {
  const xiaolaicoin = m.contract("XiaolaiCoin", [], {
  });
  return { xiaolaicoin };
});
