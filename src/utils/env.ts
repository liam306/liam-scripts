import fs from 'fs';
import path from 'path';

const ENV_PATH = path.join(__dirname, '../../.env');

export const updateEnvVariable = (key: string, value: string) => {
  let envConfig = fs.readFileSync(ENV_PATH, 'utf8');
  const regex = new RegExp(`^${key}=.*`, 'm');

  if (envConfig.match(regex)) {
    envConfig = envConfig.replace(regex, `${key}=${value}`);
  } else {
    envConfig += `\n${key}=${value}\n`;
  }

  fs.writeFileSync(ENV_PATH, envConfig);
  console.log(`${key} updated to ${value}`);
};
