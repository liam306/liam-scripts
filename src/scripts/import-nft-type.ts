// import fs from 'fs';
// import path from 'path';
import items from '../json/items.json';
import {
  bulkDeleteNft,
  createNft,
  getNfts,
  type NFTType,
} from '../utils/admin-nft-type';

const buildingPrice: Record<string, number> = {
  '121410': 750,
  '161110': 1500,
  '161111': 3500,
  '161113': 2500,
  '171010': 2000,
  '171110': 1500,
  '171211': 900,
  '181010': 50000,
  '181210': 15000,
  '181310': 25000,
  '181410': 15000,
  '181510': 25000,
  '181610': 40000,
  '181710': 15000,
  '181810': 25000,
  '181910': 10000,
  '182010': 25000,
  '182110': 30000,
  '182210': 30000,
  '182310': 20000,
  '182410': 7000,
  '182810': 15000,
  '182910': 10000,
  '183010': 30000,
  '183210': 3000000,
  '191010': 5000,
  '191011': 7500,
  '191410': 100000,
  '201010': 1500,
  '201110': 3000,
  '201210': 4500,
  '201310': 50000,
};

const regexLevel = /var(\d+)/;

const buildingItemId = [
  '181010',
  '181011',
  '181110',
  '181111',
  '181210',
  '181211',
  '181212',
  '181310',
  '181311',
  '181312',
  '181410',
  '181411',
  '181412',
  '181510',
  '181511',
  '181512',
  '181610',
  '181611',
  '181612',
  '181710',
  '181711',
  '181712',
  '181713',
  '181714',
  '181810',
  '181811',
  '181812',
  '181910',
  '181911',
  '181912',
  '182010',
  '182011',
  '182110',
  '182111',
  '182112',
  '182210',
  '182211',
  '182212',
  '182310',
  '182311',
  '182312',
  '182410',
  '182411',
  '182412',
  '182413',
  '182414',
  '182610',
  '182611',
  '182612',
  '182811',
  '182910',
  '182911',
  '182912',
  '183010',
  '183011',
  '183012',
  '183210',
  '183211',
  '183212',
  '183213',
];

const getListItemNFT = () => {
  return buildingItemId.map<NFTType>((item: string) => {
    const devName = (items as Record<string, any>)[item]['General_Information'][
      'DevName'
    ];
    const level = Number(devName.match(regexLevel)?.[1] ?? '1');
    const julPrice =
      buildingPrice[(Number(item) - (level - 1)).toString()] ?? 0;
    return {
      typeId: item,
      name: devName,
      level,
      nglPrice: 0,
      julPrice,
      description: '',
      categoryId: '18',
      isPurchasable: Boolean(julPrice),
    };
  });
};

const importBuildingNFTData = async () => {
  const listItemNFT = getListItemNFT();
  const { results } = await getNfts(
    {
      [`_where[0][typeId_gte]`]: buildingItemId[0],
      [`_where[1][typeId_lte]`]: buildingItemId[buildingItemId.length - 1],
    },
    {
      page: 1,
      pageSize: buildingItemId.length,
    },
  );
  const existedId = results?.map((item: any) => item.typeId as string) ?? [];
  console.log(`Found ${existedId.length} existed NFTs:`, existedId);
  await bulkDeleteNft(existedId);

  for (const item of listItemNFT) {
    await createNft(item);
    console.log(`Created NFT ${item.typeId} successfully`);
  }
};

importBuildingNFTData();

// fs.writeFileSync(
//   path.join(__dirname, '../json/building/nft-items.json'),
//   JSON.stringify(getListItemNFT(), null, 2),
// );
