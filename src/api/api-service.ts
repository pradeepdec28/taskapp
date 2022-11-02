import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://demo.bigiron.com/api',
});

export default instance;
