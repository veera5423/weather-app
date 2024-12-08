import { useState } from "react";
import "./styles/searchPage.css";

const SearchPage = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isCelsius, setIsCelsius] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
    document.body.classList.toggle("dark", !isDarkMode);
  };

  const fetchWeather = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=f1b3bd854a554258bf683054240212&q=${city}&days=3`
      );
      if (!response.ok) {
        throw new Error("City not found or API issue");
      }

      const data = await response.json();
      setWeather(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const toggleTemperatureUnit = () => {
    setIsCelsius((prevUnit) => !prevUnit);
  };

  return (
    <div className="search-page">
      <div className="panel1">
        <h1>Weather App</h1>
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city"
        />
        <button onClick={fetchWeather}>Search</button>
        <br />
        <button onClick={toggleDarkMode}>
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>

      {loading && <div className="loader"></div>}
      {error && <div className="error">{error}</div>}

      <div>
        {weather && (
          <div className="panel2 weather-card">
            <h2>{weather.location.name}</h2>
            <p>{weather.current.temp_c}°C</p>
            <p>{weather.current.condition.text}</p>
            <img
              src={weather.current.condition.icon}
              alt="Weather icon"
              className="weather-icon"
            />
            <br />
            <button onClick={toggleTemperatureUnit}>
              Switch to {isCelsius ? "Fahrenheit" : "Celsius"}
            </button>

            <h3>3-Day Forecast</h3>
            <div style={{ display: "flex", gap: "40px", justifyContent: "center" }}>
              {weather.forecast.forecastday.map((day) => (
                <div key={day.date} className="forecast-day">
                  <h4>{day.date}</h4>
                  <img src={day.day.condition.icon} alt="Day weather icon" />
                  <p>
                    Max:{" "}
                    {isCelsius
                      ? `${day.day.maxtemp_c}°C`
                      : `${day.day.maxtemp_f}°F`}
                  </p>
                  <p>
                    Min:{" "}
                    {isCelsius
                      ? `${day.day.mintemp_c}°C`
                      : `${day.day.mintemp_f}°F`}
                  </p>
                  <p>{day.day.condition.text}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchPage;
