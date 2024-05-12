import React from "react";

import "./CurrentWeather.css";
import CurrentTemperature from "./CurrentTemperature";

export default function CurrentWeather(props) {
  function formatDate() {
    let minutes = props.date.getMinutes();
    let hours = props.date.getHours();
    let day = props.day;
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
    if (hours < 10) {
      hours = `0${hours}`;
    }
    return `${day} ${hours}:${minutes}`;
  }

  return (
    <div className="CurrentWeather">
      <div className="current-weather">
        <div>
          <h1 className="current-city" id="current-city">
            {props.city}
          </h1>
          <p className="current-details">
            <span id="current-date">{formatDate()} </span>,
            <span id="description">
              {props.response.data.condition.description}
            </span>{" "}
            <br />
            Humidity:{" "}
            <strong id="humidity">
              {props.response.data.temperature.humidity}%
            </strong>
            , Wind:
            {<strong id="wind">{props.response.data.wind.speed}km/h</strong>}
          </p>
        </div>
        <CurrentTemperature response={props.response} />
      </div>
    </div>
  );
}
