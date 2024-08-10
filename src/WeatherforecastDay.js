import React from "react";
import WeatherIcon from "./WeatherIcon";
export default function WeatherforecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temperature.maximum);
    return `${temperature}º`;
  }
  function minTemperature() {
    let temperature = Math.round(props.data.temperature.minimum);
    return `${temperature}º`;
  }
  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }
  return (
    <div>
      <div className="WeatherForecast-day">{day()}</div>
      <div className="WeatherForecast-icon">
        <WeatherIcon code={props.data.condition.icon} size={36} />
      </div>
      <div className="WeatherForecast-temperatures">
        <span className="weatherForecast-temperature-max">
          {maxTemperature()}
        </span>
        <span className="weatherForecast-temperature-min">
          {minTemperature()}
        </span>
      </div>
    </div>
  );
}
