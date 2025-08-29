import axios from 'axios';

// Antes: baseURL: process.env.REACT_APP_API_URL
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL
});

export default api;
