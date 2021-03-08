import classes from "./fifthSection.module.css";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
} from "@reach/accordion";
import { BiChevronDown } from "react-icons/bi";
import { useTranslation } from "react-i18next";

function FifthSection() {
  const { t } = useTranslation("common");
  return (
    <section className={classes.container}>
      <div>
        <div>
          <h2 className={classes.h2}>{t("home.fifthSection.title")}</h2>
          <p className={classes.introduction}>
            {t("home.fifthSection.subtitle")}
            <span>{t("contact.mail")}</span>
          </p>
        </div>
        <div className={classes.faqContainer}>
          <div>
            <Accordion
              collapsible
              multiple
              className={classes.questionContainer}
            >
              <AccordionItem className={classes.borderedContainer}>
                <h3 className={classes.questionTitle}>
                  <AccordionButton className={classes.titleBtn}>
                    <h5>{t("home.fifthSection.whatsNewbrands")}</h5>
                    <BiChevronDown className={classes.arrow} size="24" />
                  </AccordionButton>
                </h3>
                <AccordionPanel>
                  <p>{t("home.fifthSection.whatsNewbrandsDescription")}</p>
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem className={classes.borderedContainer}>
                <h3 className={classes.questionTitle}>
                  <AccordionButton className={classes.titleBtn}>
                    <h5>{t("home.fifthSection.timeToWork")}</h5>
                    <BiChevronDown className={classes.arrow} size="24" />
                  </AccordionButton>
                </h3>
                <AccordionPanel className={classes.collapsibleContent}>
                  <p>{t("home.fifthSection.timeToWorkDescription")}</p>
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem className={classes.borderedContainer}>
                <h3 className={classes.questionTitle}>
                  <AccordionButton className={classes.titleBtn}>
                    <h5>{t("home.fifthSection.timeToCraft")}</h5>
                    <BiChevronDown className={classes.arrow} size="24" />
                  </AccordionButton>
                </h3>
                <AccordionPanel className={classes.collapsibleContent}>
                  <p>{t("home.fifthSection.timeToCraftDescription")}</p>
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem className={classes.borderedContainer}>
                <h3 className={classes.questionTitle}>
                  <AccordionButton className={classes.titleBtn}>
                    <h5>{t("home.fifthSection.whyNewbrands")}</h5>
                    <BiChevronDown className={classes.arrow} size="24" />
                  </AccordionButton>
                </h3>
                <AccordionPanel className={classes.collapsibleContent}>
                  <p>{t("home.fifthSection.whyNewbrandsDescription")}</p>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FifthSection;
