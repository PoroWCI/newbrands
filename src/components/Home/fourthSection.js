import classes from "./fourthSection.module.css";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { Route } from "react-router-dom";

function FourthSection() {
  const { t } = useTranslation("common");
  return (
    <section className={classes.container}>
      <div className={classes.cardContainer}>
        <div className={classes.introduction}>
          <h2 className={classes.h2}>{t("home.fourthSection.title")}</h2>
          <p className={classes.p}>{t("home.fourthSection.subtitle")}</p>
        </div>
        <div className={classes.column}>
          <div className={classes.firstCard}>
            <div className={classes.row}>
              <div className={classes.firstColumn}>
                <h6>{t("home.fourthSection.startingFrom")}</h6>
                <h3>{t("home.fourthSection.99perMonth")}</h3>
                <span>{t("home.fourthSection.99description")}</span>
              </div>
              <div className={classes.listColumn}>
                <div className={classes.item}>
                  <FaCheckCircle color="#01798c" size="24px" />
                  <span>{t("home.fourthSection.sample")}</span>
                </div>
                <div className={classes.item}>
                  <FaCheckCircle color="#01798c" size="24px" />
                  <span>{t("home.fourthSection.commands")}</span>
                </div>
                <div className={classes.item}>
                  <FaCheckCircle color="#01798c" size="24px" />
                  <span>{t("home.fourthSection.monitoring")}</span>
                </div>
              </div>
              <div className={classes.listColumn}>
                <div className={classes.item}>
                  <FaCheckCircle color="#01798c" size="24px" />
                  <span>{t("home.fourthSection.strategy")}</span>
                </div>
                <div className={classes.item}>
                  <FaCheckCircle color="#01798c" size="24px" />
                  <span>{t("home.fourthSection.projectManage")}</span>
                </div>
                <div className={classes.item}>
                  <FaCheckCircle color="#01798c" size="24px" />
                  <span>{t("home.fourthSection.dedicatedProduction")}</span>
                </div>
              </div>
              <a href="https://calendly.com/newbrands/informations">
                  <button className={classes.btn}>
                    {t("home.fourthSection.select")}
                  </button>
              </a>
            </div>
          </div>
        </div>
        <div className={classes.column}>
          <div className={classes.card}>
            <div className={classes.row}>
              <div className={classes.firstColumn}>
                <h3>{t("home.fourthSection.0perMonth")}</h3>
                <span>{t("home.fourthSection.0description")}</span>
              </div>
              <div className={classes.listColumn}>
                <div className={classes.item}>
                  <FaCheckCircle color="#FFF" size="24px" />
                  <span>{t("home.fourthSection.sample")}</span>
                </div>
                <div className={classes.item}>
                  <FaCheckCircle color="#FFF" size="24px" />
                  <span>{t("home.fourthSection.commands")}</span>
                </div>
                <div className={classes.item}>
                  <FaCheckCircle color="#FFF" size="24px" />
                  <span>{t("home.fourthSection.monitoring")}</span>
                </div>
              </div>
              <div className={classes.listColumn}>
                <div className={classes.item}>
                  <FaCheckCircle color="#FFF" size="24px" />
                  <span>{t("home.fourthSection.strategy")}</span>
                </div>
                <div className={classes.item}>
                  <FaTimesCircle color="#FFF" size="24px" />
                  <span>{t("home.fourthSection.projectManage")}</span>
                </div>
                <div className={classes.item}>
                  <FaTimesCircle color="#FFF" size="24px" />
                  <span>{t("home.fourthSection.dedicatedProduction")}</span>
                </div>
              </div>
              <a href="https://calendly.com/newbrands/informations">
                  <button className={classes.btn}>
                    {t("home.fourthSection.select")}
                  </button>
              </a>
            </div>
          </div>
        </div>
        <div className={classes.column}>
          <div className={classes.card}>
            <div className={classes.lastRow}>
              <div className={classes.firstColumn}>
                <h6>{t("home.fourthSection.specialPricing")}</h6>
                <h3>{t("home.fourthSection.incubated")}</h3>
              </div>
              <div className={classes.listColumn}>
                <span>{t("home.fourthSection.incubatedText")}</span>
              </div>
              <button className={`${classes.btn} ${classes.disabledBtn}`} >
                {t("home.secondSection.soonAvailable")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FourthSection;
