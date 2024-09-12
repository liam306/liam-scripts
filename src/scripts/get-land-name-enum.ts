import fs from 'fs';
import path from 'path';
import LandInfo from '../json/building/land-info.json';

const landNames = Object.values(LandInfo).map(
  (land) => land['General_Information']['Name'],
);

const landNameEnum = landNames
  .map((name) => `"${name.split(' ').join('_').toUpperCase()}" = "${name}",`)
  .join('\n');

fs.writeFileSync(
  path.join(__dirname, '../json/building/land-name.enum.ts'),
  `export enum ELandName {${landNameEnum}}`,
);
