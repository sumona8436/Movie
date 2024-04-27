import React from "react";

const Movie = ({ movie }) => {
  return (
    <div className="movie">
      <img src={movie.poster} alt={movie.title} className="movie-poster" />
      <div className="movie-details">
        <h2 className="movie-title">{movie.title}</h2>
        <p className="movie-rating">IMDB Rating: {movie.imdb_rating}</p>
        <p className="movie-length">Length: {movie.length}</p>
        <p className="movie-genres">Genres: {movie.genres.join(", ")}</p>
        <p className="movie-overview">{movie.overview}</p>
      </div>
    </div>
  );
};

export default Movie;
