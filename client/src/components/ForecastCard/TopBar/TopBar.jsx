import { convertDateFormat } from "../../../functions/dateToText";
import styles from "./TopBar.module.css";

function TopBar({ city, country, lastupdated }) {
  return (
    <div className={styles["top-bar"]}>
      <div className={styles["city-text"]}>{city}</div>
      <div>{country}</div>
      <div className={styles["update-time"]}>
        {`Last Updated: ${convertDateFormat(lastupdated)}`}
      </div>
    </div>
  );
}

export default TopBar;
