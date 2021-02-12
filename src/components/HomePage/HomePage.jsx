import React, { Component } from "react";
import * as fetchAPI from "../../service/theMovieDb";
import styles from "./HomePage.module.css";
import FilmsList from "../FilmsList/FilmsList";

class HomePage extends Component {
  state = {
    films: [],
  };

  componentDidMount() {
    fetchAPI.fetchTrendingMovies().then((response) => {
      this.setState({ films: response });
    });
  }

  render() {
    const { films } = this.state;
    return (
      <>
        <h1 className={styles.homePage}>Trending today</h1>
        {films && <FilmsList films={films} />}
      </>
    );
  }
}

export default HomePage;
