import commandConfirmedImg from '../../assets/img/commandconfirmed.png'
import classes from './signin.module.css'
import { useState } from 'react'
import {API} from '../../config'
import axios from 'axios'

function Login() {
    const [login, setLogin] = useState("Connexion")
    // const [username, setUsername] = useState("")
    // const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    const handleSignIn = async (e) => {
        e && e.preventDefault()
        console.log(API)
        console.log(await axios.post(`${API}/login`))  
        setLogin("Loading")
        setTimeout(() => setLogin("Redirecting..."), 1500)
        setTimeout(() => 
        {
            setLogin("Connexion")
            setError("Votre mot de passe est incorrect.")
        }, 2500)
    }
    return (
        <div className={classes.container}>
            <div className={classes.contentDiv}>
                <div className={classes.dottedDiv}>
                    <div className={classes.MainDiv}>
                        <div className={classes.mainDivContent}>
                            <h1>Connexion</h1>
                            <div className={classes.subtitleDiv}>
                                <h2>Ravis de vous revoir</h2>
                            </div>
                            <p>Entrez vos identifiants de connexion afin d'accéder à votre compte NewBrands !</p>
                            <form onSubmit={(e) => handleSignIn(e)}>
                                <div className={classes.inputDiv}>
                                    <input type="mail" id="mail" required />
                                    <label htmlFor="mail">Adresse e-mail</label>
                                </div>
                                <div className={classes.inputDiv}>
                                    <input type="password" id="password" required />
                                    <label htmlFor="password">Mot de passe</label>
                                </div>
                            <button className={classes.filledBtn} onClick={() => handleSignIn()}>{login}</button>
                            {error}
                            </form>
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
