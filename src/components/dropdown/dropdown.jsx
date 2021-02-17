import React from "react";
import Dropdown from "react-dropdown";
// import "react-dropdown/style.css";
import { NavLink } from "react-router-dom";
import classes from "./dropdown.module.css";
import DropdownButton from "react-bootstrap/DropdownButton";

const links = [
  { to: "/", label: "Главная", exact: true },
  { to: "/gallery", label: "Галерея", exact: false },
  { to: "/search", label: "Поиск", exact: false },
  { to: "/personal", label: "Воспитатели", exact: false },
  { to: "/news", label: "Новости", exact: false },
];

const aboutOrgatizationMenu = {
  groupName: "Сведения об образовательной организации",
  links: [
    { to: "/", label: "Главная", exact: true },
    { to: "/gallery", label: "Галерея", exact: false },
    { to: "/search", label: "Поиск", exact: false },
    { to: "/personal", label: "Воспитатели", exact: false },
    { to: "/news", label: "Новости", exact: false },
  ],
};

const DropDownMenu = () => {
  const renderLinks = () => {
    return aboutOrgatizationMenu.links.map((link, index) => {
      return (
        <li key={index}>
          <NavLink to={link.to} exact={link.exact}>
            {link.label}
          </NavLink>
        </li>
      );
    });
  };

  const options = ["one", "two", "three"];
  const defaultOption = options[0];

  return (
    <div className={classes.dropdown__container}>
      <DropdownButton id="dropdown-item-button" title="Dropdown button">
        <Dropdown.ItemText>Dropdown item text</Dropdown.ItemText>
        <Dropdown.Item as="button">Action</Dropdown.Item>
        <Dropdown.Item as="button">Another action</Dropdown.Item>
        <Dropdown.Item as="button">Something else</Dropdown.Item>
      </DropdownButton>
      {/* <Dropdown
        options={renderLinks()}
        value={aboutOrgatizationMenu.groupName}
        placeholder="Select an option"
        className={classes.dropdown__button}
      />
      <Dropdown
        options={renderLinks()}
        value={aboutOrgatizationMenu.groupName}
        placeholder="Select an option"
        className={classes.dropdown__button}
      /> */}
    </div>
  );
};
export default DropDownMenu;
