import { useTranslation } from "react-i18next";
import classes from './billing.module.css'
import SidePricing from './sidePricing';
import { Route } from 'react-router-dom'

function Billing() {
  const { t } = useTranslation('common');
  return (
    <div className={classes.container}>
      <div className={classes.contentContainer}>
        <div className={classes.leftCol}>
          <h1>Adresse de facturation</h1>
          <span>Merci de confirmer vos coordonnées servant à la facturation de votre commande</span>
          <form className={classes.billingForm}>
            <div>
              <div className={classes.billingNames}>
                <div className={classes.inputDiv}>
                  <input type="text" id="surname" />
                  <label htmlFor="surname">Nom</label>
                </div>
                <div className={classes.inputDiv}>
                  <input type="text" id="name" />
                  <label htmlFor="name">Prénom</label>
                </div>
              </div>
              <div className={classes.inputDiv}>
                <input type="text" id="address" />
                <label htmlFor="address">Adresse</label>
              </div>
              <div className={classes.inputDiv}>
                <input type="number" id="zipCode" min="0" max="99999" />
                <label htmlFor="zipCode">Code postal</label>
              </div>
            </div>
            <div className={classes.secondCol}>
              <div className={classes.inputDiv}>
                <input type="text" id="completeAddress" />
                <label htmlFor="completeAddress">Complément</label>
              </div>
              <div className={classes.inputDiv}>
                <input type="text" id="city" />
                <label htmlFor="city">Ville</label>
              </div>
            </div>
          </form>
          <h1>Signature du contrat</h1>
          <span>Pour accepter notre proposition commercial, vous devez signer le contrat via notre partenaire sécurisé <bold>DocuSign</bold></span>
          <button className={classes.signContract}>Signer mon contrat</button>
        </div>
        <div className={classes.sideContainer}>
          <SidePricing />
          <Route  render={({ history }) => (
            <button className={classes.btnPayment} onClick={() => history.push('payment-success')}>Paiement</button>
          )} />
        </div>
      </div>
    </div>
  );
}

export default Billing;