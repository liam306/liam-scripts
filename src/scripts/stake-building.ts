import { ethers } from 'ethers';
import nglContractAbi from '../contracts/abi/ngl/NGL.json';
import stakingBuildingContractAbi from '../contracts/abi/stake/staking-building.json';
import type { NGL, StakingBuilding } from '../contracts/types/ethers';

(async () => {
  const rpcUrl = process.env.SUBNET_RPC;
  const provider = new ethers.JsonRpcProvider(rpcUrl);

  const adminWalletPk = process.env.ADMIN_WALLET_PRIVATE_KEY;
  const adminWallet = new ethers.Wallet(adminWalletPk!, provider);

  const stakingContractAddress = '0x29e25665157C6aef500c11D0bC3F97dcC6CAB3E1';
  const stakingBuildingContract = new ethers.Contract(
    stakingContractAddress,
    stakingBuildingContractAbi,
    adminWallet,
  ) as unknown as StakingBuilding;

  const nglContractAddress = '0xcca78771F969381401DB7f2d310067464B411B3e';
  const nglContract = new ethers.Contract(
    nglContractAddress,
    nglContractAbi,
    adminWallet,
  ) as unknown as NGL;

  // approve NGL
  const allowance = await nglContract.allowance(
    adminWallet.address,
    stakingContractAddress,
  );

  if (+ethers.formatEther(allowance) < 100000000000000) {
    const approveTx = await nglContract.approve(
      stakingContractAddress,
      ethers.MaxUint256,
    );
    approveTx.wait();
    console.log(`Approved NGL for staking at tx: ${approveTx.hash}`);
  }

  // normal staking
  const stakingTx = await stakingBuildingContract.stake(
    '355238497',
    ethers.parseEther('1'),
  );
  await stakingTx.wait();
  console.log(`Staked 1 NGL at tx: ${stakingTx.hash}`);

  // set the staking duration to 15 seconds
  // const setStakingDurationTx = await stakingBuildingContract.setStakingPeriod(
  //   15
  // );
  // await setStakingDurationTx.wait();
  // console.log(
  //   Set staking duration to 15 seconds at tx: ${setStakingDurationTx.hash}
  // );

  // staking with new package
  // const stakingTx2 = await stakingBuildingContract.stake(
  //   "321684065",
  //   ethers.parseEther("1")
  // );
  // await stakingTx2.wait();
  // console.log(`Staked 1 NGL for 15 seconds at tx: ${stakingTx2.hash}`);

  // renew staking
  // const renewTx = await stakingBuildingContract.renewStake(
  //   adminWallet.address,
  //   "321684065"
  // );
  // await renewTx.wait();
  // console.log(`Renewed staking at tx: ${renewTx.hash}`);

  // unStake
  // const unStakeTx = await stakingBuildingContract.unStake("321684065");
  // await unStakeTx.wait();
  // console.log(`Unstaked at tx: ${unStakeTx.hash}`);
})();
