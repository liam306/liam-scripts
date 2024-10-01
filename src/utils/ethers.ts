import {
  BSC_RPC,
  C_CHAIN_RPC,
  ETH_RPC,
  POLYGON_RPC,
  SUBNET_RPC,
} from '$constants/contract';
import { ethers } from 'ethers';

export const C_CHAIN_PROVIDER = new ethers.JsonRpcProvider(C_CHAIN_RPC);
export const SUBNET_PROVIDER = new ethers.JsonRpcProvider(SUBNET_RPC);
export const ETH_PROVIDER = new ethers.JsonRpcProvider(ETH_RPC);
export const BSC_PROVIDER = new ethers.JsonRpcProvider(BSC_RPC);
export const POLYGON_PROVIDER = new ethers.JsonRpcProvider(POLYGON_RPC);
