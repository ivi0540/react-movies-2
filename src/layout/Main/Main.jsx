import "./style.css";
import React from "react";
import { Movies } from "../../components/Movies/Movies";
import { Preloader } from "../../components/Preloader/Preloader";

class Main extends React.Component {
  state = {
    movies: [],
    loaded: false,
  };

  componentDidMount() {
    fetch("https://www.omdbapi.com/?apikey=11ef8988&s=matrix&page=1")
      .then(
        (response) => response.json(),
        (err) => {
          console.error(err.massage);
        }
      )
      .then((data) => this.setState({ movies: data.Search, loaded: true }));
  }

  render() {
    const { movies, loaded } = this.state;
    return (
      <main className="main">
        {!loaded ? <Preloader /> : <Movies movies={movies} />}
      </main>
    );
  }
}

export { Main };
