import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import axios from "../../../axios/axios-kazak";
import classes from "./News.module.css";
import NewsItem from "./NewsItem/NewsItem";

class News extends Component {
  state = {
    news: [],
    loading: true,
  };

  async componentDidMount() {
    try {
      const response = await axios.get("/news.json");

      let arr = Object.keys(response.data).map((key) => {
        return {
          key: key,
          id: response.data[key].id,
          date: response.data[key].date,
          title: response.data[key].title,
          text: response.data[key].text,
          photo: response.data[key].photo,
        };
      });

      this.setState({
        news: arr,
        loading: false,
      });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    if (this.state.loading) {
      return (
        <div>
          <h1>Загрузка новостей...</h1>
        </div>
      );
    }
    return (
      <div className={classes.News}>
        <div className={classes.News__list}>
          {this.state.news.map((item, index) => {
            return (
              <NavLink to={"/news/" + item.key}>
                <NewsItem
                  key={item.id}
                  image={item.photo}
                  date={item.date}
                  title={item.title}
                  text={item.text}
                />
              </NavLink>
            );
          })}
        </div>
      </div>
    );
  }
}
export default News;
