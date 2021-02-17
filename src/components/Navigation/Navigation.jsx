// import { Dropdown } from "bootstrap";
import React, { Component } from "react";
// import { SplitButton } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import classes from "./Navigation.module.css";
// import "bootstrap/dist/css/bootstrap.min.css";
const links = [
  { to: "/", label: "Главная", exact: true },
  { to: "/gallery", label: "Галерея", exact: false },
  { to: "/search", label: "Поиск", exact: false },
  { to: "/personal", label: "Воспитатели", exact: false },
  { to: "/news", label: "Новости", exact: false },
];

class Navigation extends Component {
  renderLinks() {
    return links.map((link, index) => {
      return (
        <li key={index}>
          <NavLink
            to={link.to}
            exact={link.exact}
            activeClassName={classes.active}
          >
            {link.label}
          </NavLink>
        </li>
      );
    });
  }

  render() {
    return (
      <div className={classes.NavLink}>
        <div className={classes.Navigation__links}>
          <ul>{this.renderLinks()}</ul>
        </div>
      
      </div>
    );
  }
}

export default Navigation;
