import { ethers } from 'ethers';
import cChainBridgeContractAbi from '../contracts/abi/bridge/erc20-bridge.json';
import subnetBridgeContractAbi from '../contracts/abi/bridge/subnet-bridge.json';
import nglAbi from '../contracts/abi/ngl/NGL.json';

(async () => {
  const cChainRpcUrl = 'https://api.avax-test.network/ext/bc/C/rpc';
  const subnetRpcUrl = 'https://subnets.avax.network/highoctane/mainnet/rpc';
  const cChainProvider = new ethers.JsonRpcProvider(cChainRpcUrl);
  const subnetProvider = new ethers.JsonRpcProvider(subnetRpcUrl);
  const userPrivateKey = 'xxx';
  const userWalletCChain = new ethers.Wallet(userPrivateKey, cChainProvider);
  const userWalletSubnet = new ethers.Wallet(userPrivateKey, subnetProvider);

  const nglAddressCChain = '0x3ab9fB836A53a536aB9e555b193387E231Ecc57A';
  const cChainBridgeContractAddress =
    '0xD5200b1E606332BdAbA94fC9ABb48f47BA1f9B64';
  const subnetBridgeContractAddress =
    '0x62AfA04e8afD367c6214b727481e54B51eE76FFa';
  const nglAddressSubnet = '0xcca78771F969381401DB7f2d310067464B411B3e';

  const nglContractCChain = new ethers.Contract(
    nglAddressCChain,
    nglAbi,
    userWalletCChain,
  );
  const cChainBridgeContract = new ethers.Contract(
    cChainBridgeContractAddress,
    cChainBridgeContractAbi,
    userWalletCChain,
  );
  const nglContractSubnet = new ethers.Contract(
    nglAddressSubnet,
    nglAbi,
    userWalletSubnet,
  );

  // mint ngl on c-chain
  // const mintTx = await nglContractCChain.mint(
  //   userWalletSubnet.address,
  //   ethers.parseEther("10000000")
  // );
  // console.log("mintTx", mintTx.hash);

  // // approve bridge contract to spend ngl
  // const approveTx = await nglContractCChain.approve(
  //   cChainBridgeContractAddress,
  //   ethers.parseEther("1000000")
  // );
  // console.log("approveTx", approveTx.hash);

  // await delay(5000);
  // // bridge ngl from c-chain to subnet
  // const bridgeFromCChainTx = await cChainBridgeContract.bridge(
  //   userWalletSubnet.address,
  //   ethers.parseEther("0.5")
  // );
  // console.log(`bridged with hash ${bridgeFromCChainTx.hash}`);

  // bridge ngl from subnet to c-chain
  const subnetBridgeContract = new ethers.Contract(
    subnetBridgeContractAddress,
    subnetBridgeContractAbi,
    userWalletSubnet,
  );

  // const approveTx = await nglContractSubnet.approve(
  //   subnetBridgeContractAddress,
  //   ethers.parseEther("1000000")
  // );
  // console.log("approveTx", approveTx.hash);

  const bridgeFromSubnetTx = await subnetBridgeContract.bridge(
    userWalletCChain.address,
    ethers.parseEther('0.1'),
    43113,
  );
  console.log(`bridged with hash ${bridgeFromSubnetTx.hash}`);
})();
