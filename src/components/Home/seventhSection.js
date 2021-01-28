import classes from "../../assets/seventhSection.module.css";
import frenchTech from "../../assets/img/french-tech-logo-png-1.png";
import frenchImpact from "../../assets/img/Logo_FrenchImpact_RVB_Web.webp";
import techForGood from "../../assets/img/tech-for-good.png";
import capDigital from "../../assets/img/cap-digital-1200x500.png";
import bpiFrance from "../../assets/img/bpifrance.png"

function seventhSection() {
    return (
        <div>
            <ul className={classes.logoList}>
                <li><h4 className={classes.text}>Avec le soutien de</h4></li>
                <li><img src={frenchTech} /></li>
                <li><img src={frenchImpact} /></li>
                <li><img src={techForGood} /></li>
                <li><img src={capDigital} /></li>
                <li><img src={bpiFrance} /></li>
            </ul>
        </div>
    )
}

export default seventhSection;