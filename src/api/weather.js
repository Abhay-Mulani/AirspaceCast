import axios from "axios";
import { API_KEY, BASE_URL } from "../config";

export const fetchWeatherByCity = async (city) => {
  const { data } = await axios.get(`${BASE_URL}/weather?q=${city}&appid=${API_KEY}&units=metric`);
  return data;
};

export const fetchForecastByCity = async (city) => {
  const { data } = await axios.get(`${BASE_URL}/forecast?q=${city}&appid=${API_KEY}&units=metric`);
  return data;
};

export const fetchWeatherByCoords = async (lat, lon) => {
  const { data } = await axios.get(`${BASE_URL}/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`);
  return data;
};
