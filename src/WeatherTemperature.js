import React, { useState } from "react";
import "./Weather.css";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");
  function showToFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function showToCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === `celsius`) {
    return (
      <div className="TempUnit">
        <span className="Temperature">
          {Math.round(props.celsius)}
          <small className="Size">°C</small>
        </span>
      </div>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;
    return (
      <div>
        <span className="Temperature">{Math.round(fahrenheit)}</span>
        <span className="unit">
          <a href="/" onClick={showToCelsius}>
            {" "}
            °C
          </a>{" "}
          |{" "}
          <a href="/" onClick={showToFahrenheit}>
            °F
          </a>
        </span>
      </div>
    );
  }
}
