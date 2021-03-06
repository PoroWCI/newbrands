import working from "../../assets/img/working.svg";
import { useTranslation } from "react-i18next";
import classes from "../../assets/firstSection.module.css";
import { useState } from "react";
import axios from "axios";

function FirstSection() {
  const [msgSent, setMsgSent] = useState();
  const [data, setData] = useState({ mail: "" });
  const { t } = useTranslation("common");
  const request = async () => {
    await axios
      .post("http://dev.newbrands.fr:4000/newsletter", data)
      .then((res) => {
        if (res.data.status === true) setMsgSent(true);
      })
      .catch(function (error) {
        setMsgSent(false);
      });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    request();
  }
    
  const handleChange = (event) => {
    setData({
      ...data,
      [event.target.id]: event.target.value,
    });
  };

  return (
    <div className={classes.container}>
      <div className={classes.leftColumn}>
        <h1 className={classes.h1}>{t("home.firstSection.title")}</h1>
        <p className={classes.lightText}>{t("home.firstSection.subtitle")} </p>
        <div>
          <div>
            <div className={classes.dottedHr}></div>
            <form onSubmit={handleSubmit}>
              <div className={classes.inputDiv}>
                <input
                  type="email"
                  name="email"
                  placeholder={t("home.firstSection.mailInput")}
                  required
                  className={classes.mailInput}
                  id="mail"
                  onChange={handleChange}
                  value={data.mail}
                />
                <div className={classes.btnDiv}>
                  <button type="submit" name="submit" className={classes.btn}>
                    {t("home.firstSection.btnNewsletter")}
                  </button>
                </div>
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
        </div>
        <div className={classes.noSpam}>
          <div>
            <span className={classes.lightText}>
              {t("home.firstSection.noSpamContainer")}
              <span className={classes.boldText}>
                {t("home.firstSection.noSpam")}
              </span>
            </span>
          </div>
        </div>
      </div>
      <img src={working} alt="Working" />
    </div>
  );
}

export default FirstSection;
