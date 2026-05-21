import React from "react";

function WeatherCard(props) {
  return (
    <div className="card">
      <h2>{props.city}</h2>
      <h1>{props.temp}°C</h1>
      <p>{props.condition}</p>
    </div>
  );
}

export default WeatherCard;