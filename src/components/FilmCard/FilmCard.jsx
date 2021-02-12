import React from "react";
import PropTypes from "prop-types";
import routes from "../../service/routes";
import { Link, withRouter } from "react-router-dom";
import styles from "./FilmCard.module.css";

const FilmCard = ({ poster, title, id, location }) => (
  <Link
    className={styles.filmLink}
    to={{
      pathname: `${routes.movies}/${id}`,
      state: { from: location },
    }}
  >
    <div className={styles.card}>
      <img className={styles.cardImage} src={poster} alt="movie poster" />
      <p className={styles.cardTitle}>{title}</p>
    </div>
  </Link>
);

FilmCard.propTypes = {
  poster: PropTypes.string,
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  location: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default withRouter(FilmCard);
