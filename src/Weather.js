import React from "react";
import "./Weather.css";
export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-6">
            <input
              type="search"
              className="form-control"
              placeholder="Enter a city..."
            />
          </div>
          <div className="col-6">
            <input type="submit" value="Search" className="btn btn-primary" />
          </div>
        </div>
      </form>

      <h1>Ila Orangun</h1>
      <ul>
        <li>Thursday 09:00</li>
        <li>Partly Sunny</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="https://assets.msn.com/weathermapdata/1/static/weather/Icons/taskbar_v10/Condition_Card/MostlyCloudyDayV2.svg"
            alt="Partly Sunny"
          />
          28℃
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation:15%</li>
            <li>Humidity:72%</li>
            <li>Wind:13 km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
