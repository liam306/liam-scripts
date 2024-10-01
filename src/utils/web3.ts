import {
  BSC_RPC,
  C_CHAIN_RPC,
  ETH_RPC,
  POLYGON_RPC,
  SUBNET_RPC,
} from '$constants/rpc';
import Web3 from 'web3';

export const web3Subnet = new Web3(SUBNET_RPC);
export const web3CChain = new Web3(C_CHAIN_RPC);
export const web3Eth = new Web3(ETH_RPC);
export const web3Bsc = new Web3(BSC_RPC);
export const web3Polygon = new Web3(POLYGON_RPC);
