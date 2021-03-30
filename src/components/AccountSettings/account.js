import classes from "./account.module.css"
import { useState, useEffect } from 'react'
import { IoSettingsOutline } from 'react-icons/io5'
import { AiOutlineLoading } from 'react-icons/ai'
import Picture from '../../assets/img/profilePicture.jpg'
import axios from 'axios'

function Dashboard() {
    const [data, setData] = useState('');
    const [autocomplete, setAutoComplete] = useState(false)
    const [inputs, setInputs] = useState({ siege: { adresse_ligne_1: '', code_postal: '', siret_formate: '', adresse_ligne_2: '', ville: '' } });
    const [disabledInputs, setDisabledInputs] = useState(false);
    const [inputsPlaceholder, setInputsPlaceholder] = useState({ siege: '' });
    const [result, setResult] = useState([]);
    const [loading, setLoading] = useState('');

    /* Handling API */
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            getData(data)
        }
    }

    useEffect(() => {
        if (data.length > 0) {
            const timeOutId = setTimeout(() => {
                getData(data);
                setLoading('');
            }, 1500);
            return () => { clearTimeout(timeOutId) };
        }
    }, [data]);

    const handleOnChange = (e) => {
        if (e.target.value === '') {
            setInputs({ siege: { adresse_ligne_1: ' ', code_postal: '', siret_formate: ' ', adresse_ligne_2: ' ', ville: ' ' } })
            setDisabledInputs(false)
        }
        if (data !== e.target.value) {
            setAutoComplete(false)
            setDisabledInputs(false)
            setLoading('Recherche...')
            setData(e.target.value);
        }
        else if (inputs.length > 0 && inputs.siren.length > 0) {
            setAutoComplete(false)
        }
    }

    const getData = async (query) => {
        const results = await axios(
            `https://suggestions.pappers.fr/v2?q=${query}`,
        )
        setResult(results.data.resultats_nom_entreprise)
    }

    const getDataFromSiret = async (query, isSiret) => {
        let resultsSiret = []
        if (isSiret)
        {
            if(query.length === 14)
            resultsSiret = await axios(
                `https://api.pappers.fr/v2/entreprise?api_token=4903a4d9aad033da2d7057e8c961859b2053fd859d86494b&siret=${query}`,
            )
            else return false
        }
        else
            resultsSiret = await axios(
                `https://api.pappers.fr/v2/entreprise?api_token=4903a4d9aad033da2d7057e8c961859b2053fd859d86494b&siret=${query.siege.siret}`,
            )

        setDisabledInputs(true)
        setData(resultsSiret.data.nom_entreprise)
        setInputs(resultsSiret.data)
        setInputsPlaceholder({ siege: { adresse_ligne_1: ' ', code_postal: '', siret_formate: ' ', adresse_ligne_2: ' ', ville: ' ' } })
        setAutoComplete(true)
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
                            <div className={classes.inputDiv}>
                                <input type="text" value={data} onChange={handleOnChange} onKeyDown={(e) => handleKeyDown(e)} />
                                <label>Raison sociale</label>
                                {data.length > 0 && autocomplete === false && <>
                                    <div className={classes.autoCompleteDiv}>
                                        <ul>
                                            {loading.length > 0 && <>
                                                <AiOutlineLoading className={classes.loading} />
                                            </>}
                                            {result.length > 0 && result.map((item, index) => {
                                                return (
                                                    <li key={index} onMouseOver={() => setInputsPlaceholder(item)} onClick={() => { getDataFromSiret(item, false); setResult([]); setAutoComplete(false) }}>
                                                        <div className={classes.flexDiv}>
                                                            <h4>{item.nom_entreprise}</h4>
                                                        </div>
                                                        <div>
                                                            {item.siege.code_postal ? <>
                                                                <span>({item.siege.code_postal})</span>
                                                            </> : null}
                                                            <span className={classes.libelle}>{item.libelle_code_naf}</span>
                                                        </div>
                                                    </li>
                                                )
                                            })}
                                        </ul>
                                    </div></>}
                            </div>
                            <div className={classes.inputDiv}>
                                <input type="text"
                                    name="address1"
                                    placeholder={inputsPlaceholder.siege.adresse_ligne_1}
                                    disabled={disabledInputs}
                                    defaultValue={inputs.siege.adresse_ligne_1}
                                />
                                <label>Adresse</label>
                            </div>
                            <div className={classes.inputDiv}>
                                <input type="number"
                                    name="zip"
                                    placeholder={inputsPlaceholder.siege.code_postal}
                                    disabled={disabledInputs}
                                    defaultValue={inputs.siege.code_postal}
                                />
                                <label>Code postal</label>
                            </div>
                        </div>
                        <div className={classes.formRight}>
                            <div className={classes.inputDiv}>
                                <input type="text"
                                    name="siret"
                                    placeholder={inputsPlaceholder.siege.siret_formate}
                                    disabled={disabledInputs}
                                    defaultValue={inputs.siege.siret_formate}
                                    onChange={(e) => getDataFromSiret(e.target.value, true)}
                                />
                                <label>SIRET</label>
                            </div>
                            <div className={classes.inputDiv}>
                                <input
                                    type="text"
                                    name="address2"
                                    placeholder={inputsPlaceholder.siege.adresse_ligne_1}
                                    disabled={disabledInputs}
                                    defaultValue={inputs.siege.adresse_ligne_2 ? inputs.siege.adresse_ligne_2 : ''}
                                />
                                <label>Complément</label>
                            </div>
                            <div className={classes.inputDiv}>
                                <input
                                    type="text"
                                    name="city"
                                    placeholder={inputsPlaceholder.siege.ville}
                                    disabled={disabledInputs}
                                    defaultValue={inputs.siege.ville}
                                />
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
                                    <input type="text" placeholder={inputs.nom_entreprise} />
                                    <label>Raison sociale</label>
                                </div>
                                <div className={classes.inputDiv}>
                                    <input type="text" placeholder={inputs.siege.siret_formate} />
                                    <label>SIRET</label>
                                </div>
                            </div>
                            <div className={classes.inputDiv}>
                                <input type="text" placeholder={inputs.siege.adresse_ligne_1} />
                                <label>Adresse</label>
                            </div>
                            <div className={classes.inputDiv}>
                                <input type="number" placeholder={inputs.siege.code_postal} />
                                <label>Code postal</label>
                            </div>
                        </div>
                        <div className={classes.formRight}>
                            <div className={classes.inputDiv}>
                                <input type="text" placeholder={inputs.siege.adresse_ligne_2} />
                                <label>Complément</label>
                            </div>
                            <div className={classes.inputDiv}>
                                <input type="text" placeholder={inputs.siege.ville} />
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
                                    <input type="text" />
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