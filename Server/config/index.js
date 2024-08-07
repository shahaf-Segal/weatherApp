const dotenv = require("dotenv");

dotenv.config();

const { WEATHER_API_KEY } = process.env;

const config = {
  WEATHER_API_KEY,
};

module.exports = { config };
