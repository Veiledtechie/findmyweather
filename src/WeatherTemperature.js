import React from "react";

export default function WeatherTemperature(props) {
  return (
    <div>
      <span className="temperature">{Math.round(props.celcius)}</span>
      <span className="unit">℃</span>
    </div>
  );
}
