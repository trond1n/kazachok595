import React, { Component } from "react";
import SimpleCarousel from "../../carousel/bootstrapCarousel";
import classes from "./MainPage.module.css";

class MainPage extends Component {
  render() {
    return (
      <div className={classes.MainPage}>
        <SimpleCarousel />
      </div>
    );
  }
}
export default MainPage;
