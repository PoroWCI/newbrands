import stylism from "../../assets/img/stylism.svg";
import ecology from "../../assets/img/ecology.svg";
import developpment from "../../assets/img/developpement.svg";
import production from "../../assets/img/production.svg";
import transports from "../../assets/img/transports.svg";
import recycling from "../../assets/img/recycling.svg";
import classes from "./secondSection.module.css";
import { useTranslation } from "react-i18next";

function SecondSection() {
  const { t } = useTranslation("common");
  return (
    <div className={classes.container}>
      <div>
        <div className={classes.introduction}>
          <h2 className={classes.h2}>{t("home.secondSection.title")}</h2>
          <span className={classes.lightText}>
            {t("home.secondSection.subtitle")}
          </span>
        </div>
      </div>
      <div className={classes.grid}>
        <div className={classes.row}>
          <div className={classes.tile}>
            <div>
              <img src={stylism} alt="Stylisme" />
              <h5>#{t("home.secondSection.stylismTitle")}</h5>
              <p className={classes.lightText}>
                {t("home.secondSection.stylism1")}
                <span>{t("home.secondSection.stylism2")}</span>
                {t("home.secondSection.stylism3")}
              </p>
            </div>
          </div>
          <div className={classes.tile}>
            <div>
              <img src={ecology} alt="Éthique" />
              <h5>#{t("home.secondSection.ethicalTitle")}</h5>
              <p className={classes.lightText}>
                {t("home.secondSection.ethical1")}
                <span>{t("home.secondSection.ethical2")}</span>
              </p>
            </div>
          </div>
          <div className={classes.tile}>
            <div>
              <img src={developpment} alt="Développement" />
              <h5>#{t("home.secondSection.developmentTitle")}</h5>
              <p className={classes.lightText}>
                {t("home.secondSection.development1")}
                <span>{t("home.secondSection.development2")}</span>
                {t("home.secondSection.development3")}
              </p>
            </div>
          </div>
        </div>
        <div className={classes.row}>
          <div className={classes.tile}>
            <div>
              <img src={production} alt="Production" />
              <h5>#{t("home.secondSection.productionTitle")}</h5>
              <p className={classes.lightText}>
                {t("home.secondSection.production1")}
                <span>{t("home.secondSection.production2")}</span>
                {t("home.secondSection.production3")}
              </p>
            </div>
          </div>
          <div className={classes.tile}>
            <div>
              <img src={transports} alt="Transports" />
              <h5>#{t("home.secondSection.optimisationTitle")}</h5>
              <p className={classes.lightText}>
                {t("home.secondSection.optimisation1")}
                <span>{t("home.secondSection.optimisation2")}</span>
              </p>
            </div>
          </div>
          <div className={classes.tile}>
            <div className={classes.soon}>
              <span className={classes.soonText}>
                <img src={recycling} alt="Recyclage" />
                {t("home.secondSection.soonAvailable")}
              </span>
              <h5>#{t("home.secondSection.recyclingTitle")}</h5>
              <p className={classes.lightText}>
                {t("home.secondSection.recycling1")}
                <span>{t("home.secondSection.recycling2")}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SecondSection;
