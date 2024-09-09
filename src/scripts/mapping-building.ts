import fs from 'fs';
import path from 'path';
import buildingNames from '../json/building/new-building-mapping.json';
import buildingWithBase from '../json/building/new-building-with-base.json';

const buildingMapping = buildingWithBase
  .map((building) => {
    const buildingId = buildingNames.find(
      (buildingName) => buildingName.displayname === building.displayname,
    )?.tokenId;
    if (!buildingId) {
      throw new Error(`Building not found: ${building.displayname}`);
    }
    return {
      [buildingId]: building.baseName,
    };
  })
  .reduce(
    (acc, curr) => ({
      ...acc,
      ...curr,
    }),
    {},
  );

fs.writeFileSync(
  path.join(__dirname, '../json/building/new-building-mapping-base.json'),
  JSON.stringify(buildingMapping, null, 2),
);
