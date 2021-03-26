import classes from './transactions.module.css'
import { BsArrowRight } from 'react-icons/bs'

const treatmentAPI = [
    ["Remboursement", "123456", "Remboursement au titre de votre projet", "Nom projet", "132456", 11333.33],
    ["Paiement CB", "123456", "Paiement au titre de votre abonnement", null, null, -99.99],
    ["Virement bancaire", "123456", "Paiement au titre de votre sourcing de matière", null, "123456", -11333.33],
    ["Virement bancaire", "123456", "Paiement au titre de votre projet", "Nom projet", "123456", -11333.33],
]
const passedAPI = [
    ["Mardi 14 février 2021", "Remboursement", "123456", "Remboursement au titre de votre projet", "Nom projet", "132456", 11333.33, null],
    ["Lundi 11 Janvier 2021", "Paiement CB", "123456", "Paiement au titre de votre abonnement", null, null, -99.99, null],
    [null, "Virement bancaire", "123456", "Paiement au titre de votre sourcing de matière", null, "123456", -11333.33, "invoiceID"],
    ["Samedi 9 Décembre 2020", "Virement bancaire", "123456", "Paiement au titre de votre projet", "Nom projet", "123456", -11333.33, null],
]

function Transactions() {
    let treatmentCards = [];
    for (const [index, value] of treatmentAPI.entries()) {
        treatmentCards.push(
            <li key={index} className={classes.cardPending}>
                <div>
                    <h4>{value[0]} #{value[1]}</h4>
                    <span className={classes.paymentDescr}>{value[2]}{value[3]}{value[4]}</span>
                </div>
                <span className={classes.price}>{value[5]}€</span>
            </li>
        )
    }
    let passedBills = [];
    for (const [index, value] of passedAPI.entries()) {
        passedBills.push(
            <li key={index} className={classes.cardHistoryContainer}>
                {value[0] !== null ? <>
                    <span className={classes.date}>{value[0]}</span>
                </> : null}
                <div className={classes.cardHistory}>
                    <div>
                        <h4>{value[0]} #{value[1]}</h4>
                        <span className={classes.paymentDescr}>{value[3]}{value[4]}{value[5]}</span>
                    </div>
                    <span className={classes.price}>{value[6]}€</span>
                </div>
                {value[7] !== null ? <>
                    <button className={classes.whiteBtn}>Cliquez ici pour télécharger la facture associée {value[7]}</button>
                </> : null}
            </li>
        )
    }
    return (
        <div className={classes.container}>
            <div className={classes.mainContainer}>
                <h2>Coup d’œil rapide</h2>
                <div className={classes.pendingPayment}>
                    <span>En attente de paiement</span>
                    <div className={classes.hr}></div>
                    <span className={classes.price}>2 246<small>,34</small> €</span>
                </div>
                <a href="/bills" className={classes.seeBills}>Voir les factures en attente de paiement <BsArrowRight /></a>
                <h2>En cours de traitement</h2>
                <ul>
                    {treatmentCards}
                </ul>
                <h2>Terminé</h2>
                <ul>
                    {passedBills}
                </ul>
            </div>
        </div>
    )
}

export default Transactions;