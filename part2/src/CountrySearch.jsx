import { useState, useEffect } from "react";
import axios from "axios";

const COUNTRY_ENDPOINT = "https://restcountries.com/v3.1/all";
const WEATHER_ENDPOINT = "https://weatherdbi.herokuapp.com/data/weather";

const Country = ({ countryObj, showDetail }) => {
  const [expanded, setExpanded] = useState(false);
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    axios
      .get(`${WEATHER_ENDPOINT}/${countryObj.capital[0].toLowerCase()}`)
      .then((response) => setWeather(response.data));
  }, [countryObj.capital]);

  return expanded || showDetail ? (
    <div>
      <h2>{countryObj.name.common}</h2>
      <div style={{ fontSize: 100 }}>{countryObj.flag}</div>
      <p>Capital - {countryObj.capital[0]}</p>
      <p>Area - {countryObj.area}</p>
      <h4>Languages</h4>
      <ul>
        {Object.values(countryObj.languages).map((lang) => (
          <li key={lang}>{lang}</li>
        ))}
      </ul>
      <h4>Weather in {countryObj.capital[0]}</h4>
      {weather && (
        <>
          <img src={weather.currentConditions.iconURL} alt="weather-icon" />
          <p>Temperature - {weather.currentConditions.temp.c} Celcius</p>
          <p>Wind - {weather.currentConditions.wind.km} km/hr</p>
        </>
      )}
    </div>
  ) : (
    <p>
      <button style={{ marginRight: 15 }} onClick={() => setExpanded(true)}>
        Show
      </button>
      <span>{countryObj.name.common}</span>
    </p>
  );
};

const CountrySearch = () => {
  const [countries, setCountries] = useState([]);
  const [countryQuery, setCountryQuery] = useState("");

  useEffect(() => {
    axios.get(COUNTRY_ENDPOINT).then((response) => setCountries(response.data));
  }, []);

  const nameFilter = (countryObj) =>
    countryObj.name.common.toLowerCase().includes(countryQuery.toLowerCase());

  return (
    <div>
      <h2>Find Countries</h2>
      <input
        value={countryQuery}
        onChange={(e) => setCountryQuery(e.target.value)}
      />
      {countries.filter(nameFilter).length === 1 ? (
        countries
          .filter(nameFilter)
          .map((c) => <Country countryObj={c} key={c.name.common} showDetail />)
      ) : countries.filter(nameFilter).length < 10 ? (
        countries
          .filter(nameFilter)
          .map((c) => <Country countryObj={c} key={c.name.common} />)
      ) : (
        <p>Too many matches, specify another filter</p>
      )}
    </div>
  );
};

export default CountrySearch;
