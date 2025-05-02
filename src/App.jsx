import React, { useEffect, useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import ForecastCard from "./components/ForecastCard";
import {
  fetchWeatherByCity,
  fetchForecastByCity,
  fetchWeatherByCoords,
} from "./api/weather";

function App() {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [unit, setUnit] = useState("C");
  const [error, setError] = useState(null);
  const [theme, setTheme] = useState("light");

  const handleSearch = async (city) => {
    try {
      setError(null);
      const data = await fetchWeatherByCity(city);
      const forecastData = await fetchForecastByCity(city);
      setWeather(data);
      setForecast(forecastData.list.slice(0, 5));
    } catch (err) {
      console.error(err);
      setError("City not found!");
    }
  };

  const getCurrentLocationWeather = () => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const { latitude, longitude } = position.coords;
      const data = await fetchWeatherByCoords(latitude, longitude);
      const forecastData = await fetchForecastByCity(data.name);
      setWeather(data);
      setForecast(forecastData.list.slice(0, 5));
    });
  };

  useEffect(() => {
    getCurrentLocationWeather();
  }, []);

  const toggleUnit = () => {
    setUnit((prev) => (prev === "C" ? "F" : "C"));
  };

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <div className={`app ${theme}`}>
      <button className="toggle-btn" onClick={toggleTheme}>
        {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
      </button>

      <div className="content-container">
        <SearchBar onSearch={handleSearch} />

        {error && <p className="error">{error}</p>}

        <WeatherCard weather={weather} unit={unit} onToggleUnit={toggleUnit} />



        <div className="forecast-container">
          {forecast.map((f, i) => (
            <ForecastCard key={i} forecast={f} unit={unit} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
