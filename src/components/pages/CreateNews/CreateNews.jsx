import React, { Component } from "react";
import classes from "./CreateNews.module.css";
import { Redirect } from "react-router";
import {
  createControl,
  validate,
  validateForm,
} from "../../../form/formFramework";
import Button from "../../UI/Button/Button";
import Input from "../../UI/Input/Input";
import axios from "../../../axios/axios-kazak";





function createFormControls() {
  return {
    title: createControl(
      {
        label: "Заголовок",
        errorMessage: "Поле не может быть пустым",
      },
      { required: true }
    ),
    text: createControl(
      {
        label: "Текст",
        errorMessage: "Поле не может быть пустым",
      },
      { required: true }
    ),
    photo: createControl(
      {
        label: "Ссылка на фото",
        errorMessage: "Поле не может быть пустым",
      },
      { required: true }
    ),
    date: createControl(
      {
        label: "Дата в формате д.м.г",
        errorMessage: "Поле не может быть пустым",
      },
      { required: true }
    ),
  };
}




class CreateNews extends Component {
  state = {
    isFormValid: false,
    formControls: createFormControls(),
  };

  submitHandler = (e) => {
    e.preventDefault();
  };

  addQuestionHandler = async (e) => {
    e.preventDefault();
    const index = Math.floor(Math.random() * 100000);
    const { title, text, photo, date } = this.state.formControls;
    const newNewsItem = {
      title: title.value,
      id: index,
      text: text.value,
      photo: photo.value,
      date: date.value,
    };

    try {
      await axios.post("news.json", newNewsItem);

      this.setState({
        isFormValid: false,
        formControls: createFormControls(),
        redirect: true,
      });
    } catch (e) {
      console.log(e);
    }
  };

  changeHandler = (value, controlName) => {
    const formControls = { ...this.state.formControls };
    const control = { ...formControls[controlName] };
    control.touched = true;
    control.value = value;
    control.valid = validate(control.value, control.validation);

    formControls[controlName] = control;
    this.setState({
      formControls,
      isFormValid: validateForm(formControls),
    });
  };
  renderControls() {
    return Object.keys(this.state.formControls).map((controlName, index) => {
      const control = this.state.formControls[controlName];
      return (
        <>
          <Input
            label={control.label}
            value={control.value}
            valid={control.valid}
            touched={control.touched}
            shouldValidate={!!control.validation}
            errorMessage={control.errorMessage}
            onChange={(event) =>
              this.changeHandler(event.target.value, controlName)
            }
          />
          {index === 0 ? <hr /> : null}
        </>
      );
    });
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to="/news" />;
    }

    return (
      <div className={classes.CreateNews}>
        <div>
          <h1>Добавление новости</h1>
          <form onSubmit={this.submitHandler}>
            {this.renderControls()}

            <Button
              onClick={this.addQuestionHandler}
              type="success"
              disabled={!this.state.isFormValid}
            >
              Опубликовать новость
            </Button>
          </form>
        </div>
      </div>
    );
  }
}
export default CreateNews;
