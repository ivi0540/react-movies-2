import "./style.css";
import React from "react";
import { Movies } from "../../components/Movies/Movies";
import { Preloader } from "../../components/Preloader/Preloader";
import { Search } from "../../components/Search/Search";

const API_KEY = process.env.REACT_APP_API_KEY;
const API_KEY_2 = "11ef8988";

class Main extends React.Component {
  state = {
    movies: [],
    loaded: false,
  };

  filterMovies = (movieName, movieType) => {
    this.setState({ loaded: false });

    fetch(
      `https://www.omdbapi.com/?apikey=${API_KEY_2}&s=${movieName}${
        movieType !== "all" ? `&type=${movieType}` : ""
      }&page=1`
    )
      .then((response) => response.json())
      .then((data) => this.setState({ movies: data.Search, loaded: true }))
      .catch((err) => {
        console.error(`ОШИБКА ${err.massage}`);
      });
  };

  componentDidMount() {
    this.filterMovies("matrix", "all");
  }

  render() {
    const { movies, loaded } = this.state;
    return (
      <>
        <Search filterMovies={this.filterMovies} />
        <main className="main">
          {!loaded ? <Preloader /> : <Movies movies={movies} />}
        </main>
      </>
    );
  }
}

export { Main };
