import React from 'react';
import './home.css';
import Logo from '../Logo';
import SearchCityForm from '../SearchCityForm/SearchCityForm';

function Home(props) {
  const { setCity, fetchWeather } = props;
  return (
    <>
      <Logo />
      <h1 className="choose-city-label">Discover the atmospheric conditions</h1>
      <SearchCityForm setCity={setCity} fetchWeather={fetchWeather} />
    </>
  );
}

export default Home;
