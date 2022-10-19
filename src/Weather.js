import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city..."
              className="form-control m-3"
              autoFocus="on"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="search"
              className="btn btn-primary m-3 w-100 form-control"
            />
          </div>
        </div>
      </form>
      <h1>Turku</h1>

      <ul>
        <li>Wednesday 20:00</li>
        <li>Mostly cloudy</li>
      </ul>

      <div className="row mt-3">
        <div className="col-6">
          <div className="clearfix">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
              className="float-right"
              alt="mostly cloudy"
            />

            <span className="Temperature">4</span>
            <span className="unit">°C</span>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Perception 2%</li>
            <li>Humidity: 88%</li>
            <li>Wind: 2m/s</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
