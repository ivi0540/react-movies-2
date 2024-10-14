function Movie(props) {
  const {
    Title: title,
    Year: year,
    imdbID: id,
    Type: type,
    Poster: poster,
  } = props;
  return (
    <div id={id} className="card">
      <div className="card-image waves-effect waves-block waves-light">
        <img
          className="activator"
          src={poster !== "N/A" ? poster : "https://placehold.co/600x400/png"}
          alt="poster-image"
        />
      </div>
      <div className="card-content">
        <span className="card-title activator grey-text text-darken-4">
          {title} ( {year} год )
        </span>
        <span className="card-title">{type}</span>
      </div>
    </div>
  );
}

export { Movie };
