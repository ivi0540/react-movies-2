import "./style.css";
import React from "react";
import { Movies } from "../../components/Movies/Movies";
import { Preloader } from "../../components/Preloader/Preloader";
import { Search } from "../../components/Search/Search";

class Main extends React.Component {
  state = {
    movies: [],
    loaded: false,
  };

  filterMovies = (movieName, movieType) => {
    this.setState({ loaded: false });

    fetch(
      `https://www.omdbapi.com/?apikey=11ef8988&s=${movieName}${
        movieType !== "all" ? `&type=${movieType}` : ""
      }&page=1`
    )
      .then(
        (response) => response.json(),
        (err) => {
          console.error(err.massage);
        }
      )
      .then((data) => this.setState({ movies: data.Search, loaded: true }));
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
