import React from "react";
import PropTypes from "prop-types";
import * as variables from "../../../service/variables";
import styles from "./MovieDetailsInfo.module.css";

const MovieDetailsInfo = ({ film, genres, onGoBack }) => {
  const {
    poster_path: posterPath,
    release_date: releaseDate,
    vote_average: voteAverage,
    vote_count: voteCount,
    revenue,
    overview,
    title,
  } = film;

  return (
    <div className={styles.wrapper}>
      <button type="button" onClick={onGoBack}>
        Back
      </button>
      <div className={styles.dataWrapper}>
        <div className="imagesWrapper">
          <img
            className={styles.poster}
            src={
              posterPath
                ? `${variables.imageBaseUrl}780${posterPath}`
                : variables.posterDummy
            }
            alt="poster"
          />
        </div>
        <div className={styles.infoWrapper}>
          <p className={styles.filmTitle}>
            <span className={styles.text}>
              {title} ({parseInt(releaseDate)})
            </span>
          </p>
          <p>
            Rating: <span className={styles.text}>{voteAverage}/10</span> from
            <span className={styles.text}> {voteCount} </span>
            users
          </p>
          <p>Revenue: {revenue}$</p>
          <p>Overview: {overview}</p>
          <p>
            Genres:
            {genres &&
              genres.map(({ id, name }) => (
                <span key={id} className={styles.genre}>
                  {name}
                </span>
              ))}
          </p>
        </div>
      </div>
    </div>
  );
};

MovieDetailsInfo.propTypes = {
  film: PropTypes.object.isRequired,
  genres: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired
  ),
  onGoBack: PropTypes.func.isRequired,
};

export default MovieDetailsInfo;
