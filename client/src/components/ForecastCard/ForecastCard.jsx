import ExtraInfoBar from "./ExtraInfoBar/ExtraInfoBar";
import ForecastBar from "./ForecastBar/ForecastBar";
import styles from "./ForecastCard.module.css";
import TopBar from "./TopBar/TopBar";
import WeatherStatus from "./WeatherStatus/WeatherStatus";

function ForecastCard({ forecastData }) {
  return (
    <div className={styles["forecast-card-container"]}>
      <div className={styles["forecast-card"]}>
        {forecastData ? (
          <>
            <TopBar
              city={forecastData.location.name}
              country={forecastData.location.country}
              lastupdated={forecastData.current.last_updated}
            />
            <WeatherStatus
              temp={forecastData.current.temp_c}
              condition={forecastData.current.condition}
            />
            <ExtraInfoBar currentData={forecastData.current} />
            <ForecastBar forecastArray={forecastData.forecast} />
          </>
        ) : (
          <div className={styles["weather-msg"]}>
            <p>Search for a city to show its weather</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ForecastCard;
