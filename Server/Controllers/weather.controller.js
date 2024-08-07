const { checkNameValid, isNameValid } = require("../functions/nameValidation");

const getWeather = async (req, res) => {
  try {
    const { city } = req.params;
    if (!isNameValid(city)) {
      return res.status(400).send("Error: invalid request");
    }

    return res.send(city);
  } catch (error) {
    console.error(error);
    res.status(400).send("Error");
  }
};

module.exports = { getWeather };
