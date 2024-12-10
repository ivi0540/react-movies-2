import React, { useState } from "react";
import "./style.css";

const Search = (props) => {
  const [search, setSearch] = useState("Matrix");
  const [type, setType] = useState("all");

  const changeType = (event) => {
    setType(event.target.value);
  };

  const pressEnter = (event) => {
    if (event.key === "Enter") {
      props.filterMovies(search, type);
    }
  };

  return (
    <div className="search-container">
      <div className="input search-cont1">
        <input
          type="text"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          onKeyDown={pressEnter}
        />
        <button
          className="waves-effect waves-light btn #1de9b6 teal accent-3"
          onClick={() => {
            props.filterMovies(search, type);
          }}
        >
          Search
        </button>
      </div>
      <div>
        <label>
          <input
            name="group1"
            type="radio"
            value="all"
            checked={type === "all"}
            onChange={changeType}
          />
          <span>all</span>
        </label>

        <label>
          <input
            name="group1"
            type="radio"
            value="movie"
            checked={type === "movie"}
            onChange={changeType}
          />
          <span>movie</span>
        </label>

        <label>
          <input
            name="group1"
            type="radio"
            value="series"
            checked={type === "series"}
            onChange={changeType}
          />
          <span>series</span>
        </label>

        <label>
          <input
            name="group1"
            type="radio"
            value="game"
            checked={type === "game"}
            onChange={changeType}
          />
          <span>game</span>
        </label>
      </div>
    </div>
  );
};

export { Search };
