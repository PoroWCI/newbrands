import logo from '../assets/img/logonewbrands.png';
import { HamburgerSpring } from 'react-animated-burgers';
import React, { useState, useCallback } from 'react';
import {useTranslation} from "react-i18next";
import { Route } from 'react-router-dom';
import classes from '../assets/header.module.css'
 
function Header() {
  const {t, i18n} = useTranslation('common');
  const [isActive, setIsActive] = useState(false);
  const toggleButton = useCallback(
    () => setIsActive(prevState => !prevState),
    [],
  )
  return (
      <header className={classes.header}>
        <img src={logo} alt="logo" />
        <ul className={isActive === true ? classes.openMobile : null}>
          <Route render={({ history }) => (
            <li className={classes.menuElement} onClick={() => history.push('/')}>
              <a className={classes.link} href="#">{t('header.home')}</a>
            </li>
          )}/>
          <Route render={({ history }) => (
            <li className={classes.menuElement} onClick={() => history.push('/contact')}>
              <a className={classes.link} href="#">{t('header.contact')}</a>
            </li>
          )}/>
        </ul>
        <HamburgerSpring className={classes.burgerMenu} isActive={isActive} toggleButton={toggleButton} buttonColor="transparent" barColor="#333333" buttonWidth={20} />
      </header>
  );
}

export default Header;
