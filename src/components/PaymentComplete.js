import { IoMdCheckmarkCircle } from 'react-icons/io'
import payementSuccessImg from '../assets/img/paymentsuccess.png'
import Checkmark from '../assets/img/checkmarkround.svg'
import classes from '../assets/paymentcomplete.module.css'

function PaymentComplet() {
    return (
        <div className={classes.container}>
            <div className={classes.contentDiv}>
                <div className={classes.dottedDiv}>
                    <div className={classes.MainDiv}>
                        <div className={classes.mainDivContent}>
                            <h1>
                                <img src={Checkmark} />
                                Paiement validé, merci !
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
                <button className={classes.outlineBtn}>Annuler</button>
                <button className={classes.endBtn}>Terminer !</button>
            </div>
        </div>
    )
}

export default PaymentComplet;
