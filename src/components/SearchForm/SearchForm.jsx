import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./SearchForm.module.css";

class SearchForm extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  state = {
    query: "",
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { query } = this.state;
    this.props.onSubmit(query);
    this.setState({ query: "" });
  };

  handleChange = ({ target }) => {
    this.setState({ query: target.value });
  };

  render() {
    const { query } = this.state;
    return (
      <form className={styles.searchForm} onSubmit={this.handleSubmit}>
        <div className={styles.searchFormWrapper}>
          <input
            className={styles.searchFormInput}
            type="text"
            value={query}
            onChange={this.handleChange}
            placeholder="Search"
          />
          <button type="submit" className={styles.searchFormButton}>
            Search
          </button>
        </div>
      </form>
    );
  }
}

export default SearchForm;
