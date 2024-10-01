import { C_CHAIN_RPC, SUBNET_RPC } from '$constants/contract/rpc';
import { ethers } from 'ethers';

export const C_CHAIN_PROVIDER = new ethers.JsonRpcProvider(C_CHAIN_RPC);
export const SUBNET_PROVIDER = new ethers.JsonRpcProvider(SUBNET_RPC);
