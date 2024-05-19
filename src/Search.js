import React, { useEffect, useState, useMemo } from "react";
import axios from "axios";

import "./Search.css";
import CurrentWeather from "./CurrentWeather";
import WeatherForecast from "./WeatherForecast";

export default function Search() {
  const [cityToSearch, setCityToSearch] = useState("Kiev");
  const [response, setResponse] = useState(null);
  const [city, setCity] = useState("Kiev");
  const [reorderedWeekdays, setReorderedWeekdays] = useState(null);
  const [formattedDay, setFormattedDay] = useState("");
  const [cityToShow, setCityToShow] = useState("Kiev");
  const apiKey = "820385at7d928f3622bfd9b464oa0468";

  const weekdays = useMemo(
    () => [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    []
  );

  useEffect(() => {
    let date = new Date();
    let currentDayIndex = date.getDay();
    let reorderWeekdays = [
      ...weekdays.slice(currentDayIndex + 1),
      ...weekdays.slice(0, currentDayIndex),
    ];
    setReorderedWeekdays(reorderWeekdays);
    setFormattedDay(weekdays[currentDayIndex]);
  }, [weekdays]);

  useEffect(() => {
    if (cityToSearch) {
      async function fetchData() {
        const url = `https://api.shecodes.io/weather/v1/current?query=${cityToSearch}&key=${apiKey}&units=metric`;
        try {
          const result = await axios.get(url);
          setResponse(result);
          setCityToShow(result.data.city);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
      fetchData();
    }
  }, [cityToSearch]);

  function submitHandler(event) {
    event.preventDefault();
    setCityToSearch(city);
  }

  function inputChangeCity(event) {
    event.preventDefault();
    setCity(event.target.value);
  }
  if (!response) {
    console.log("Boot rendering");
    return "Loading data...";
  } else {
    console.log("Re-rendering");
    return (
      <div className="Search">
        <form id="search-form" className="search-form" onSubmit={submitHandler}>
          <input
            type="search"
            placeholder="Enter a city.."
            required
            className="search-input"
            id="search-input"
            onChange={inputChangeCity}
          />
          <input type="submit" value="Search" className="search-button" />
        </form>
        <CurrentWeather
          response={response}
          day={formattedDay}
          city={cityToShow}
        />
        <WeatherForecast city={cityToSearch} weekDays={reorderedWeekdays} />
      </div>
    );
  }
}
