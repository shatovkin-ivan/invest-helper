import axios, { AxiosInstance } from 'axios';

const baseDomain = `https://test.com`;
const baseURL = `${baseDomain}/api`;

const axiosInstance: AxiosInstance = axios.create({
  baseURL
});

export default axiosInstance;
