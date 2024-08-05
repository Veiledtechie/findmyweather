import React from "react";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import Date from "./Date";
export default function Weatherinfo(props) {
  return (
    <div>
      <h1>
        <span>{props.data.city}</span>,<span>{props.data.country}</span>
      </h1>
      <ul>
        <li>
          <Date date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6 ">
          <div className="flex">
            <div className="float-left">
              <WeatherIcon code={props.data.icon} size={52} />
            </div>
            <div className="float-left">
              <WeatherTemperature celcius={props.data.temperature} />
            </div>
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
