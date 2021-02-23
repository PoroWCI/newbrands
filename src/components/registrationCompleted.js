import payementSuccessImg from '../assets/img/paymentsuccess.png'
import Checkmark from '../assets/img/checkmarkround.svg'
import classes from '../assets/paymentcomplete.module.css'
import { Route } from "react-router-dom"

function RegisterCompleted() {
    return (
        <div className={classes.container}>
            <div className={classes.contentDiv}>
                <div className={classes.dottedDiv}>
                    <div className={classes.MainDiv}>
                        <div className={classes.mainDivContent}>
                            <h1>
                                <img src={Checkmark} />
                                Inscription prise en compte, merci !
                            </h1>
                            <button className={classes.whiteBtn}>Mon compte</button>
                        </div>
                    </div>
                    <span className={classes.lengthSpan}>46</span>
                </div>
                <div className={classes.imgDiv}>
                    <img className={classes.img} src={payementSuccessImg} />
                </div>
            </div>
            <p className={classes.tagline}>
                Nous espérons que notre offre correspondra à vos espèrances,
                celle-ci peut toujours être renégociée par téléphone avec l’un de nos conseillers.
                Sachez que, nos services et tarifs sont agiles afin de toujours s’adapter à votre activité et besoins.
            </p>
            <div className={classes.btnDiv}>
                <Route
                    render={({ history }) => (
                        <button className={classes.outlineBtn} onClick={() => history.goBack()}>
                            Annuler
                        </button>
                    )}
                />
                <Route
                    render={({ history }) => (
                        <button className={classes.endBtn} onClick={() => history.push('command-success')}>
                            Terminer !
                        </button>
                    )}
                />
            </div>
        </div>
    )
}

export default RegisterCompleted;
