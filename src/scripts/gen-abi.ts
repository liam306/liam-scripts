import fs from 'fs';
import path from 'path';
import gfBridgeSubnetAbi from '../abi/typescript/gf-bridge-subnet';
import gfBridgeERC20Abi from '../abi/typescript/gf-bridge-erc20';

fs.writeFileSync(
  path.resolve(__dirname, '../abi/bridge/subnet-bridge.json'),
  JSON.stringify(gfBridgeSubnetAbi, null, 2),
);

fs.writeFileSync(
  path.resolve(__dirname, '../abi/bridge/erc20-bridge.json'),
  JSON.stringify(gfBridgeERC20Abi, null, 2),
);
