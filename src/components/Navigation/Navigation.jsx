import Dropdown from "rc-dropdown";
import Menu, { Item as MenuItem } from "rc-menu";
import "rc-dropdown/assets/index.css";
import React, { PureComponent } from "react";
import { NavLink } from "react-router-dom";
import classes from "./Navigation.module.css";

const links = [
  {
    label: "Главная",
    to: "/",
    exact: true,
    dropItems: (
      <Menu>
        <MenuItem key="1">
          <NavLink to="/1" exact={false} activeClassName={classes.active}>
            На главную
          </NavLink>
        </MenuItem>
        <MenuItem key="2">
          <NavLink to="/2" exact={false} activeClassName={classes.active}>
            Об организации
          </NavLink>
        </MenuItem>
      </Menu>
    ),
  },
  {
    label: "Галерея",
    to: "/gallery",
    exact: false,
  },
  {
    label: "Новости",
    to: "/news",
    exact: false,
  },
];

class Navigation extends PureComponent {
  renderLinks() {
    return links.map((link, index) => {
      let renderItem = (
        <NavLink
          to={link.to}
          exact={link.exact}
          activeClassName={classes.active}
        >
          {link.label}
        </NavLink>
      );
      if (link.dropItems) {
        renderItem = (
          <Dropdown overlay={link.dropItems}>
            <NavLink
              to={link.to}
              exact={link.exact}
              activeClassName={classes.active}
            >
              {link.label}
            </NavLink>
          </Dropdown>
        );
      }
      return <li key={index}>{renderItem}</li>;
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
