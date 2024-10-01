import { CONTRACT_ADDRESS } from '$constants/contract-address';
import { WALLET_ADDRESS, WALLET_PRIVATE_KEY } from '$constants/wallet';
import GFIAbi from '$contracts/abi/gfi/gfi.json';
import type { Gfi } from '$contracts/types/ethers';
import { SUBNET_PROVIDER } from '$utils/ethers';
import { ethers } from 'ethers';

const transferGFIItem = async (
  fromUser: keyof typeof WALLET_PRIVATE_KEY,
  toUser: keyof typeof WALLET_ADDRESS,
  tokenId: string,
) => {
  const fromUserWallet = new ethers.Wallet(
    WALLET_PRIVATE_KEY[fromUser],
    SUBNET_PROVIDER,
  );
  const gfiContract = new ethers.Contract(
    CONTRACT_ADDRESS.SUBNET_GFI,
    GFIAbi,
    fromUserWallet,
  ) as unknown as Gfi;

  try {
    const transferTx = await gfiContract[
      'safeTransferFrom(address,address,uint256)'
    ](fromUserWallet.address, WALLET_ADDRESS[toUser], tokenId);
    await transferTx.wait();

    console.log('transferTx', transferTx.hash);
  } catch (error: any) {
    console.error('transferGFIItem', error.message);
  }
};

transferGFIItem('tan3006', 'tan_01', '0x102c4a21');
