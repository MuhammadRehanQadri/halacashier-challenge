import axiosClient from '../apiClient';

function getWeatherByCity(city) {
  return axiosClient.get(`/weather?q=${city}`);
}

export default getWeatherByCity;
