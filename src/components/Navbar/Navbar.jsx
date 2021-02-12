import React from "react";
import routes from "../../service/routes";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => (
  <div className={styles.navigation}>
    <ul className={styles.wrapper}>
      <li className={styles.navItem}>
        <NavLink
          to={routes.home}
          exact
          className={styles.link}
          activeClassName={styles.activeLink}
        >
          Home
        </NavLink>
      </li>
      <li className={styles.navItem}>
        <NavLink
          to={routes.movies}
          className={styles.link}
          activeClassName={styles.activeLink}
        >
          Movies
        </NavLink>
      </li>
    </ul>
  </div>
);

export default Navbar;
