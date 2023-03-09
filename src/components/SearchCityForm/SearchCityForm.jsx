import React from 'react';

function SearchCityForm({ fetchWeather, setCity }) {
  return (
    <form className="search-box" onSubmit={fetchWeather}>
      <input
        className="search-box__input"
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter Index Name"
      />
      <button className="search-box__button" type="submit">
        Submit
      </button>
    </form>
  );
}

export default SearchCityForm;
