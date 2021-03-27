import classes from "./account.module.css"
import { useState } from 'react'
import { IoSettingsOutline } from 'react-icons/io5'
import Picture from '../../assets/img/profilePicture.jpg'

function Dashboard(props) {
    const [siret, setSiret] = useState('')
    const [hqAddress, setHqAddress] = useState({ social: null, siret: null, address1: null, address2: null, zip: null, city: null });
    // const [billingAddress, setBillingAddress] = useState({social: null, siret: null, address1: null, address2: null, zip: null, city: null});
    const siretHandle = (e) => {
        var val = e.target.value;
        const valArray = val.split(' ').join('').split('');
        var valSpace = val.split("")

        // to work with backspace
        if (valSpace[valSpace.length - 1] === ' ') {
            var valSpaceN = valSpace.slice(0, -2)
            val = valSpaceN.join("")
            setSiret(val);
            return;
        }

        if (isNaN(valArray.join('')))
            return;
        if (valArray.length === 10)
            return
        if (valArray.length % 3 === 0 && valArray.length < 8 && valArray.length > 0) {
            setSiret(e.target.value + " ");
        } else {

            setSiret(e.target.value)
        }
    }
    return (
        <div className={classes.container}>
            <div className={classes.mainContent}>
                <div className={classes.profileInfos}>
                    <div className={classes.profilePictureDiv}>
                        <img className={classes.profilePicture} src={Picture} alt="profile" />
                        <IoSettingsOutline className={classes.changePicture} color="#FFF" />
                    </div>
                    <div className={classes.profileName}>
                        <h2>John Dupont</h2>
                        <h2><span className={classes.companyName}>Zara</span><span className={classes.country}>France</span></h2>
                    </div>
                </div>
                <div className={classes.formContainer}>
                    <h2>Adresse du siège social</h2>
                    <span>Merci de confirmer vos coordonnées servant à la facturation de votre commande</span>
                    <form>
                        <div className={classes.formLeft}>
                            <div className={classes.firstRow}>
                                <div className={classes.inputDiv}>
                                    <input type="text" onChange={(e) => setHqAddress({ ...hqAddress, social: e.target.value })} />
                                    <label>Raison sociale</label>
                                </div>
                                <div className={classes.inputDiv}>
                                    <input type="text" value={siret} onChange={siretHandle} maxLength={13} />
                                    <label>SIRET</label>
                                </div>
                            </div>
                            <div className={classes.inputDiv}>
                                <input type="text" onChange={(e) => setHqAddress({ ...hqAddress, address1: e.target.value })} />
                                <label>Adresse</label>
                            </div>
                            <div className={classes.inputDiv}>
                                <input type="number" onChange={(e) => setHqAddress({ ...hqAddress, zip: e.target.value })} />
                                <label>Code postal</label>
                            </div>
                        </div>
                        <div className={classes.formRight}>
                            <div className={classes.inputDiv}>
                                <input type="text" onChange={(e) => setHqAddress({ ...hqAddress, address2: e.target.value })} />
                                <label>Complément</label>
                            </div>
                            <div className={classes.inputDiv}>
                                <input type="text" onChange={(e) => setHqAddress({ ...hqAddress, city: e.target.value })} />
                                <label>Ville</label>
                            </div>
                        </div>
                    </form>
                    <div className={classes.inline}>
                        <div className={classes.confirmed}></div> <h3>K-BIS</h3>
                    </div>
                    <div className={classes.uploadLogoDiv}>
                        <h3>Pensez à télécharger votre logo</h3>
                        <span>Taille minimum 400 x 400 pixels et de 2 Mo maximum au format JPG ou PNG</span>
                        <div className={classes.uploadFile}>
                            <h5>Add file</h5>
                            <span>or drop files here</span>
                            <input type="file" />
                        </div>
                    </div>
                    <h2>Adresse de facturation</h2>
                    <span>À renseigner uniquement si différente du siège social</span>
                    <form>
                        <div className={classes.formLeft}>
                            <div className={classes.firstRow}>
                                <div className={classes.inputDiv}>
                                    <input type="text" placeholder={hqAddress.social} />
                                    <label>Raison sociale</label>
                                </div>
                                <div className={classes.inputDiv}>
                                    <input type="text" value={siret} onChange={siretHandle} maxLength={13} />
                                    <label>SIRET</label>
                                </div>
                            </div>
                            <div className={classes.inputDiv}>
                                <input type="text" placeholder={hqAddress.address1} />
                                <label>Adresse</label>
                            </div>
                            <div className={classes.inputDiv}>
                                <input type="number" placeholder={hqAddress.zip} />
                                <label>Code postal</label>
                            </div>
                        </div>
                        <div className={classes.formRight}>
                            <div className={classes.inputDiv}>
                                <input type="text" placeholder={hqAddress.address2} />
                                <label>Complément</label>
                            </div>
                            <div className={classes.inputDiv}>
                                <input type="text" placeholder={hqAddress.city} />
                                <label>Ville</label>
                            </div>
                        </div>
                    </form>
                    <h2>Informations personnelles</h2>
                    <span>Merci de confirmer vos coordonnées servant à la facturation de votre commande</span>
                    <form>
                        <div className={classes.formLeft}>
                            <div className={classes.firstRow}>
                                <div className={classes.inputDiv}>
                                    <input type="text" />
                                    <label>Nom</label>
                                </div>
                                <div className={classes.inputDiv}>
                                    <input type="text" value={siret} onChange={siretHandle} maxLength={13} />
                                    <label>Prénom</label>
                                </div>
                            </div>
                            <div className={classes.inputDiv}>
                                <input type="text" />
                                <label>Adresse</label>
                            </div>
                            <div className={classes.inputDiv}>
                                <input type="number" />
                                <label>Code postal</label>
                            </div>
                            <div className={classes.inputDiv}>
                                <input type="mail" />
                                <label>Adresse e-mail</label>
                            </div>
                        </div>
                        <div className={classes.formRight}>
                            <div className={classes.inputDiv}>
                                <select className={classes.selectInput}>
                                    <option></option>
                                    <option>Fondateur</option>
                                </select>
                                <label>Role</label>
                            </div>
                            <div className={classes.inputDiv}>
                                <input type="text" />
                                <label>Ville</label>
                            </div>
                            <div className={classes.inputDiv}>
                                <input type="text" />
                                <label>Numéro de téléphone</label>
                            </div>
                        </div>
                    </form>
                    <div className={classes.inline}>
                       <div className={classes.confirmed}></div><h3>Document d'identité</h3>
                    </div>
                    
                    <span className={classes.footer}>
                        Conformément au Règlement Général sur la Protection des Données (RGPD), les documents transmis seront supprimés après validation de votre inscription. Pour en savoir plus, rendez-vous dans nos Conditions Particulières et Conditions Générales de Services ainsi que notre Politique de
                        Confidentialité
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;