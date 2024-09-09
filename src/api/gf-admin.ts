import axios from 'axios';

const accessToken = process.env.GF_ADMIN_ACCESS_TOKEN;
const baseURL = process.env.GF_ADMIN_BASE_URL;

export const API = axios.create({
  baseURL,
  headers: {
    authorization: `Bearer ${accessToken}`,
  },
});
