import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import classes from "./Navigation-button.module.css";

class NavigationButton extends Component {
  state = {
    visible: false,
  };
  menuItems() {
    return (
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
      </ul>
    );
  }
  onClickHandler() {
    this.setState({ visible: !this.state.visible });
  }
  render() {
    return (
      <div>
        <div
          className={classes.NavigationButton}
          onMouseOver={() => {
            this.onClickHandler();
          }}
          onMouseLeave={() => {
            this.onClickHandler();
          }}
        >
          <p>Menu</p>
          {this.state.visible ? (
            <ul>
              <li>пункт меню 1</li>
              <li>пункт меню 2</li>
              <li>пункт меню 3</li>
              <li>пункт меню 4</li>
            </ul>
          ) : null}
        </div>
      </div>
    );
  }
}

export default NavigationButton;
