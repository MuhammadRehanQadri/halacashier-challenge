import React from 'react';
import WeatherInfoIcons from '../../Icons/weatherinfoicons';
import './weather-details.css';
import ToggleCelsiusFahrenheit from '../ToggleCelsiusFahrenheit';
import InfoSection from '../InfoSection';
import { formatWeatherData } from '../../common/utils';

function WeatherDetails({ weather }) {
  const { location, tempInfoSections } = formatWeatherData(weather);
  return (
    <>
      <ToggleCelsiusFahrenheit weather={weather} />

      <span className="location">{location}</span>
      <span className="weather-info-label">Weather Info</span>
      <div className="weather-info-container">

        {tempInfoSections.map(({ icon, label, value }) => (
          <InfoSection key={value} label={label} icon={WeatherInfoIcons[icon]} value={value} />
        ))}

      </div>
    </>
  );
}

export default WeatherDetails;
