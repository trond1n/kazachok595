import React, { Component } from "react";
import axios from "../../../../axios/axios-kazak";
import classes from "./NewsPage.module.css";

class NewsPage extends Component {
  state = {
    news: null,
    loading: true,
  };
  async componentDidMount() {
    try {
      const response = await axios.get(
        `news/${this.props.match.params.id}.json`
      );
      const news = response.data;
      console.log(news);
      this.setState({
        news,
        loading: false,
      });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const arr = { name: "john" };
    console.log(this.state.news);
    console.log(arr.name);
    if (this.state.loading) {
      return <div>Loading...</div>;
    }
    return (
      <div key={this.state.news.index} className={classes.NewsPage}>
        {/* <img src={this.state.news.photo} alt="NewsPage pic"/>
          <div className={classes.NewsPage__container}>
            <h1 className={classes.NewsPage__heading}>{this.state.news.title}</h1>
            <p className={classes.date}>{this.state.news.date}</p>
            <p className={classes.text}>
            {this.state.news.text}
            </p>
          </div> */}
        <img src={this.state.news.photo} alt="NewsPage pic" />

        <div className={classes.NewsPage__container}>
          <p className={classes.date}>{this.state.news.date}</p>
          <h1 className={classes.NewsPage__heading}>{this.state.news.title}</h1>
          <p className={classes.text}>{this.state.news.text}</p>
        </div>
      </div>
    );
  }
}
export default NewsPage;
