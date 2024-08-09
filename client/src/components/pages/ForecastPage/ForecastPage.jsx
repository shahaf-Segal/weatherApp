import axios from "axios";
import { useState } from "react";
import { SERVER_URL } from "../../../Constant/serverUrl";
import SearchForecast from "../../SearchForecast/SearchForecast";
import styles from "./ForecastPage.module.css";

function ForecastPage() {
  const [forecastData, setForecastData] = useState();

  const fetchForecastData = async (searchQuery) => {
    setForecastData();
    try {
      const forecastResp = await axios.get(`${SERVER_URL}${searchQuery}`);
      console.log(forecastResp.data);
      setForecastData(forecastResp.data);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className={styles["forecast-container"]}>
      <SearchForecast
        searchFunc={fetchForecastData}
        locationData={forecastData?.location}
      ></SearchForecast>
    </div>
  );
}

export default ForecastPage;
