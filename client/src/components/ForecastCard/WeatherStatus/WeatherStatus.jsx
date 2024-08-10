import styles from "./WeatherStatus.module.css";

function WeatherStatus({ temp, condition }) {
  return (
    <div className={styles["weather-status"]}>
      <div className={styles["temp-text"]}>{`${temp}°`}</div>
      <div className={styles["condition-text"]}>{`Status: ${condition}`}</div>
    </div>
  );
}

export default WeatherStatus;
