import React from "react";
import PropTypes from "prop-types";
import { Movie } from "./Movie";

export class MoviesList extends React.Component {
  static propTypes = {
    movies: PropTypes.array,
  };

  render() {
    const { movies } = this.props;

    return (
      <div className="MoviesList">
        {movies.map((movie) => (
          <div className="MoviesList-item" key={movie.imdbID}>
            <Movie
              id={movie.imdbID}
              title={movie.Title}
              year={movie.Year}
              poster={movie.Poster}
            ></Movie>
          </div>
        ))}
      </div>
    );
  }
}
