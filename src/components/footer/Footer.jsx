import React, { Component } from "react";
import classes from "./Footer.module.css";
// import logo from "./logo.png";

class Footer extends Component {




  
  render() {
    return (
      <>
      <div className={classes.Footer__clouds}/>
        <div className={classes.Footer}>
          <p>Казачок 2021</p>
        </div>
      </>
    );
  }
}

export default Footer;
