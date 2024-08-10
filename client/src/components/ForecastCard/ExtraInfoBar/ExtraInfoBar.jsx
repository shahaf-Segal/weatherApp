import styles from "./ExtraInfoBar.module.css";

function ExtraInfoBar({ currentData }) {
  return (
    <div className={styles["extra-info-bar"]}>
      <div className={styles["extra-info-bar-parts"]}>
        <div className={styles["extra-info-title"]}>percipitation</div>
        <div>{currentData.precip_mm}</div>
      </div>
      <div className={styles["extra-info-bar-parts"]}>
        <div className={styles["extra-info-title"]}>Humidity</div>
        <div>{currentData.humidity}</div>
      </div>
      <div className={styles["extra-info-bar-parts"]}>
        <div className={styles["extra-info-title"]}>Wind Speed</div>
        <div>{currentData.wind_kph}</div>
      </div>
    </div>
  );
}

export default ExtraInfoBar;
