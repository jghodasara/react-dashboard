import axios from 'axios';
import React, { useState } from "react";
import CityInformation from "./CityInformation";
import WeatherInformation from "./WeatherInformation";
import './Weather.css'

function Weather() {
  const [city, updateCity] = useState();
  const [weather, updateWeather] = useState();
  const fetchWeather = async (e) => {
    e.preventDefault();
    console.log("GET DATA")
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=fe4feefa8543e06d4f3c66d92c61b69c`
    );
    updateWeather(response.data);
  };

  return (
	<span className="container">
	<span className="title">Weather</span>
	{city && weather ? (
	  <WeatherInformation weather={weather} city={city} />
	) : (
	  <CityInformation updateCity={updateCity} fetchWeather={fetchWeather} />
	)}
      </span>
  );
}
export default Weather;
