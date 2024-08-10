import styles from "./ForecastBar.module.css";

function ForecastBar({ forecastArray }) {
  const forecastItems = forecastArray.map(({ time, temp_c }, index) => {
    return (
      <div
        className={styles["forecast-bar-parts"]}
        key={`forecast-hour${index}`}
      >
        <div className={styles["forecast-title"]}>{time.split(" ")[1]}</div>
        <div>{`${temp_c}°`}</div>
      </div>
    );
  });

  return <div className={styles["forecast-bar"]}>{forecastItems}</div>;
}

export default ForecastBar;
