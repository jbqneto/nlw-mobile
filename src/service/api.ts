import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.25.236:3000'
});

export default api;