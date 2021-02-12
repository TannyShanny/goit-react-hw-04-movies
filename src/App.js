import routes from "./service/routes";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import React from "react";
import HomePage from "./components/HomePage/HomePage";
import MovieDetailsPage from "./components/MovieDetailsPage/MovieDetailsPage";
import MoviesPage from "./components/MoviesPage/MoviesPage";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Route path={routes.home} exact component={HomePage} />
        <Route path={routes.movies} exact component={MoviesPage} />
        <Route path={routes.movieDetails} component={MovieDetailsPage} />

        <Redirect to={routes.home} />
      </BrowserRouter>
    </div>
  );
};

export default App;
