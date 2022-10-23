import React, { useState } from "react";

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
      <div>
        <span className="Temperature">{Math.round(props.celsius)}</span>
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
