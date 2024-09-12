import LandInfo from '$json/building/land-info.json';
import fs from 'fs';
import path from 'path';

const landNames = Object.values(LandInfo).map(
  (land) => land['General_Information']['Name'],
);

const landNameEnum = landNames
  .map((name) => `"${name.split(' ').join('_').toUpperCase()}" = "${name}",`)
  .join('\n');

fs.writeFileSync(
  path.join(__dirname, '../../enum/building/land-name.ts'),
  `export enum ELandName {${landNameEnum}}`,
);
