import Dropdown from "rc-dropdown";
import Menu, { Item as MenuItem } from "rc-menu";
import "rc-dropdown/assets/index.css";
import React, { PureComponent } from "react";
import { NavLink } from "react-router-dom";
import classes from "./Navigation.module.css";

const links = [
  {
    label: "Главная",
    to: "/",
    exact: true,
  },
  {
    label: "Сведения ▼",
    to: "/about-list",
    exact: false,
    dropItems: (
      <Menu>
        <MenuItem key="1">
          <NavLink
            to="/about-main"
            exact={false}
            activeClassName={classes.active}
          >
            Основные сведения
          </NavLink>
        </MenuItem>
        <MenuItem key="2">
          <NavLink
            to="/structure"
            exact={false}
            activeClassName={classes.active}
          >
            Структура и органы управления образовательной организацией
          </NavLink>
        </MenuItem>
        <MenuItem key="3">
          <NavLink
            to="/employees-list"
            exact={false}
            activeClassName={classes.active}
          >
            Руководство. Педагогический состав
          </NavLink>
        </MenuItem>
        <MenuItem key="4">
          <NavLink
            to="/administration"
            exact={false}
            activeClassName={classes.active}
          >
            Администрация
          </NavLink>
        </MenuItem>
        <MenuItem key="5">
          <NavLink
            to="/documents"
            exact={false}
            activeClassName={classes.active}
          >
            Документы
          </NavLink>
        </MenuItem>
        <MenuItem key="6">
          <NavLink
            to="/education"
            exact={false}
            activeClassName={classes.active}
          >
            Образование
          </NavLink>
        </MenuItem>
        <MenuItem key="7">
          <NavLink
            to="/education-standarts"
            exact={false}
            activeClassName={classes.active}
          >
            Образовательные стандарты
          </NavLink>
        </MenuItem>
        <MenuItem key="8">
          <NavLink
            to="/mat-tech-sup"
            exact={false}
            activeClassName={classes.active}
          >
            Материально-техническое обеспечение и оснащенность образовательного
            процесса
          </NavLink>
        </MenuItem>
        <MenuItem key="9">
          <NavLink
            to="/scholarships"
            exact={false}
            activeClassName={classes.active}
          >
            Стипендии и иные виды материальной поддержки
          </NavLink>
        </MenuItem>
        <MenuItem key="10">
          <NavLink
            to="/Paid-educational-services"
            exact={false}
            activeClassName={classes.active}
          >
            Платные образовательные услуги
          </NavLink>
        </MenuItem>
        <MenuItem key="11">
          <NavLink
            to="/financial-and-economic-activities"
            exact={false}
            activeClassName={classes.active}
          >
            Финансово-хозяйственная деятельность
          </NavLink>
        </MenuItem>
      </Menu>
    ),
  },
  {
    label: "История",
    to: "/history",
    exact: false,
  },
  {
    label: "Новости ▼",
    to: "/news",
    exact: false,
    dropItems: (
      <Menu>
        <MenuItem key="1">
          <NavLink
            to="/news-add"
            exact={false}
            activeClassName={classes.active}
          >
            Добавить новость
          </NavLink>
        </MenuItem>
      </Menu>
    ),
  },
  {
    label: "Фотогалерея",
    to: "/gallery",
    exact: false,
  },
  {
    label: "Вакансии",
    to: "/vacancies",
    exact: false,
  },
  {
    label: "Контакты",
    to: "/contacts",
    exact: false,
  },
];

class Navigation extends PureComponent {
  renderLinks() {
    return links.map((link, index) => {
      let renderItem = (
        <NavLink
          to={link.to}
          exact={link.exact}
          activeClassName={classes.active}
        >
          {link.label}
        </NavLink>
      );
      if (link.dropItems) {
        renderItem = (
          <Dropdown overlay={link.dropItems}>
            <NavLink
              to={link.to}
              exact={link.exact}
              activeClassName={classes.active}
            >
              {link.label}
            </NavLink>
          </Dropdown>
        );
      }
      return <li key={index}>{renderItem}</li>;
    });
  }

  render() {
    return (
      <div className={classes.NavLink}>
        <div className={classes.Navigation__links}>
          <ul>{this.renderLinks()}</ul>
        </div>
      </div>
    );
  }
}
export default Navigation;
