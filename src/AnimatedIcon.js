import React, { useState, useEffect } from "react";
import ReactAnimatedWeather from "react-animated-weather";

import "./AnimatedIcon.css";

export default function AnimatedIcon(props) {
  const [icon, setIcon] = useState(null);

  useEffect(() => {
    const iconMappings = {
      "clear-sky-day": "CLEAR_DAY",
      "clear-sky-night": "CLEAR_NIGHT",
      "few-clouds-day": "PARTLY_CLOUDY_DAY",
      "few-clouds-night": "PARTLY_CLOUDY_NIGHT",
      "scattered-clouds-day": "CLOUDY",
      "scattered-clouds-night": "CLOUDY",
      "broken-clouds-day": "CLOUDY",
      "broken-clouds-night": "CLOUDY",
      "shower-rain-day": "RAIN",
      "shower-rain-night": "RAIN",
      "rain-day": "SLEET",
      "rain-night": "SLEET",
      "thunderstorm-day": "RAIN",
      "thunderstorm-night": "RAIN",
      "snow-day": "SNOW",
      "snow-night": "SNOW",
      "mist-day": "FOG",
      "mist-night": "FOG",
    };

    if (props.icon in iconMappings) {
      setIcon(iconMappings[props.icon]);
    } else {
      console.warn(`Unknown icon: ${props.icon}`);
    }
  }, [props.icon]);

  return (
    <ReactAnimatedWeather size={props.size} icon={icon} color="black" animate />
  );
}
