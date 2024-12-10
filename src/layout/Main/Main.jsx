import "./style.css";
import React, { useState, useEffect } from "react";
import { Movies } from "../../components/Movies/Movies";
import { Preloader } from "../../components/Preloader/Preloader";
import { Search } from "../../components/Search/Search";

// const API_KEY = process.env.REACT_APP_API_KEY;
const API_KEY = "11ef8988";

const Main = () => {
  const [movies, setMovies] = useState([]);
  const [loaded, setLoaded] = useState(false);

  const filterMovies = (movieName, movieType) => {
    setLoaded(false);
    fetch(
      `https://www.omdbapi.com/?apikey=${API_KEY}&s=${movieName}${
        movieType !== "all" ? `&type=${movieType}` : ""
      }&page=1`
    )
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.Search);
        setLoaded(true);
      })
      .catch((err) => {
        console.error(`ОШИБКА ${err.massage}`);
      });
  };

  useEffect(() => {
    filterMovies("matrix", "all");
  }, []);

  return (
    <>
      <Search filterMovies={filterMovies} />
      <main className="main">
        {!loaded ? <Preloader /> : <Movies movies={movies} />}
      </main>
    </>
  );
};

export { Main };
