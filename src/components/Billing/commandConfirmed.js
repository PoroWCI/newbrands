import commandConfirmedImg from '../../assets/img/commandconfirmed.png'
import classes from './commandconfirmed.module.css'
import { Route } from "react-router-dom"

function CommandConfirmed() {
    return (
        <div className={classes.container}>
            <div className={classes.contentDiv}>
                <div className={classes.dottedDiv}>
                    <div className={classes.MainDiv}>
                        <div className={classes.mainDivContent}>
                            <h1>
                                John Dupont <span className={classes.companyName}>Zara</span><span className={classes.country}>France</span>
                            </h1>
                            <p>Merci d’ajouter un mot de passe pour créer votre compte afin d’accéder à NewBrands !</p>
                            <div className={classes.inputDiv}>
                                <input type="password" id="password" />
                                <label htmlFor="password">Mot de passe</label>
                            </div>
                            <Route render={({ history }) => (
                                <button className={classes.filledBtn} onClick={() => history.push('/dashboard/my-commands')}>Valider le mot de passe</button>
                            )} />
                        </div>
                    </div>
                    <span className={classes.lengthSpan}>46</span>
                </div>
                <div className={classes.imgDiv}>
                    <img className={classes.img} src={commandConfirmedImg} alt="confirmed" />
                </div>
            </div>
        </div>
    )
}

export default CommandConfirmed;
