import React from "react";
import "./style.css";

class Search extends React.Component {
  state = {
    search: "",
    type: "all",
  };

  changeType = (event) => {
    this.setState({ type: event.target.value });
  };

  pressEnter = (event) => {
    if (event.key === "Enter") {
      this.props.filterMovies(this.state.search, this.state.type);
    }
  };

  render() {
    return (
      <>
        <div className="input search-cont1">
          <input
            type="text"
            value={this.setState.search}
            onChange={(e) => {
              this.setState({ search: e.target.value });
            }}
            onKeyDown={this.pressEnter}
          />
          <button
            className="waves-effect waves-light btn"
            onClick={() => {
              this.props.filterMovies(this.state.search, this.state.type);
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
              checked={this.state.type === "all"}
              onChange={this.changeType}
            />
            <span>all</span>
          </label>

          <label>
            <input
              name="group1"
              type="radio"
              value="movie"
              checked={this.state.type === "movie"}
              onChange={this.changeType}
            />
            <span>movie</span>
          </label>

          <label>
            <input
              name="group1"
              type="radio"
              value="series"
              checked={this.state.type === "series"}
              onChange={this.changeType}
            />
            <span>series</span>
          </label>

          <label>
            <input
              name="group1"
              type="radio"
              value="game"
              checked={this.state.type === "game"}
              onChange={this.changeType}
            />
            <span>game</span>
          </label>
        </div>
      </>
    );
  }
}

export { Search };
