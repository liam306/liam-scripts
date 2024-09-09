import axios from 'axios';

const accessToken = process.env.GF_ADMIN_ACCESS_TOKEN;
const baseURL = 'https://testnet-admin.goldfever.io';

export const API = axios.create({
  baseURL,
  headers: {
    authorization: `Bearer ${accessToken}`,
  },
});
