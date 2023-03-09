import axios from 'axios';

const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_WEATHER_API,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  params: {
    appid: process.env.REACT_APP_WEATHER_API_KEY,
  },
});

export default axiosClient;
