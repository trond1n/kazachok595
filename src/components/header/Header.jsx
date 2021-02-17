import React, { Component } from "react";
import classes from "./Header.module.css";
import logo from "./logo.png";
import kazak from "./kazak.png";

class Header extends Component {
  render() {
    return (
      <div className={classes.Header}>
        <div className={classes.Header__logo}>
          <img src={logo} alt="логотип" />
          <div>
            <p>
              Государственное бюджетное общеобразовательное учреждение
              Свердловской области «Кадетская школа-интернат «Екатеринбургский
              кадетский корпус войск национальной гвардии Российской Федерации»
            </p>
            <p>
              Структурное подразделение детский сад комбинированного вида № 595
              «Казачок»
            </p>
          </div>
        </div>
        <div className={classes.Header__contacts}>
          <img src={kazak} alt="kazak" />
          <div>
            <p className={classes.header__contacts_phone}><strong>+7 (343) 240-17-82</strong></p>
            <p className={classes.header__contacts_adress}>
              г. Екатеринбург, ул. Чкалова, 141а
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
