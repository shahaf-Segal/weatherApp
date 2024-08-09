import Logo from "../Logo/Logo";
import styles from "./SearchForecast.module.css";

function SearchForecast() {
  return (
    <div className={styles["search-forecast"]}>
      <div className={styles["logo-container"]}>
        <Logo />
      </div>
      <div className={styles["search-inner-container"]}></div>
      <section>Use our weather app to see the weather around the world</section>
    </div>
  );
}

export default SearchForecast;
