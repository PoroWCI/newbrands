import logo from '../assets/img/logonewbrands.png';
import { HamburgerSpring } from 'react-animated-burgers';
import React, { useState, useCallback } from 'react';
import {useTranslation} from "react-i18next";
import { Route } from 'react-router-dom';
import { css, cx } from '@emotion/css'

function Header() {
  const {t, i18n} = useTranslation('common');
  const [isActive, setIsActive] = useState(false);
  const toggleButton = useCallback(
    () => setIsActive(prevState => !prevState),
    [],
  )
  return (
      <header className={header}>
        <img src={logo} alt="logo" />
        <ul className={[cx({ [openMobile]: isActive }, {menu})]}>
          <Route render={({ history }) => (
            <li className={menuElement} onClick={() => history.push('/')}>
              <a className={link} href="#">{t('header.home')}</a>
            </li>
          )}/>
          <Route render={({ history }) => (
            <li className={menuElement} onClick={() => history.push('/contact')}>
              <a className={link} href="#">{t('header.contact')}</a>
            </li>
          )}/>
        </ul>
        <HamburgerSpring className={burgerMenu} isActive={isActive} toggleButton={toggleButton} buttonColor="transparent" barColor="#333333" buttonWidth={20} />
      </header>
  );
}

const header = css`
  display: "flex",
  flexDirection: "row",
  width: "95%",
  alignItems: "center",
  margin: "auto",
  height: "8vh"
`

const menu = css `
  listStyle: "none",
  marginLeft: "auto"
`

const menuElement = css`
  float: "left",
  margin: "20px",
  &::after{
    transition: "all 0.2s ease-in-out";
    fontWeight: "500";
    content: "";
    display: "block";
    height: "1px";
    width: "0";
    margin: "auto";
    marginTop: "5px";
  }
`

const burgerMenu = css`
  marginLeft: "auto",
  outline: "none",
  display: "none"
`

const link = css`
textDecoration: "none",
color: "#333333"
`
const openMobile = css`
  visibility: visible;
  opacity: 1;
  transition: opacity 0.3s, visibility 0.3s;
`

export default Header;
