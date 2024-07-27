import React from "react";
import WeatherIcon from "./WeatherIcon";
export default function Weatherinfo(props) {
  return (
    <div>
      <h1>
        <span>{props.data.city}</span>,<span>{props.data.country}</span>
      </h1>
      <ul>
        <li>{props.data.date}</li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6 ">
          <div className="flex">
            <div className="float-left">
              <WeatherIcon code={props.data.icon} />
            </div>

            <span className="temperature">
              {Math.round(props.data.temperature)}
            </span>
            <span className="unit">℃</span>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity:{props.data.humidity}%</li>
            <li>Wind:{Math.round(props.data.wind)}km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
