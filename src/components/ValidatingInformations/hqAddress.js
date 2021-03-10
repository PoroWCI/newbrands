import classes from './hqaddress.module.css'

function HqForm () {
    return (
        <div className={classes.container}>
            <h2>Adresse du siège social</h2>
            <span>Merci de confirmer vos coordonnées servant à la facturation de votre commande</span>
            <form>
                <input type="text" />
                <input type="number" />
                <input type="text" />
                <input type="text" />
                <input type="number" />
                <input type="text" />
            </form>
            <h2>K-BIS</h2>
            <span>Joindre un certificat d’immatriculation de moins de 3 moins</span>
            <button className={classes.whiteBtn}>Joindre</button>
        </div>
    )
}

export default HqForm;