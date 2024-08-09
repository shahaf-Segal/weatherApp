import { useState } from "react";
import { isNameValid } from "../../../functions/nameValidation";
import styles from "./SearchBar.module.css";

function SearchBar({ searchFunc }) {
  const [searchText, setSearchText] = useState("");
  const changeHandler = (e) => {
    setSearchText(e.target.value);
  };
  const enterSearch = () => {
    if (isNameValid(searchText)) {
      searchFunc(searchText);
    }
  };

  return (
    <div>
      <label htmlFor="cityName"></label>
      <div className={styles["search-bar"]}>
        <div className={styles["search-input-container"]}>
          <input
            type="search"
            name="cityName"
            className={styles["search-input"]}
            value={searchText}
            onChange={changeHandler}
          />
        </div>

        <div className={styles["search-btn-container"]}>
          <button className={styles["search-btn"]} onClick={enterSearch}>
            search
          </button>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
