const Weather = (props) => {
  const { weather } = props;
  if (!weather) {
    return <p>"loading"</p>;
  }
  return (
    <div>
      <h2>{weather.name}</h2>
      <h3>{weather.weather.map((data) => data.description)}</h3>
      <h3>{weather.main.temp} °C</h3>
      <p>{new Date(weather.dt * 1000).toLocaleDateString()}</p>
    </div>
  );
};

export default Weather;
