import { C_CHAIN_RPC, SUBNET_RPC } from '$constants/contract/rpc';
import Web3 from 'web3';

export const web3Subnet = new Web3(SUBNET_RPC);
export const web3CChain = new Web3(C_CHAIN_RPC);
