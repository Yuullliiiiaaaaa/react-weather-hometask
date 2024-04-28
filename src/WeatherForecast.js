import React, { useState, useEffect } from "react";
import axios from "axios";
import WeatherForecastDaily from "./WeatherForecastDailly";

import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  const apiKey = "820385at7d928f3622bfd9b464oa0468";
  const [response, setResponse] = useState(null);

  useEffect(() => {
    if (props.city) {
      const fetchData = async () => {
        const url = `https://api.shecodes.io/weather/v1/forecast?query=${props.city}&key=${apiKey}&units=metric`;
        try {
          const result = await axios.get(url);
          setResponse(result.data);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
      fetchData();
    } else {
      console.error("No city provided");
    }
  }, [props.city]);

  return (
    <div className="WeatherForecast">
      {response &&
        response.daily
          .slice(0, 5)
          .map((forecast, index) => (
            <WeatherForecastDaily
              key={index}
              forecast={forecast}
              day={props.weekDays[index]}
            />
          ))}
    </div>
  );
}
