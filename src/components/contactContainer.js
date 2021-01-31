import { useTranslation } from "react-i18next";
import attachment from "../assets/img/attachment.svg";
import classes from "../assets/contact.module.css";
import { useState } from "react";
import axios from "axios";

function ContactContainer() {
  const [data, setData] = useState({ name: "", mail: "", message: "" });
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/contact", data)
      .then((res) => {
        console.log(res.data)
        })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleChange = (event) => {
    setData({
      ...data,
      [event.target.id]: event.target.value,
    });
  };

  const { t } = useTranslation("common");
  return (
    <div
      id="contact"
      className={`${classes.rowAlign} ${classes.contentContainer} ${classes.margedContainer}`}
    >
      <div className={classes.leftColumnContact}>
        <h1 className={classes.h1}>{t("contact.title")}</h1>
        <p>{t("contact.subtitle")}</p>
        <form className={classes.form} onSubmit={handleSubmit}>
          <label htmlFor="name">{t("contact.nameInputLabel")}</label>
          <input
            className={classes.input}
            type="text"
            placeholder="John Doe"
            id="name"
            value={data.name}
            onChange={handleChange}
            required
          />
          <label htmlFor="mail">{t("contact.mailInputLabel")}</label>
          <input
            className={classes.input}
            type="mail"
            placeholder="johndoe@gmail.com"
            id="mail"
            onChange={handleChange}
            value={data.mail}
            required
          />
          <label htmlFor="message">{t("contact.messageInputLabel")}</label>
          <textarea
            className={classes.textarea}
            placeholder={t("contact.messageInput")}
            id="message"
            value={data.message}
            onChange={handleChange}
            required
          />
          <div className={classes.sendContainer}>
            <button
              className={`${classes.btn} ${classes.blueBtn} ${classes.rounded}`}
            >
              {t("contact.sendBtn")}
            </button>
            <label>
              {t("contact.policy")}
              <a href="#">{t("contact.policyLink")}</a>
            </label>
            <span className={classes.attachment}>
              <img src={attachment} alt="logo" /> {t("contact.file")}
            </span>
          </div>
        </form>
      </div>
      <div className={classes.sideInfo}>
        <h2 className={classes.h2}>{t("contact.sidePanel.headOffice")}</h2>
        <p>10 Place Vendôme, 75001 Paris, France</p>
        <br />
        <h2 className={classes.h2}>{t("contact.sidePanel.contactUs")}</h2>
        <p>+33 01 32 66 62 61</p>
        <p>hello@newbrands.fr</p>
      </div>
    </div>
  );
}

export default ContactContainer;
