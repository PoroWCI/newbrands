import logo from "../assets/img/logo-newbrands.svg";
import React, { useState, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { Route } from "react-router-dom";
import classes from "../assets/header.module.css";
import { HamburgerSqueeze } from 'react-animated-burgers';

function Header(props) {
  const { t } = useTranslation("common");
  const [isActive, setIsActive] = useState(false);
  const toggleButton = useCallback(
    () => setIsActive((prevState) => !prevState),
    []
  );
  return (
    <header className={classes.header}>
      <div className={classes.container}>
        <img src={logo} alt="logo" />
            <div className={classes.burgerMenu}>
            <HamburgerSqueeze
      buttonColor="transparent"
      barColor="#333333"
      buttonWidth={20}
      {...{ isActive, toggleButton }}
    />
        </div>
        <ul className={isActive === true ? classes.openMobile : null}>
          <Route
            render={({ history }) => (
              <li
                className={`${classes.menuElement} ${props.page === "Home" ? classes.active : null}`}
                onClick={() => history.push("/")}
              >
                <button className={classes.link}>
                  {t("header.home")}
                </button>
              </li>
            )}
          />
          <Route
            render={({ history }) => (
              <li
              className={`${classes.menuElement} ${props.page === "Contact" ? classes.active : null}`}
                onClick={() => history.push("/contact")}
              >
                <button className={classes.link}>
                  {t("header.contact")}
                </button>
              </li>
            )}
          />
        </ul>
    
      </div>
    </header>
  );
}

export default Header;
