import { useTranslation } from "react-i18next";
import classes from './billing.module.css'
import SidePricing from './sidePricing';
import { useState } from 'react'
import { Route } from 'react-router-dom'

function Billing() {
  const { t } = useTranslation('common');
  const [disabled, setDisabled] = useState(true);
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
          <span>Pour accepter notre proposition commercial, vous devez signer le contrat via notre partenaire sécurisé <span className={classes.bold}>DocuSign</span></span>
          <button className={classes.signContract} onClick={() => setDisabled(false)}>Signer mon contrat</button>
        </div>
        <div className={classes.sideContainer}>
          <SidePricing />
          <Route  render={({ history }) => (
            <button className={`${classes.btnPayment} ${disabled === true ? classes.locked : ""}`} onClick={() => history.push('payment-success')}>Paiement</button>
          )} />
          {disabled === true ? <>
          <span className={classes.mustSign}>Vous devez d'abord signer le contrat.</span>
          </>
          : null }
        </div>
      </div>
    </div>
  );
}

export default Billing;