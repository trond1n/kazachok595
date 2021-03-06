import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import classes from "./News.module.css";
import NewsItem from "./NewsItem/NewsItem";

class News extends Component {
  state = {
    news: [
      {
        pic:
          "https://static.ngs.ru/news/2021/99/preview/7c1141f6a1c74d9da26af02f7d9d47a2071bab03_720_405_c.jpg",
        date: "13/02/2021",
        title: "Новость 1",
        text:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum veniam sunt aspernatur pariatur, repudiandae tenetur sapiente eaminima exercitationem veritatis molestias, iure fugiat! Sintbeatae consectetur dolores mollitia nobis vitae.",
      },
      {
        pic:
          "https://static.ngs.ru/news/2021/99/preview/8d9188cf19ba78604d1c42f9b281d0560d385666_720_405_c.jpg",
        date: "13/02/2021",
        title: "Новость 2",
        text:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum veniam sunt aspernatur pariatur, repudiandae tenetur sapiente eaminima exercitationem veritatis molestias, iure fugiat! Sintbeatae consectetur dolores mollitia nobis vitae.",
      },
    ],
  };

  render() {
    return (
      <div className={classes.News}>

        <div className={classes.News__list}>

          {this.state.news.map((item, index) => {
            return (
              <NavLink to={"/news/" + item.title}>
                <NewsItem
                  key={index}
                  image={item.pic}
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
