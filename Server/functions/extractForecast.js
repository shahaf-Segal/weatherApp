function getCurrentAndNextFourHours() {
  const now = new Date();

  // Round down to the nearest hour
  now.setMinutes(0, 0, 0);

  // Helper function to format the date and time
  function formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const hours = String(date.getHours()).padStart(2, "0");
    return `${year}-${month}-${day} ${hours}:00`;
  }

  const hoursArray = [];
  for (let i = 0; i < 5; i++) {
    const formattedDate = formatDate(
      new Date(now.getTime() + i * 60 * 60 * 1000)
    );
    hoursArray.push(formattedDate);
  }

  return hoursArray;
}
function findMatchingTimes(forecastObjectArray, timeArray) {
  return timeArray.map((time) => {
    return forecastObjectArray.find((obj) => obj.time === time);
  });
}

const getForecastArray = (weatherObj) => {
  let forecastHours = [];
  weatherObj.forecast.forecastday.forEach(({ hour }) => {
    forecastHours = [...forecastHours, ...hour];
  });
  const forecastHoursFormatted = forecastHours.map(({ time, temp_c }) => {
    return { time, temp_c };
  });
  return findMatchingTimes(
    forecastHoursFormatted,
    getCurrentAndNextFourHours()
  );
};

module.exports = { getForecastArray };
