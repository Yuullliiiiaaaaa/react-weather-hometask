import React, { useState, useEffect } from "react";
import AnimatedIcon from "./AnimatedIcon";

import "./CurrentTemperature.css";

export default function CurrentTemperature(props) {
  const [temperature, setTemperature] = useState(
    Math.round(props.response.data.temperature.current)
  );
  const [selectedUnit, setSelectedUnit] = useState("C");
  useEffect(() => {
    setTemperature(Math.round(props.response.data.temperature.current));
    setSelectedUnit("C");
  }, [props.response]);

  function handleUnitChange(event, unit) {
    event.preventDefault();
    setSelectedUnit(unit);
    if (unit === "C") {
      setTemperature(Math.round(props.response.data.temperature.current));
    } else if (unit === "F") {
      setTemperature(
        Math.round((props.response.data.temperature.current * 9) / 5 + 32)
      );
    }
  }

  return (
    <div className="CurrentTemperature">
      <span id="icon">
        <AnimatedIcon icon={props.response.data.condition.icon} size="80" />
      </span>
      <span className="current-temperature-value" id="current-temperature">
        {temperature}
      </span>
      <span className="current-temperature-unit">
        <a
          href="/"
          className={`value-changer ${selectedUnit === "C" ? "active" : ""}`}
          onClick={(event) => handleUnitChange(event, "C")}
        >
          {" "}
          °C
        </a>{" "}
        /
        <a
          href="/"
          className={`value-changer ${selectedUnit === "F" ? "active" : ""}`}
          onClick={(event) => handleUnitChange(event, "F")}
        >
          {" "}
          °F
        </a>{" "}
      </span>
    </div>
  );
}
