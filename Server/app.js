const express = require("express");
const cors = require("cors");

const WeatherRoute = require("./Routes/weather.route");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/weather", WeatherRoute);

module.exports = { app };
