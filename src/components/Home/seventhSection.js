import classes from "./seventhSection.module.css";
import frenchTech from "../../assets/img/french-tech-logo-png-1.png";
import frenchImpact from "../../assets/img/Logo_FrenchImpact_RVB_Web.webp";
import techForGood from "../../assets/img/tech-for-good.png";
import capDigital from "../../assets/img/cap-digital-1200x500.png";
import bpiFrance from "../../assets/img/bpifrance.png";
import { useTranslation } from "react-i18next";

function SeventhSection() {
    const { t } = useTranslation("common");
    return (
        <div>
            <ul className={classes.logoList}>
                <li><h4 className={classes.text}>{t("home.seventhSection.withTheHelp")}</h4></li>
                <li><img src={frenchTech} alt="frenchTech" loading="lazy" /></li>
                <li><img src={frenchImpact} alt="frenchImpact" loading="lazy" /></li>
                <li><img src={techForGood} alt="techForGood" loading="lazy" /></li>
                <li><img src={capDigital} alt="capDigital" loading="lazy" /></li>
                <li><img src={bpiFrance} alt="bpiFrance" loading="lazy" /></li>
            </ul>
        </div>
    )
}

export default SeventhSection;