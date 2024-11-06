import { Movie } from "../Movie/Movie";

function Movies(props) {
  const { movies = [] } = props;
  return (
    <>
      {movies.length ? (
        movies.map((movie) => <Movie key={movie.imdbID} {...movie} />)
      ) : (
        <h4> invalid movies </h4>
      )}
    </>
  );
}

export { Movies };
