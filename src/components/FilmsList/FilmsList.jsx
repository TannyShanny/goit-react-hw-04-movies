import React from "react";
import PropTypes from "prop-types";
import * as variables from "../../service/variables";
import FilmCard from "../FilmCard/FilmCard";
import styles from "./FilmsList.module.css";

const FilmsList = ({ films }) => (
  <ul className={styles.list}>
    {films.map(({ id, title, poster_path: posterPath }) => (
      <li key={id} className={styles.listItem}>
        <FilmCard
          poster={
            posterPath
              ? `${variables.imageBaseUrl}500${posterPath}`
              : variables.posterDummy
          }
          title={title}
          id={id}
        />
      </li>
    ))}
  </ul>
);

FilmsList.propTypes = {
  films: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default FilmsList;
