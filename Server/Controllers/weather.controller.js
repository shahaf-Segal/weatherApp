const axios = require("axios");
const { isNameValid } = require("../functions/nameValidation");
const { config } = require("../config");
const { getForecastArray } = require("../functions/extractForecast");
const weatherApiUrl = "https://api.weatherapi.com/v1/forecast.json";

const getWeather = async (req, res) => {
  try {
    const { city } = req.params;
    if (!isNameValid(city)) {
      return res.status(400).send("Error: invalid request");
    }

    const weatherResp = await axios.get(
      `${weatherApiUrl}?q=${city}&key=${config.WEATHER_API_KEY}&days=2`
    );

    return res.send(weatherResp.data);
  } catch (error) {
    console.error(error);
    res.status(400).send("Error");
  }
};

module.exports = { getWeather };
