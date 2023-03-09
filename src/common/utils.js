export const convertToFahrenheit = (celsius) => (celsius * 9) / 5 + 32;

export const formatWeatherData = (weather) => {
  const isDay = weather?.weather[0]?.icon?.includes('d');
  const getTime = (timeStamp) => new Date(timeStamp * 1000).toLocaleTimeString();
  const temperature = `${Math.floor(weather.main.temp - 273)}`;
  const description = weather?.weather[0].description;
  const location = `${weather?.name}, ${weather?.sys?.country}`;

  const tempInfoSections = [
    { icon: isDay ? 'sunset' : 'sunrise', label: isDay ? 'Sunset' : 'Sunrise', value: getTime(weather?.sys[isDay ? 'sunset' : 'sunrise']) },
    { icon: 'humidity', label: 'Humidity', value: weather?.main?.humidity },
    { icon: 'wind', label: 'Wind', value: weather?.wind?.speed },
    { icon: 'pressure', label: 'Pressure', value: weather?.main?.pressure },
  ];

  return {
    getTime, temperature, description, location, tempInfoSections,
  };
};
