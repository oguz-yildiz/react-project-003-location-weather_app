import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { usePosition } from "use-position";
import Weather from "./components/Weather";

function App() {
  const [weather, setWeather] = useState();
  const { latitude, longitude } = usePosition();
  const getWeatherData = async (lat, lon) => {
    const key = "a58d145c61f02afb13dc1a78a319164d";

    try {
      const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`
      );
      setWeather(data);
    } catch {
      alert("ERROR OCCURRED WHILE RECEIVING DATA");
    }
  };

  useEffect(() => {
    latitude && longitude && getWeatherData(latitude, longitude);
  }, [latitude, longitude]);

  console.log(weather);
  return (
    <div className="App">
      <h1>weather forecast</h1>
      <Weather weather={weather} />
    </div>
  );
}

export default App;
