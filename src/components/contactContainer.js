import { useTranslation } from "react-i18next";
import attachment from "../assets/img/attachment.svg";
import classes from "../assets/contact.module.css";
import { useState } from "react";
import axios from "axios";

function ContactContainer() {
  const [msgSent, setMsgSent] = useState();
  const { t } = useTranslation("common");
  const [submitBtn, setSubmitBtn] = useState(`${t("contact.sendBtn")}`);
  const [data, setData] = useState({ name: "", mail: "", message: ""});
  const request = async () => {
    setSubmitBtn("ENVOI");
    await axios
      .post("http://192.168.1.26:4000/contact", data)
      .then((res) => {
        if (res.data.status === true) setMsgSent(true);
      })
      .catch(function (error) {
        setMsgSent(false);
      });
    setSubmitBtn(`${t("contact.sendBtn")}`);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    request();
  };

  const handleChange = (event) => {
    setData({
      ...data,
      [event.target.id]: event.target.value,
    });
  };

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
              {submitBtn}
            </button>
            <label>
              {t("contact.policy")}
              <a href="#">{t("contact.policyLink")}</a>
            </label>
          </div>
        </form>
        <div className={classes.validationMsg}>
          <span>
            {msgSent === true
              ? "Message envoyé"
              : msgSent === false
                ? "Une erreur s'est produite, veuillez réessayer."
                : null}
          </span>
        </div>
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
