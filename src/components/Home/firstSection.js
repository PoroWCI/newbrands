import working from "../../assets/img/working.svg";
import { useTranslation } from "react-i18next";
import classes from "./firstSection.module.css";
// import { useState } from "react";
// import axios from "axios";

function FirstSection() {
  // const [msgSent, setMsgSent] = useState();
  // const [data, setData] = useState({ mail: "" });
  const { t } = useTranslation("common");
  // const request = async () => {
  //   await axios
  //     .post("http://dev.newbrands.fr:4000/newsletter", data)
  //     .then((res) => {
  //       if (res.data.status === true) setMsgSent(true);
  //     })
  //     .catch(function (error) {
  //       setMsgSent(false);
  //     });
  // };
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   request();
  // }
    
  // const handleChange = (event) => {
  //   setData({
  //     ...data,
  //     [event.target.id]: event.target.value,
  //   });
  // };

  return (
    <div className={classes.container}>
      <div className={classes.leftColumn}>
        <h1 className={classes.h1}>{t("home.firstSection.title")}</h1>
        <p className={classes.lightText}>{t("home.firstSection.subtitle")} </p>
        <div>
          <div>
            {/* <div className={classes.dottedHr}></div>
                <div className={classes.btnDiv}>
                  <button name="Créer un projet" className={`${classes.btn} ${classes.blueBtn}`}>
                    {t("btn.createProject")}
                  </button>
                  <button name="Demander une démo" className={`${classes.btn} ${classes.outlineBtn}`}>
                    {t("btn.demo")}
                  </button>
              </div> */}
            <div className={classes.validationMsg}>
        </div>
          </div>
        </div>
        <div className={classes.noSpam}>
          <div>
            <span className={classes.lightText}>
              {t("home.firstSection.noSpamContainer")}
              <a href="https://calendly.com/newbrands/informations" className={classes.linkCommercial}>
                {t("home.firstSection.noSpam")}
              </a>
            </span>
          </div>
        </div>
      </div>
      <img src={working} alt="Working" />
    </div>
  );
}

export default FirstSection;
