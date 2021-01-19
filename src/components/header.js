import logo from '../assets/img/logonewbrands.png';
import { HamburgerSpring } from 'react-animated-burgers';
import React, { useState, useCallback } from 'react';
import {useTranslation} from "react-i18next";
import { Route } from 'react-router-dom';

function Header() {
  const {t, i18n} = useTranslation('common');
  const [isActive, setIsActive] = useState(false);
  const toggleButton = useCallback(
    () => setIsActive(prevState => !prevState),
    [],
  )
  return (
      <header className="header">
        <img src={logo} className="App-logo" alt="logo" />
        <ul className={isActive ? "openMobile" : "closedMobile"}>
          <Route render={({ history }) => (
            <li onClick={() => history.push('/')}><a href="#">{t('header.home')}</a></li>
          )}/>
          <Route render={({ history }) => (
            <li onClick={() => history.push('/contact')}><a href="#">{t('header.contact')}</a></li>
          )}/>
        </ul>
        <HamburgerSpring className="burgerMenu" isActive={isActive} toggleButton={toggleButton} buttonColor="transparent" barColor="#333333" buttonWidth={20} />
      </header>
  );
}

export default Header;
