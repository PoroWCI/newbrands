import commandConfirmedImg from '../../assets/img/commandconfirmed.png'
import classes from './signin.module.css'
import { Route } from "react-router-dom"

function Login() {
    return (
        <div className={classes.container}>
            <div className={classes.contentDiv}>
                <div className={classes.dottedDiv}>
                    <div className={classes.MainDiv}>
                        <div className={classes.mainDivContent}>
                            <h1>Connexion</h1>
                            <div className={classes.subtitleDiv}>
                                <h2>Ravis de vous revoir</h2>
                                <a href="signup">Pas de compte ?</a>
                            </div>
                            <p>Entrez vos identifiants de connexion afin d'accéder à votre compte NewBrands !</p>
                            <div className={classes.inputDiv}>
                                <input type="mail" id="mail" />
                                <label htmlFor="mail">Adresse e-mail</label>
                            </div>
                            <div className={classes.inputDiv}>
                                <input type="password" id="password" />
                                <label htmlFor="password">Mot de passe</label>
                            </div>
                            <Route render={({ history }) => (
                                <button className={classes.filledBtn} onClick={() => history.push('/dashboard/my-commands')}>Connexion</button>
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

export default Login;
