import axios, { type AxiosInstance } from 'axios';

const baseDomain = 'http://localhost:1003';
const baseURL = `${baseDomain}/api`;

const axiosInstance: AxiosInstance = axios.create({
  baseURL
});

export default axiosInstance;
