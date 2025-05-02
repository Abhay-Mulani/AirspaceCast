import React from 'react';

const ForecastCard = ({ forecast, unit }) => {
  const temp = unit === "C" ? forecast.main.temp : (forecast.main.temp * 9/5 + 32).toFixed(1);
  const date = new Date(forecast.dt_txt).toLocaleString();

  return (
    <div className="forecast-card">
      <p>{date}</p>
      <img src={`https://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`} alt="icon" />
      <h3>{temp}°{unit}</h3>
      <p>{forecast.weather[0].description}</p>
    </div>
  );
};

export default ForecastCard;
