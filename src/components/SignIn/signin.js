import commandConfirmedImg from '../../assets/img/commandconfirmed.png'
import classes from './signin.module.css'
import { useState } from 'react'
import axios from 'axios'
import { API } from '../../config'
import { Redirect } from 'react-router'

function Login() {
    const [loggedIn, setLoggedIn] = useState(false)
    const [login, setLogin] = useState("Connexion")
    const [error, setError] = useState("")
    const [mail, setMail] = useState("")
    const [password, setPassword] = useState("")
    
    const handleLogin = (e) => {
        e.preventDefault()
        setLogin("Connexion en cours...")
        const request = { username: mail, password: password }
        axios.post(API + "/login_check", request).then(
            (res) => {
                console.log(res.data)
                console.log(res)
                localStorage.clear();
                window.localStorage.setItem("session", res.data.token);
                setError("");
                setLoggedIn(true)
            }
            ).catch(
                    setError("Une erreur s'est produite. Veuillez vérifier vos identifiants et rééssayer.")
                )
                console.log(window.localStorage)
    }
    if (loggedIn) 
        return (<Redirect to ="/dashboard" />)
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
                            <p>Entrez votre adresse e-mail afin d'accéder à votre compte NewBrands !</p>
                            <form onSubmit={(e) => handleLogin(e)}>
                                <div className={classes.inputDiv}>
                                    <input type="mail" id="mail" value={mail} onChange={(e) => setMail(e.target.value)} required />
                                    <label htmlFor="mail">Adresse e-mail</label>
                                </div>
                                <div className={classes.inputDiv}>
                                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} id="password" required />
                                    <label htmlFor="password">Mot de passe</label>
                                </div>
                                <button className={classes.filledBtn} onClick={(e) => handleLogin(e)}>{login}</button>
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
