import React, { Component } from "react";
import classes from "./CreateNews.module.css";

class CreateNews extends Component {
  state = {
    newsItem: {
      title: "",
      text: "",
      date: "",
      photoUrl: "",
    },
  };

  inputHandler = (e) => {
    e.preventDefault();

    console.log(e.target.value);
  };

  render() {
    return (
      <div className={classes.CreateNews}>
        <h1>Для добавления новости заполните поля ниже:</h1>
        <form className={classes.CreateNews__form} action="">
          <p>Заголовок</p>
          <input
            onChange={this.inputHandler}
            type="text"
            className={classes.form__title}
          />
          <p>Текст</p>
          <input type="text" className={classes.form__text} />
          <p>Фото(url)</p>
          <input type="text" className={classes.form__photoUrl} />
          <button className={classes.form__button}>Добавить новость</button>
        </form>
      </div>
    );
  }
}
export default CreateNews;
