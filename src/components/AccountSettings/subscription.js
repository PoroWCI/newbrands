import classes from './subscription.module.css'

function Subscription() {
    return (
        <div className={classes.container}>
            <div className={classes.mainContainer}>
                <h2>Adresse du siège social</h2>
                <span>Merci de confirmer vos coordonnées servant à la facturation de votre commande</span>
                <div className={classes.cardContainer}>
                    <div>
                        <h3 className={classes.currentSubscription}>Abonnement actuel :</h3>
                        <span className={classes.price}>GRATUIT 0€/mois</span>
                    </div>
                    <p className={classes.subscriptionDescription}>
                        L’abonnement gratuit vous permet de lancer plusieurs drops ou sourcing en illimité sans le coût fixe d’un abonnement mensuel. À chaque commande effectuer, une commission est facturer calculer sur le volume total de votre commande allant de 7,0% à 17.5%.
                    </p>
                    <button className={classes.blueBtn}>Changer d'abonnement</button>
                </div>
            </div>
        </div>
    )
}

export default Subscription;