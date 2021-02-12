import React, { Component } from "react";
import { NavLink, Route } from "react-router-dom";
import * as fetchAPI from "../../service/theMovieDb";
import MovieDetailsInfo from "./MovieDetailsInfo/MovieDetailsInfo";
import routes from "../../service/routes";
import Cast from "./Cast/Cast";
import Reviews from "./Reviews/Reviews";
import styles from "./MovieDetailsPage.module.css";

class MovieDetailsPage extends Component {
  state = { film: {}, from: null, isLoading: false };

  componentDidMount() {
    this.setState({ isLoading: true });
    const { state } = this.props.location;
    if (state) this.setState({ from: state.from });

    const { movieId } = this.props.match.params;

    fetchAPI
      .fetchMovieById(movieId)
      .then((response) => {
        this.setState({ film: response });
      })
      .finally(() => this.setState({ isLoading: false }));
  }

  handleGoBack = () => {
    const { history } = this.props;
    if (this.state.from) {
      const { pathname, search } = this.state.from;
      history.push(`${pathname}${search}`);
      return;
    }
    history.push(routes.home);
  };

  render() {
    const { film, isLoading } = this.state;
    const { url } = this.props.match;

    return (
      <>
        {!isLoading && (
          <MovieDetailsInfo
            film={film}
            genres={film.genres}
            onGoBack={this.handleGoBack}
          />
        )}
        <div className={styles.linksWrapper}>
          <NavLink
            className={styles.link}
            activeClassName={styles.activeLink}
            to={`${url}/cast`}
          >
            Cast
          </NavLink>
          <NavLink
            className={styles.link}
            activeClassName={styles.activeLink}
            to={`${url}/reviews`}
          >
            Reviews
          </NavLink>
          <Route path={`${routes.cast}`} component={Cast} />
          <Route path={`${routes.reviews}`} component={Reviews} />
        </div>
      </>
    );
  }
}

export default MovieDetailsPage;
