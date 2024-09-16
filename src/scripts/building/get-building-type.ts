import NFTType from '$json/building/nft-items.json';
import fs from 'fs';
import path from 'path';

const nftTypes = NFTType.reduce(
  (acc, nft) => {
    const typeName = nft['name'].split('_')[0];
    if (!acc[typeName]) {
      acc[typeName] = [];
    }
    acc[typeName].push(nft['typeId']);
    return acc;
  },
  {} as Record<string, string[]>,
);

fs.writeFileSync(
  path.join(__dirname, '../../json/building/building-type.json'),
  JSON.stringify(nftTypes, null, 2),
);
