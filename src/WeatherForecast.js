import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Thur</div>
          <div className="WeatherForecast-icon">
            <WeatherIcon code="clear-sky-day" size={36} />
          </div>
          <div className="WeatherForecast-temperatures">
            <span className="weatherForecast-temperature-max">19º</span>
            <span className="weatherForecast-temperature-min">10º</span>
          </div>
        </div>
      </div>
    </div>
  );
}
