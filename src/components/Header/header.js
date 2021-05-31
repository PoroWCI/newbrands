import logo from "../../assets/img/logo-newbrands.svg";
import User from "../../assets/img/user.svg"
import Lock from "../../assets/img/lock.svg"
import Bell from "../../assets/img/bell.svg"
import Chart from "../../assets/img/chart.svg"
import React, { useState, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { Route } from "react-router-dom";
import classes from "./header.module.css";
import { HamburgerSqueeze } from 'react-animated-burgers';
import Picture from '../../assets/img/profilePicture.jpg'
import { AiFillCaretDown } from 'react-icons/ai'
import { useEffect } from "react";
import axios from "axios";
import { API } from "../../config";

axios.defaults.headers.common['Authorization'] = localStorage.getItem("session")

function Header(props) {
  const loggedIn = window.localStorage.getItem('session') ? window.localStorage.getItem('session') : "";
  const { t } = useTranslation("common");
  const [isActive, setIsActive] = useState(false);
  const [openMenuProfile, setOpenMenuProfile] = useState(false);
  const [user, setUser] = useState([])

  useEffect(() => {
    async function FetchData(){
      axios.get(`${API}/api/user`, { headers: {"Authorization" : `Bearer ${loggedIn}`} }).then((res) => {
        window.localStorage.setItem('user', JSON.stringify(res.data))
        setUser(res.data)
        console.log("user:", user)
      })
    }
    FetchData()
  }, [])
  const handleBlur = (event) => {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      setOpenMenuProfile(false)
    }
  }
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
        <ul className={`${isActive === true ? classes.openMobile : null}
        ${classes.bigMenu}`}>
          <Route
            render={({ history }) => (
              <li
                className={`${classes.menuElement} ${props.page === "Home" ? classes.active : ''}`}
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
                className={`${classes.menuElement} ${props.page === "About" ? classes.active : ''}`}
                onClick={() => history.push("/about")}
              >
                <button className={classes.link}>
                  {t("header.about")}
                </button>
              </li>
            )}
          />
          <Route
            render={({ history }) => (
              <li
                className={`${classes.menuElement} ${props.page === "Contact" ? classes.active : ''}`}
                onClick={() => history.push("/contact")}
              >
                <button className={classes.link}>
                  {t("header.contact")}
                </button>
              </li>
            )}
          />

          {loggedIn.length > 0 ?
            <div className={classes.profileMenuContainer} onClick={() => setOpenMenuProfile(!openMenuProfile)} tabIndex="0" onBlur={(e) => handleBlur(e)}>
              <div className={classes.profileDiv} >
                <img className={classes.profilePicture} src={Picture} alt="profile" />
                <span>{ user.firstName} {  user.lastName}</span>
                <span><AiFillCaretDown className={classes.dropDown} size=".5rem" /></span>
              </div>
              <div className={classes.pMenuContainer}>
                {openMenuProfile ? <ul className={classes.profileMenu}>
                  <Route
                    render={({ history }) => (
                      <li onClick={() => history.push("/account/informations")}><img src={User} alt="my account" />Mon compte</li>)}
                  />
                  <Route
                    render={({ history }) => (
                      <li onClick={() => history.push("/account/notifications")}><img src={Bell} alt="notification" />Notification</li>)}
                  />
                  <Route
                    render={({ history }) => (
                      <li onClick={() => history.push("/account/subscription")}><img src={Chart} alt="subscription" />Abonnement</li>)}
                  />
                  <Route
                    render={({ history }) => (
                      <li onClick={() => { window.localStorage.removeItem('session'); history.push("/") }}><img src={Lock} alt="Sign out" />Déconnexion</li>)}
                  />

                </ul> : (null)}
              </div>
            </div> : <>
              <div className={classes.unloggedMenu}>
                <Route
                  render={({ history }) => (
                    <li
                      onClick={() => history.push("/sign-in")}
                    >
                      <button className={classes.noBtn}>
                        {t("header.connect")}
                      </button>
                    </li>
                  )}
                />
                <Route
                  render={({ history }) => (
                    <li
                      onClick={() => history.push("/createProject")}
                    >
                      <button className={classes.blueBtn}>
                        {t("header.createProject")}
                      </button>
                    </li>
                  )}
                />
              </div>
            </>}
        </ul>
      </div>
    </header>
  );
}

export default Header;
