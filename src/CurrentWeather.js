import React, { useState, useEffect } from "react";

import "./CurrentWeather.css";
import AnimatedIcon from "./AnimatedIcon";

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
        <div className="current-temperature">
          <span id="icon">
            <AnimatedIcon icon={props.response.data.condition.icon} size="80" />
          </span>
          <span className="current-temperature-value" id="current-temperature">
            {Math.round(props.response.data.temperature.current)}
          </span>
          <span className="current-temperature-unit">°C</span>
        </div>
      </div>
      <div className="weather-forecast" id="forecast"></div>
    </div>
  );
}
