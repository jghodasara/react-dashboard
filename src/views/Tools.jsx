import React from "react";
import Calculator from "../components/calculator/Calculator";
import Weather from "../components/weather/Weather";
import "../assets/css/Tools.css";

function Tools() {
  return (
    <div className="content">
      <div className="img-wrapper-tools">
        <div>
          <Weather />
        </div>
        <div>
          <Calculator />
        </div>
      </div>
    </div>
  );
}
export default Tools;
