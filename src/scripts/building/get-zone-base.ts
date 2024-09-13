import LandInfo from '$json/building/land-info.json';
import fs from 'fs';
import path from 'path';

type TZoneBaseInfo = Record<string, Record<string, string[]>>;

const zoneBaseInfo = {} as TZoneBaseInfo;

Object.values(LandInfo).forEach((land) => {
  const landName = land['General_Information']['Name'].toUpperCase();
  const zoneInfo = land['Zone Information']['Tiledata'] as Record<string, any>;
  Object.values(zoneInfo).forEach(
    (type: { SettlementType?: string; SettelementName?: string }) => {
      if (type.SettlementType && type.SettelementName) {
        const zoneName = type.SettelementName.trim().toUpperCase();
        const zoneType = type.SettlementType.toUpperCase();
        if (!zoneBaseInfo[zoneType]) {
          zoneBaseInfo[zoneType] = {};
        }
        if (!zoneBaseInfo[zoneType][landName]) {
          zoneBaseInfo[zoneType][landName] = [];
        }
        zoneBaseInfo[zoneType][landName].push(zoneName);
      }
    },
  );
});

// fs.writeFileSync(
//   path.join(__dirname, '../../json/building/zone-base-info.json'),
//   JSON.stringify(zoneBaseInfo, null, 2),
// );

const zoneBaseObjWithEnum = Object.entries(zoneBaseInfo).map(
  ([type, zoneInfo]) => `
  "${type}": { ${Object.entries(zoneInfo)
    .map(([zone, bases]) => {
      return `[ELandName["${zone.replaceAll(' ', '_')}"]]: [${bases
        .map((base) => {
          return `EBaseName["${base.replaceAll('’', "'").replaceAll(' ', '_')}"]`;
        })
        .join(', ')}]`;
    })
    .join(',')} }
  `,
);

fs.writeFileSync(
  path.join(__dirname, '../../enum/zone-base-info.ts'),
  `import { EBaseName } from "./base-name";
import { ELandName } from "./land-name";
export const ZoneBaseInfo = {${zoneBaseObjWithEnum}}`,
);
