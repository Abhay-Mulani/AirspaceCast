import React from 'react';

const WeatherCard = ({ weather, unit, onToggleUnit }) => {
  if (!weather) return null;

  const temp = unit === "C" ? weather.main.temp : (weather.main.temp * 9/5 + 32).toFixed(1);

  return (
    <div className="weather-card">
      <h2>{weather.name}</h2>
      <p>{weather.weather[0].description}</p>
      <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="weather icon" />
      <h1>{temp}°{unit}</h1>
      <button onClick={onToggleUnit}>Switch to °{unit === "C" ? "F" : "C"}</button>
    </div>
  );
};

export default WeatherCard;
