import styles from "./ForecastCard.module.css";
import TopBar from "./TopBar/TopBar";
import WeatherStatus from "./WeatherStatus/WeatherStatus";

function ForecastCard({ forecastData }) {
  return (
    <div className={styles["forecast-card-container"]}>
      <div className={styles["forecast-card"]}>
        {forecastData && (
          <TopBar
            city={forecastData.location.name}
            country={forecastData.location.country}
            lastupdated={forecastData.current.last_updated}
          />
        )}
        {forecastData && (
          <WeatherStatus
            temp={forecastData.current.temp_c}
            condition={forecastData.current.condition}
          />
        )}
      </div>
    </div>
  );
}

export default ForecastCard;
