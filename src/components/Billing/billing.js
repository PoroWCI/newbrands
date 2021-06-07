// import { useTranslation } from "react-i18next";
import classes from './billing.module.css'
import SidePricing from './sidePricing';
import { useState } from 'react'
import { Redirect, Route } from 'react-router-dom'
import { RiVisaLine } from 'react-icons/ri'
import Mastercard from '../../assets/img/mastercard.svg'
import axios from 'axios';
import { API } from '../../config';
import { useEffect } from 'react';

function Billing() {
  const [paymentChoose, setPaymentChoose] = useState(1)
  const [monthPayment, setMonthPayment] = useState("")
  const [yearPayment, setYearPayment] = useState("")
  const [typePayment, setTypePayment] = useState("")
  const loggedIn = localStorage.getItem('session') ? localStorage.getItem('session') : "";
  const [userInfos, setUserInfos] = useState({ lastName: "", firstName: "" })
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [address, setAddress] = useState("")
  const [postalCode, setPostalCode] = useState()
  const [complement, setComplement] = useState("")
  const [city, setCity] = useState("")
  const [idCompany, setIdCompany] = useState("")

  // async function getContract() {
  //   await axios.get(`${API}/api/signature/contrat`).then((res) => {
  //     console.log(res)
  //   })
  // }
  function FetchData() {
    const req = { "idUser": localStorage.getItem("userId"), "price": typePayment.priceTTC.replace(' ', ''), "abonnement": true }
    axios.post(`${API}/monetico/payement`, req).then((res) => {
      window.open(res.data.url)
    })
  }

  useEffect(() => {
    axios.get(`${API}/api/user/${localStorage.getItem("userId")}`).then((res) => {
      setUserInfos(res.data)
      setIdCompany(res.data.company[0].id)
      console.log(res.data)
    })
  }, [localStorage.userId])

  useEffect(() => {
    axios.post(`${API}/paiement/panier`, localStorage.getItem('projectId')).then((res) => {
      setYearPayment(res.data.year)
      setMonthPayment(res.data.month)
      setTypePayment(res.data.month)
    })
    // getContract()
  }, [])

  const handleSignature = () => {
    const req = {
      adress: address,
      complement: complement,
      postalCode: parseInt(postalCode),
      city: city,
      idCompany: idCompany
    }
    axios.post(`${API}/api/address/facturation`, req).then((res) => {
      setDisabled(false)
      const request = {
        idUser: localStorage.getItem("userId"),
        price: typePayment.priceTTC.replace(' ', ''),
        duree: paymentChoose
      } 
      axios.post(`${API}/api/signature/contrat`, request).then((result) => {
        window.open(result.data)
      })
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
                  <input type="text" id="surname" defaultValue={userInfos?.lastName} value={lastName} onChange={(e) => setLastName(e.target.value)} />
                  <label htmlFor="surname">Nom</label>
                </div>
                <div className={classes.inputDiv}>
                  <input type="text" id="name" defaultValue={userInfos?.firstName} value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                  <label htmlFor="name">Prénom</label>
                </div>
              </div>
              <div className={classes.inputDiv}>
                <input type="text" id="address" value={address} onChange={(e) => setAddress(e.target.value)} />
                <label htmlFor="address">Adresse</label>
              </div>
              <div className={classes.inputDiv}>
                <input type="number" id="zipCode" min="0" max="99999" value={postalCode} onChange={(e) => setPostalCode(e.target.value)} />
                <label htmlFor="zipCode">Code postal</label>
              </div>
            </div>
            <div className={classes.secondCol}>
              <div className={classes.inputDiv}>
                <input type="text" id="completeAddress" value={complement} onChange={(e) => setComplement(e.target.value)} />
                <label htmlFor="completeAddress">Complément</label>
              </div>
              <div className={classes.inputDiv}>
                <input type="text" id="city" value={city} onChange={(e) => setCity(e.target.value)} />
                <label htmlFor="city">Ville</label>
              </div>
            </div>
          </form>
          <h1>Méthode de paiement</h1>
          <span>Effectuez un paiement sécurisé par carte bancaire via notre partenaire <span className={classes.bold}>Monetico</span></span>
          <ul className={classes.paymentMethods}>
            <li className={classes.method}>
                <RiVisaLine className={classes.visa} />
                <img className={classes.mastercard} src={Mastercard} alt="mastercard" />
   
            </li>
          </ul>
          <span>Type de paiement</span>
          <form>
            <div className={classes.paymentType}>
              <input type="radio" id="mensuel" name="payment" value="mensuel" defaultChecked onClick={() => {setTypePayment(monthPayment); setPaymentChoose(1)}} />
              <label htmlFor="mensuel">Mensuel</label>
              <input type="radio" id="annuel" name="payment" value="annuel" onClick={() => {setTypePayment(yearPayment); setPaymentChoose(0)}} />
              <label htmlFor="annuel">Annuel</label>
            </div>
          </form>

          <h1>Signature du contrat</h1>
          <span>Pour accepter notre proposition commercial, vous devez signer le contrat via notre partenaire sécurisé <span className={classes.bold}>DocuSign</span></span>
          <button className={classes.signContract} onClick={() => handleSignature()}>Signer mon contrat</button>
        </div>
        <div className={classes.sideContainer}>
          <SidePricing data={typePayment} />
          <Route render={({ history }) => (
            <button className={`${classes.btnPayment} ${disabled === true ? classes.locked : ""}`} onClick={() => FetchData()}>Paiement</button>
          )} />
          {disabled === true ? <>
            <span className={classes.mustSign}>Vous devez d'abord signer le contrat.</span>
          </>
            : null}
        </div>
      </div>
    </div>
  );
}

export default Billing;