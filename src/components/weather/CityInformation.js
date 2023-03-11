import React from "react";
import PerfectDay from '../../assets/img/perfect-day.svg'
import './CityInformation.css'

const CityInformation = (props) => {
  const { updateCity, fetchWeather } = props;
  return (
    <>
      <img
        className="welcomeLogo"
        src={PerfectDay}
	alt={"Logo"}
      />
      <span className="cityLabel">Find Weather of your city</span>
      <form className="searchBox">
        <input
          className="cityInput"
          onChange={(e) => updateCity(e.target.value)}
          placeholder="City"
        />
        <button className="buttonSearch" onClick={fetchWeather}>
          Search
        </button>
      </form>
    </>
  );
};
export default CityInformation;
