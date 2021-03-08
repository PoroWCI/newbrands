import classes from "./sixthSection.module.css";
import { useTranslation } from "react-i18next";

function SixthSection() {
  const { t } = useTranslation("common");
  return (
    <section className={classes.container}>
      <div className={classes.card}>
        <div className={classes.row}>
          <div className={classes.textContainer}>
            <h2 className={classes.h2}>{t("home.sixthSection.title")}</h2>
            <p>{t("home.sixthSection.subtitle")}</p>
          </div>
          <button className={classes.btn}>
            {t("home.sixthSection.partner")}
          </button>
        </div>
      </div>
    </section>
  );
}

export default SixthSection;
