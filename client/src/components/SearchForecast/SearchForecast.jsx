import { useEffect, useState } from "react";
import { convertDateFormat } from "../../functions/dateToText";
import Logo from "../Logo/Logo";
import SearchBar from "./SearchBar/SearchBar";
import styles from "./SearchForecast.module.css";

function SearchForecast({ searchFunc, locationData }) {
  const [infoText, setInfoText] = useState("No location entered");
  useEffect(() => {
    if (locationData) {
      setInfoText(
        `longitude:${locationData.lon}  ,  latitude: ${locationData.lat} 
       ${convertDateFormat(locationData.localtime)}`
      );
    }
  }, [locationData]);

  return (
    <div className={styles["search-forecast"]}>
      <div className={styles["logo-container"]}>
        <Logo />
      </div>
      <div className={styles["search-inner-container"]}>
        <div className={styles["intro-text"]}>
          Use our weather app to see the weather around the world
        </div>
        <SearchBar searchFunc={searchFunc} />
        <article className={styles["info-text"]}>{infoText}</article>
      </div>
    </div>
  );
}

export default SearchForecast;
