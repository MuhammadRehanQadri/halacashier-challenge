const ICON_PATHS = {
  sunny: '../Icons/sunny.svg',
  night: '../Icons/night.svg',
  day: '../Icons/day.svg',
  cloudyNight: '../Icons/cloudy-night.svg',
  cloudy: '../Icons/cloudy.svg',
  perfectDay: '../Icons/perfect-day.svg',
  rain: '../Icons/rain.svg',
  rainNight: '../Icons/rain-night.svg',
  storm: '../Icons/storm.svg',
};

export const WeatherIcons = {
  '01d': ICON_PATHS.sunny,
  '01n': ICON_PATHS.night,
  '02d': ICON_PATHS.day,
  '02n': ICON_PATHS.cloudyNight,
  '03d': ICON_PATHS.cloudy,
  '03n': ICON_PATHS.cloudy,
  '04d': ICON_PATHS.perfectDay,
  '04n': ICON_PATHS.cloudyNight,
  '09d': ICON_PATHS.rain,
  '09n': ICON_PATHS.rainNight,
  '10d': ICON_PATHS.rain,
  '10n': ICON_PATHS.rainNight,
  '11d': ICON_PATHS.storm,
  '11n': ICON_PATHS.storm,
};

export default WeatherIcons;
