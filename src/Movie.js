import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";

function Movie({ year, title, summary, poster, genres }) {
  return (
    <div className="movie">
      <img src={poster} alt={title} title={title}></img>
      <div className="movie_data">
        <h3 className="movie_title">{title}</h3>
        <h3 className="movie_year">{year}</h3>
        <ul className="movie_genres">
          {genres.map((genres, index) => {
            return (
              <li key={index} className="movie_genre">
                {genres}
              </li>
            );
          })}
        </ul>
        <p className="movie_summary">{summary.slice(0, 100)}...</p>
      </div>
    </div>
  );
}

Movie.propTypes = {
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
