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
        baseCoordinate[detail['SettelementName'].trim()] = coor;
      }
    },
  );
});

// fs.writeFileSync(
//   path.join(__dirname, '../json/building/base-coordinate.json'),
//   JSON.stringify(baseCoordinate, null, 2),
// );

const baseCoordinateEnum = Object.entries(baseCoordinate)
  .map(
    ([key, value]) =>
      `[EBaseName["${key.split(' ').join('_').toUpperCase()}"]]: "${value}",`,
  )
  .join('\n');

fs.writeFileSync(
  path.join(__dirname, '../json/building/base-coordinate.enum.ts'),
  `export const BaseCoordinate = {${baseCoordinateEnum}}`,
);

// const baseNameEnum = Object.entries(baseCoordinate)
//   .map(
//     ([key, value]) => `"${key.split(' ').join('_').toUpperCase()}" = "${key}",`,
//   )
//   .join('\n');

// fs.writeFileSync(
//   path.join(__dirname, '../json/building/base-name.enum.ts'),
//   `export enum EBaseName {${baseNameEnum}}`,
// );
