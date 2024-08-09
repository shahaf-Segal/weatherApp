import Logo from "../../Logo/Logo";
import SearchForecast from "../../SearchForecast/SearchForecast";
import styles from "./ForecastPage.module.css";

function ForecastPage() {
  return (
    <div className={styles["forecast-container"]}>
      <Logo />
      <SearchForecast></SearchForecast>
    </div>
  );
}

export default ForecastPage;
