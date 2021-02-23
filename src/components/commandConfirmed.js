import commandConfirmedImg from '../assets/img/commandconfirmed.png'
import classes from '../assets/commandconfirmed.module.css'
import { Route } from "react-router-dom"

function CommandConfirmed() {
    return (
        <div className={classes.container}>
            <div className={classes.contentDiv}>
                <div className={classes.dottedDiv}>
                    <div className={classes.MainDiv}>
                        <div className={classes.mainDivContent}>
                            <h1>
                                John Dupont <h2>Zara</h2><span className={classes.country}>France</span>
                            </h1>
                            <p>Merci d’ajouter un mot de passe pour créer votre compte afin d’accéder à NewBrands !</p>
                            <div className={classes.inputDiv}>
                                <input type="password" id="password" />
                                <label htmlFor="password">Mot de passe</label>
                            </div>
                            <button className={classes.filledBtn}>Valider le mot de passe</button>
                        </div>
                    </div>
                    <span className={classes.lengthSpan}>46</span>
                </div>
                <div className={classes.imgDiv}>
                    <img className={classes.img} src={commandConfirmedImg} />
                </div>
            </div>
        </div>
    )
}

export default CommandConfirmed;
