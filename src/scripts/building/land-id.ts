import LandInfo from '$json/building/land-info.json';
import fs from 'fs';
import path from 'path';

const LandIdsObj: Record<string, string> = {};

Object.entries(LandInfo).forEach(([id, land]) => {
  LandIdsObj[id] = land['General_Information']['Name']
    .trim()
    .replaceAll('’', "'")
    .replaceAll(' ', '_')
    .toUpperCase();
});

const LandIdsObjStr = Object.entries(LandIdsObj)
  .map(([id, name]) => {
    return `"${id}": ELandName["${name}"],`;
  })
  .join('\n');

console.log(LandIdsObj);

fs.writeFileSync(
  path.join(__dirname, '../../constants/building/land-id.ts'),
  `import { ELandName } from '../../enum/land-name';
  export const LandIds = { ${LandIdsObjStr} }`,
);
