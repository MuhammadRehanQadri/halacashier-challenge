import React, { useState } from 'react';
import './App.css';
import Home from './components/Home';
import WeatherDetails from './components/WeatherDetails';
import getWeatherByCity from './network/lib/weather';

function App() {
  const [city, setCity] = useState();
  const [weather, setWeather] = useState();
  const fetchWeather = async (e) => {
    e.preventDefault();

    const { data } = await getWeatherByCity(city);
    setWeather(data);
  };
  return (
    <div className="container">
      <div className="app-label">
        Weather App
      </div>

      {city && weather ? (
        <WeatherDetails weather={weather} city={city} />
      ) : (
        <Home setCity={setCity} fetchWeather={fetchWeather} />
      )}
    </div>
  );
}

export default App;
