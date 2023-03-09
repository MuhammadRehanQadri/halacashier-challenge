import React, { useState } from 'react';
import './toggleStyle.css';
import { WeatherIcons } from '../Icons/weatherIcons';
import { convertToFahrenheit, formatWeatherData } from '../common/utils';

function ToggleCelsiusFahrenheit({ weather }) {
  const [isCelsius, setIsCelsius] = useState(true);
  const { temperature, description } = formatWeatherData(weather);
  const handleToggle = () => {
    setIsCelsius(!isCelsius);
  };

  return (
    <>
      <div className="bg-color">
        <div className="switch-button">
          <input className="switch-button-checkbox" onClick={handleToggle} type="checkbox" />
          <label className="switch-button-label">
            <span className="switch-button-label-span">°C</span>
          </label>
        </div>
      </div>

      <div className="weather-container">
        <div className="condition">
          <span>
            {isCelsius
              ? `${temperature}°C`
              : `${convertToFahrenheit(temperature)}°F`}
          </span>
          {`  |  ${description}`}
        </div>
        <img
          src={WeatherIcons[weather?.weather[0]?.icon]}
          alt={description}
          className="weather-icon"
        />
      </div>
    </>
  );
}

export default ToggleCelsiusFahrenheit;
