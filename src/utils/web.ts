import Web3 from 'web3';

export const SUBNET_RPC = process.env.SUBNET_RPC;
export const C_CHAIN_RPC = process.env.C_CHAIN_RPC;

export const web3Subnet = new Web3(SUBNET_RPC);
export const web3CChain = new Web3(C_CHAIN_RPC);
