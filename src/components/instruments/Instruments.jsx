import React, { Component } from "react";
import classes from "./Instruments.module.css";
import search from "./search-black-18dp.svg";

class Instruments extends Component {
  render() {
    return (
      <div className={classes.Instruments}>
        <form>
          <input type="text" placeholder="Поиск..." />
          <button><img src={search} alt="search"/></button>
        </form>
        <a href="/1">Версия для слабовидящих</a>
      </div>
    );
  }
}

export default Instruments;
