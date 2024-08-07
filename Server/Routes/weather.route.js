const { Router } = require("express");
const { getWeather } = require("../Controllers/weather.controller");
const router = Router();
router.get("/:city", getWeather);

module.exports = router;
