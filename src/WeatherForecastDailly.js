import React from "react";

import "./WeatherForecastDaily.css";
import AnimatedIcon from "./AnimatedIcon";

export default function WeatherForecastDaily(props) {
  return (
    <div className="WeatherForecastDaily">
      <div className="day">{props.day.substring(0, 3)}</div>
      <div className="image">
        <AnimatedIcon icon={props.forecast.condition.icon} size="40" />
      </div>
      <div className="temperature">
        {Math.round(props.forecast.temperature.day)}
      </div>
    </div>
  );
}
