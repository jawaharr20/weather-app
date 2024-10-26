import { useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import Currrent from "./Components/Currrent";
import Forecast from "./Components/Forecast";
import Time from "./Components/Time";
import Toggle from "./Components/Toggle"; // Import the Toggle component
import '../node_modules/bootstrap/dist/js/bootstrap';

function App() {
  const [City, setCity] = useState("");
  const [citySuggestion, setcitySuggestion] = useState([]);
  const [current, setCurrent] = useState();
  const [location, setLocation] = useState();
  const [forecast, setForecast] = useState();
  const [isDarkMode, setIsDarkMode] = useState(false);  // State for dark mode

  const autoCompleteUrl = "https://api.weatherapi.com/v1/search.json?key=784c4e30737141e69ec134748241810&q=";

  const weatherurl = (City) => `https://api.weatherapi.com/v1/forecast.json?key=784c4e30737141e69ec134748241810&q=${City}&days=3&aqi=yes&alerts=no`;

  useEffect(() => {
    if (City && City.length > 2) {
      fetchAutoComplete();
    }
  }, [City]);

  const fetchAutoComplete = async () => {
    try {
      const response = await axios.get(autoCompleteUrl + City);
      const resp = response.data;
      const cityData = resp.map((data) => {
        return `${data.name}, ${data.region}, ${data.country}`;
      });
      setcitySuggestion(cityData);
    } catch (e) {
      console.log("Error occurred during API call:", e);
    }
  };

  const handleselectedcity = (city) => {
    setCity(city);  // Update the selected city using setCity
    featchweatherapi(city);
    setcitySuggestion([]);
  };

  const featchweatherapi = async (City) => {
    try {
      const response = await axios.get(weatherurl(City));
      const resp = response.data;
      setCurrent(resp.current);
      setLocation(resp.location);
      setForecast(resp.forecast);
      console.log(resp.forecast);
    } catch (e) {
      console.log("weather api error", e);
    }
  };

  // Clear input and reset state
  const handleClear = () => {
    setCity("");
    setCurrent(null);
    setForecast(null);
    setLocation(null);
    setcitySuggestion([]);
  };

  // Toggle dark mode
  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const containerStyle = {
    fontFamily: "'Poppins', sans-serif",
    maxWidth: "1000px",
    margin: "auto",
    marginTop: "50px",
    backgroundColor: isDarkMode ? "#333" : "#f8f9fa",
    color: isDarkMode ? "#fff" : "#000",
    padding: "30px",
    borderRadius: "15px",
    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
    transition: "background-color 0.3s, color 0.3s",
  };

  const headerStyle = {
    fontSize: "3rem",
    textShadow: isDarkMode ? "2px 2px 4px rgba(255, 255, 255, 0.3)" : "2px 2px 4px rgba(0, 0, 0, 0.3)",
  };

  const inputStyle = {
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    padding: "12px",
    fontSize: "1.2rem",
    borderRadius: "8px",
    backgroundColor: isDarkMode ? "#555" : "#fff",
    color: isDarkMode ? "#fff" : "#000",
    border: "none",
    transition: "background-color 0.3s, color 0.3s",
  };

  const suggestionStyle = {
    backgroundColor: isDarkMode ? "#444" : "#f8f9fa",
    color: isDarkMode ? "#fff" : "#000",
    borderRadius: "8px",
    padding: "10px",
    marginTop: "10px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    cursor: "pointer",
    transition: "background-color 0.3s, color 0.3s",
  };

  return (
    <>
      <div className="container bg-gradient p-5 rounded shadow-lg" style={containerStyle}>
        <h3 className="fw-bold" style={headerStyle}> &#x1F324; Weather Finder  </h3>
        <h4 className="mt-3 d-flex justify-content-evenly align-items-center">
          <Time />
          <Toggle isDarkMode={isDarkMode} toggleMode={toggleMode} />
        </h4>

        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control rounded mt-1"
            placeholder="Enter Your City Name To check Weather" value={City} // Use City state here
            style={inputStyle}
            onChange={(e) => {
              setCity(e.target.value);
              if (e.target.value === "") {
                setCurrent();
                setForecast();
                setLocation();
              }
            }}
          />
          {City && (
            <button className="btn btn-danger ms-2" onClick={handleClear}>
              &#10005;
            </button>
          )}
        </div>

        {citySuggestion.length > 0 &&
          citySuggestion.map((data, index) => {
            return (
              <div
                key={index}
                className="text-center"
                style={suggestionStyle}
                onClick={() => handleselectedcity(data)}
              >
                {data}
              </div>
            );
          })}

        {current && <Currrent current={current} location={location} isDarkMode={isDarkMode} />}
        {forecast && <Forecast forecast={forecast} location={location} />}
      </div>
    </>
  );
}

export default App;
