import payementSuccessImg from '../../assets/img/paymentsuccess.png'
import Checkmark from '../../assets/img/checkmarkround.svg'
import classes from './paymentcomplete.module.css'
import { Route } from "react-router-dom"

function PaymentComplet() {
    return (
        <div className={classes.container}>
            <div className={classes.contentDiv}>
                <div className={classes.dottedDiv}>
                    <div className={classes.MainDiv}>
                        <div className={classes.mainDivContent}>
                            <h1>
                                <img src={Checkmark} alt="checkmark" />
                                Paiement validé, merci !
                            </h1>
                            <Route
                                render={({ history }) => (
                                    <button className={classes.whiteBtn} onClick={() => history.push('command-success')}>
                                        Mon compte
                                    </button>
                                )}
                            />
                        </div>
                    </div>
                    <span className={classes.lengthSpan}>46</span>
                </div>
                <div className={classes.imgDiv}>
                    <img className={classes.img} src={payementSuccessImg} alt="success" />
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
                        <span className={classes.endSpan}>
                            Terminé !
                        </span>
            </div>
        </div>
    )
}

export default PaymentComplet;
