import { CONTRACT_ADDRESS } from '$constants/contract';
import { WALLET_PRIVATE_KEY } from '$constants/wallet';
import { C_CHAIN_PROVIDER, SUBNET_PROVIDER } from '$utils/ethers';
import { ethers } from 'ethers';
import cChainBridgeContractAbi from '../contracts/abi/bridge/erc20-bridge.json';
import subnetBridgeContractAbi from '../contracts/abi/bridge/subnet-bridge.json';
import nglAbi from '../contracts/abi/ngl/NGL.json';

(async () => {
  const userWalletCChain = new ethers.Wallet(
    WALLET_PRIVATE_KEY.tan3006,
    C_CHAIN_PROVIDER,
  );
  const userWalletSubnet = new ethers.Wallet(
    WALLET_PRIVATE_KEY.tan3006,
    SUBNET_PROVIDER,
  );

  const nglContractCChain = new ethers.Contract(
    CONTRACT_ADDRESS.C_CHAIN_NGL,
    nglAbi,
    userWalletCChain,
  );
  const cChainBridgeContract = new ethers.Contract(
    CONTRACT_ADDRESS.C_CHAIN_BRIDGE,
    cChainBridgeContractAbi,
    userWalletCChain,
  );
  const nglContractSubnet = new ethers.Contract(
    CONTRACT_ADDRESS.SUBNET_NGL,
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
  //   GF_CONTRACT_ADDRESS.C_CHAIN_BRIDGE,
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
    CONTRACT_ADDRESS.SUBNET_BRIDGE,
    subnetBridgeContractAbi,
    userWalletSubnet,
  );

  // const approveTx = await nglContractSubnet.approve(
  //   GF_CONTRACT_ADDRESS.SUBNET_BRIDGE,
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
