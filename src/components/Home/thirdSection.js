import projectSample from "../../assets/img/project-sample.png";
import projectCreation from "../../assets/img/project-creation.png";
import classes from "./thirdSection.module.css";
import { useTranslation } from "react-i18next";

function ThirdSection() {
  const { t } = useTranslation("common");
  return (
    <div className={classes.container}>
      <div>
        <h2 className={classes.h2}>{t("home.thirdSection.title")}</h2>
        <div className={classes.firstContainer}>
          <div className={classes.textLeft}>
            <h2>{t("home.thirdSection.subtitle")}</h2>
            <p>{t("home.thirdSection.text")}</p>
            <a href="/demo">
              {t("home.thirdSection.demo")}
              <span>{">"}</span>
            </a>
          </div>
          <img className={classes.rightImg} src={projectSample} alt="Project" />
          <div className={classes.secondContainer}>
            <img
              className={classes.rightImg}
              src={projectCreation}
              alt="Project creation"
            />
            <div className={classes.textLeft}>
              <h2> {t("home.thirdSection.projectCreationTitle")}</h2>
              <div>
                <p>{t("home.thirdSection.projectCreation")}</p>
                <a href="/demo">
                  {t("home.thirdSection.demo")}
                  <span>{">"}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ThirdSection;
