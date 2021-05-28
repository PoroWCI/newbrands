// import { useTranslation } from "react-i18next";
import classes from './billing.module.css'
import SidePricing from './sidePricing';
import { useState } from 'react'
import { Route } from 'react-router-dom'
import { RiVisaLine } from 'react-icons/ri'
import Mastercard from '../../assets/img/mastercard.svg'
import axios from 'axios';
import { API } from '../../config';

function Billing() {
  const [monetico, setMonetico] = useState("")
  const loggedIn = localStorage.getItem('session') ? localStorage.getItem('session') : "";
  async function FetchData() {
    await axios.post(`${API}/monetico/payement`, { headers: {"Authorization" : `Bearer ${loggedIn}`} }).then((res) => {
      setMonetico(res.data)
    })
  }

  // const { t } = useTranslation('common');
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
          <h1>Méthode de paiement</h1>
          <span>Effectuez un paiement sécurisé par carte bancaire via notre partenaire <span className={classes.bold}>Monetico</span></span>
          <ul className={classes.paymentMethods}>
            <li className={classes.method}> 
              <a href={monetico?.url} target="blank">
              <RiVisaLine className={classes.visa} onClick={() => FetchData()} />
              <img className={classes.mastercard} src={Mastercard} alt="mastercard" />
              </a>
            </li>
          </ul>

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