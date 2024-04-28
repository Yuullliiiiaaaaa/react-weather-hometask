import React, { useEffect, useState, useMemo } from "react";
import axios from "axios";

import "./Search.css";
import CurrentWeather from "./CurrentWeather";
import WeatherForecast from "./WeatherForecast";

export default function Search() {
  const [cityToSearch, setCityToSearch] = useState("Kiev");
  const [counter, setCounter] = useState(0);
  const [response, setResponse] = useState("");
  const [city, setCity] = useState("Kiev");
  const [reorderedWeekdays, setReorderedWeekdays] = useState(null);
  const [formattedDay, setFormattedDay] = useState("");
  const [cityToShow, setCityToShow] = useState("Kiev");
  const apiKey = "820385at7d928f3622bfd9b464oa0468";
  const date = useMemo(() => new Date(), []);

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
    let currentDayIndex = date.getDay();
    let reorderWeekdays = [
      ...weekdays.slice(currentDayIndex + 1),
      ...weekdays.slice(0, currentDayIndex),
    ];
    setReorderedWeekdays(reorderWeekdays);
    let day = date.getDay();
    setFormattedDay(weekdays[day]);
  }, [date, weekdays]);

  function submitHandler(event) {
    setCityToSearch(city);
    const url = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    event.preventDefault();
    axios.get(url).then(getCurrentWeather);
  }

  function getCurrentWeather(response) {
    setResponse(response);
    setCityToShow(response.data.city);
  }

  function startData() {
    const url = `https://api.shecodes.io/weather/v1/current?query=${cityToSearch}&key=${apiKey}&units=metric`;
    axios.get(url).then(getCurrentWeather);
  }

  if (counter < 1) {
    startData();
    setCounter(counter + 1);
  }
  function inputChangeCity(event) {
    event.preventDefault();
    setCity(event.target.value);
    // console.log(city);
  }

  return (
    <div className="Search">
      {response && (
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
      )}
      {response && (
        <CurrentWeather
          response={response}
          day={formattedDay}
          date={date}
          city={cityToShow}
        />
      )}
      {response && (
        <WeatherForecast city={cityToSearch} weekDays={reorderedWeekdays} />
      )}
    </div>
  );
}
