import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.25.218:3000'
});

export default api;