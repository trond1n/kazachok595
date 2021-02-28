import React, { Component } from "react";
import classes from "./NewsItem.module.css";

class NewsItem extends Component {
  render() {
    return (

        <div key={this.props.index} className={classes.NewsItem}>
          <img src={this.props.image} alt="NewsItem pic"/>
          <div className={classes.NewsItem__container}>
            <h1 className={classes.NewsItem__heading}>{this.props.title}</h1>
            <p className={classes.date}>{this.props.date}</p>
            <p className={classes.text}>
            {this.props.text}
            </p>
          </div>
        </div>
 
    );
  }
}
export default NewsItem;
