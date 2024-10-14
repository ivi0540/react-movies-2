import "./style.css";
import React from "react";

class Main extends React.Component {
  state = {
    movies: [],
    loaded: false,
  };

  componentDidMount() {
    fetch("https://www.omdbapi.com/?apikey=11ef8988&s=matrix&page=1")
      .then((response) => response.json())
      .then((data) => this.setState({ movies: data.Search, loaded: true }));
  }

  render() {
    return <main className="main"></main>;
  }
}

export { Main };
