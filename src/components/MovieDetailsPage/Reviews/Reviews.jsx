import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import * as fetchAPI from "../../../service/theMovieDb";
import styles from "./Reviews.module.css";

class Reviews extends Component {
  state = {
    reviews: [],
  };

  componentDidMount() {
    const { movieId } = this.props.match.params;

    fetchAPI
      .fetchMovieReviews(movieId)
      .then((res) => this.setState({ reviews: res }));
  }

  render() {
    const { reviews } = this.state;
    return (
      <ul className={styles.wrapper}>
        {reviews.length ? (
          reviews.map(({ author, content }) => (
            <li key={uuidv4()} className={styles.review}>
              <p className={styles.author}>Author: {author}</p>
              <p>"{content}"</p>
            </li>
          ))
        ) : (
          <p className={styles.noReviews}>No reviews yet</p>
        )}
      </ul>
    );
  }
}

export default Reviews;
