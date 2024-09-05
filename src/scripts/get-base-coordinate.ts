import fs from 'fs';
import path from 'path';
import LandInfo from '../json/building/land-info.json';

const baseCoordinate = {} as Record<string, string>;

Object.values(LandInfo).forEach((curr) => {
  const Tiledata = curr['Zone Information']['Tiledata'];
  Object.entries(Tiledata).forEach(
    ([coor, detail]: [
      string,
      { SettlementType?: string; SettelementName?: string },
    ]) => {
      if (detail?.['SettlementType'] && detail['SettelementName']) {
        baseCoordinate[detail['SettelementName']] = coor;
      }
    },
  );
});

fs.writeFileSync(
  path.join(__dirname, '../json/building/base-coordinate.json'),
  JSON.stringify(baseCoordinate, null, 2),
);
