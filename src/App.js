import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather App</h1>
        <Weather />

        <footer>
          {" "}
          This project is coded by
          <a href="(#)"> Niki Farkas </a> and {""}
          <a href="https://github.com/NikiWolf93/weather-app-week5">
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
