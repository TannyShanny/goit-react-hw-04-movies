import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import * as fetchAPI from "../../../service/theMovieDb";
import * as variables from "../../../service/variables";
import styles from "./Cast.module.css";

class Cast extends Component {
  state = {
    cast: [],
  };

  componentDidMount() {
    const { movieId } = this.props.match.params;

    fetchAPI.fetchMovieCredits(movieId).then((res) => {
      const castMarkdown = res.map(({ profile_path, name, character }) => (
        <li key={uuidv4()} className={styles.card}>
          <img
            src={
              profile_path
                ? `${variables.imageBaseUrl}200${profile_path}`
                : variables.actorPhotoDummy
            }
            alt="actor"
          />
          <p className={styles.style}>{name}</p>
          <p>{character}</p>
        </li>
      ));

      this.setState({ cast: castMarkdown });
    });
  }

  render() {
    return <ul className={styles.cast}>{this.state.cast}</ul>;
  }
}

export default Cast;
