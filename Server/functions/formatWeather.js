const { getForecastArray } = require("./extractForecast");

const getCurrentFromWeather = (weatherForecastObj) => {
  const { last_updated, temp_c, condition, wind_kph, precip_mm, humidity } =
    weatherForecastObj.current;
  return {
    last_updated,
    temp_c,
    condition: condition.text,
    wind_kph,
    precip_mm,
    humidity,
  };
};

const getFormattedForecast = (weatherForecastObj) => {
  const { location } = weatherForecastObj;
  const ForecastArr = getForecastArray(weatherForecastObj);
  const newLocation = {
    name: location.name,
    country: location.country,
    lat: location.lat,
    lon: location.lon,
    localtime: location.localtime,
  };
  const newCurrent = getCurrentFromWeather(weatherForecastObj);

  return { location: newLocation, current: newCurrent, forecast: ForecastArr };
};

module.exports = { getFormattedForecast };
