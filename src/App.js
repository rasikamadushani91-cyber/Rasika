import React, { useState } from "react";
import WeatherCard from "./components/WeatherCard";
import "./App.css";

function App() {

  const [weather] = useState([
    { city: "Colombo", temp: 30, condition: "Sunny ☀️" },
    { city: "Galle", temp: 28, condition: "Cloudy ☁️" },
    { city: "Kandy", temp: 24, condition: "Rainy 🌧️" }
  ]);

  return (
    <div className="container">
      <h1>Weather App</h1>

      <div className="box">

        {weather.map((item, index) => (
          <WeatherCard
            key={index}
            city={item.city}
            temp={item.temp}
            condition={item.condition}
          />
        ))}

      </div>

    </div>
  );
}

export default App;
