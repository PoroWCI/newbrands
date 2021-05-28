import { useState, useEffect } from "react";
import classes from "./form.module.css";
import { AiOutlineLoading } from 'react-icons/ai'
import axios from 'axios'
import { API } from "../../config";

function RegisterForm(props) {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [mail, setMail] = useState("")
    const [mailError, setMailError] = useState("")
    const [phone, setPhone] = useState("")
    const [fonction, setFonction] = useState("")
    const [country, setCountry] = useState("")
    const [companySiret, setCompanySiret] = useState("")
    const [companyName, setCompanyName] = useState('')
    const [loading, setLoading] = useState('');
    const [autocomplete, setAutoComplete] = useState(true)
    const [result, setResult] = useState([]);
    const [req, setReq] = useState()

    /* Check email validity & if in use */
    const checkMail = async () => {
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail))
            return false
        const req = {
            email: mail
        }
        await axios.post(`${API}/api/user/checkemail`, req).then((res) => {
            props.handleBtn(true)
            console.log(res)
        }).catch((error) => {
            if (error.response.data.message === "email déjà existant")
                setMailError(`Il semblerait que vous ayez déjà un compte.`)
        })
    }
    /*******/

    /* Activate submit BTN */
    useEffect(() => {
        props.handleBtn(false)
        if (mail.length > 0 && firstName.length > 0 && lastName.length > 0 && phone > 0
            && companyName.length > 0 && fonction.length > 0 && companySiret.length > 0 && country.length > 0) {
            setReq({
                email: mail,
                firstName: firstName,
                lastName: lastName,
                phone: phone,
                siret: companySiret,
                pays: country,
                fonction: fonction,
                company: companyName
            })
            console.log("QWEPQWDOWQD", req)
            localStorage.setItem('request', JSON.stringify(req))
        }
    }, [mail, firstName, lastName, phone, companyName, fonction, companySiret, country])

    const handleForm = (value, setValue) => {
        setValue(value)
    }
    /******/

    /** Pappers API **/
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            getData(companyName)
        }
    }

    useEffect(() => {
        if (companyName.length > 0) {
            const timeOutId = setTimeout(() => {
                getData(companyName);
                setLoading('');
            }, 1500);
            return () => { clearTimeout(timeOutId) };
        }
    }, [companyName]);

    const handleOnChange = (e) => {
        console.log(companyName, e.target.value)
        if (companyName !== e.target.value) {
            setAutoComplete(false)
            setLoading('Recherche...')
            setCompanyName(e.target.value);
        }
    }

    const getData = async (query) => {
        const results = await axios(
            `https://suggestions.pappers.fr/v2?q=${query}`,
        )
        setResult(results.data.resultats_nom_entreprise)
    }

    const autoComplete = async (query) => {
        setCompanyName(query.denomination)
        setCompanySiret(query.siege.siret_formate)
        setAutoComplete(true)
    }
    /********/

    /** Submit **/
    useEffect(() => {
        return () => {
            axios.post(`${API}/register`, JSON.parse(localStorage.request)).then((res) => {
                localStorage.removeItem("request")
            }).catch((error) => {
                localStorage.removeItem("request")
            })
        }
    }, [])
    /****/

    return (
        <form className={classes.container}>
            <div className={classes.inputDiv}>
                <input type="text" value={firstName} onChange={(e) => handleForm(e.target.value, setFirstName)} />
                <label>Prénom</label>
            </div>
            <div className={classes.inputDiv}>
                <input type="text" value={lastName} onChange={(e) => handleForm(e.target.value, setLastName)} />
                <label>Nom</label>
            </div>
            <div className={`${classes.inputDiv} ${mailError.length > 0 && classes.inputError}`}>
                <input type="mail" value={mail} onChange={(e) => handleForm(e.target.value, setMail)} onBlur={() => checkMail()} />
                <label>Email professionnel</label>
            </div>
            <div className={classes.inputDiv}>
                <input type="phone" value={phone} onChange={(e) => handleForm(e.target.value, setPhone)} />
                <label>Numéro de téléphone</label>
            </div>
            <div className={classes.inputDiv}>
                <input type="text" value={companyName} onChange={handleOnChange} onKeyDown={(e) => handleKeyDown(e)} />
                <label>Société</label>
                {autocomplete === false && <>
                    <div className={classes.autoCompleteDiv}>
                        <ul>
                            {loading.length > 0 && <>
                                <AiOutlineLoading className={classes.loading} />
                            </>}
                            {result.length > 0 && result.map((item, index) => {
                                return (
                                    <li key={index} onClick={() => { autoComplete(item); setResult([]); }}>
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
                <select className={classes.selectInput} value={fonction} onChange={(e) => handleForm(e.target.value, setFonction)}>
                    <option></option>
                    <option>Designer</option>
                    <option>Chef de projet</option>
                    <option>Équipe création</option>
                </select>
                <label>Fonction</label>
            </div>
            <div className={classes.inputDiv}>
                <input type="text" maxLength={13} value={companySiret} onChange={(e) => handleForm(e.target.value, setCompanySiret)} />
                <label>SIRET / DUNS</label>
            </div>
            <div className={classes.inputDiv}>
                <select className={classes.selectInput} value={country} onChange={(e) => handleForm(e.target.value, setCountry)}>
                    <option></option>
                    <optgroup label="North America">
                        <option value="US">United States</option>
                        <option value="UM">United States Minor Outlying Islands</option>
                        <option value="CA">Canada</option>
                        <option value="MX">Mexico</option>
                        <option value="AI">Anguilla</option>
                        <option value="AG">Antigua and Barbuda</option>
                        <option value="AW">Aruba</option>
                        <option value="BS">Bahamas</option>
                        <option value="BB">Barbados</option>
                        <option value="BZ">Belize</option>
                        <option value="BM">Bermuda</option>
                        <option value="VG">British Virgin Islands</option>
                        <option value="KY">Cayman Islands</option>
                        <option value="CR">Costa Rica</option>
                        <option value="CU">Cuba</option>
                        <option value="DM">Dominica</option>
                        <option value="DO">Dominican Republic</option>
                        <option value="SV">El Salvador</option>
                        <option value="GD">Grenada</option>
                        <option value="GP">Guadeloupe</option>
                        <option value="GT">Guatemala</option>
                        <option value="HT">Haiti</option>
                        <option value="HN">Honduras</option>
                        <option value="JM">Jamaica</option>
                        <option value="MQ">Martinique</option>
                        <option value="MS">Montserrat</option>
                        <option value="AN">Netherlands Antilles</option>
                        <option value="NI">Nicaragua</option>
                        <option value="PA">Panama</option>
                        <option value="PR">Puerto Rico</option>
                        <option value="KN">Saint Kitts and Nevis</option>
                        <option value="LC">Saint Lucia</option>
                        <option value="VC">Saint Vincent and the Grenadines</option>
                        <option value="TT">Trinidad and Tobago</option>
                        <option value="TC">Turks and Caicos Islands</option>
                        <option value="VI">US Virgin Islands</option>
                    </optgroup>
                    <optgroup label="South America">
                        <option value="AR">Argentina</option>
                        <option value="BO">Bolivia</option>
                        <option value="BR">Brazil</option>
                        <option value="CL">Chile</option>
                        <option value="CO">Colombia</option>
                        <option value="EC">Ecuador</option>
                        <option value="FK">Falkland Islands (Malvinas)</option>
                        <option value="GF">French Guiana</option>
                        <option value="GY">Guyana</option>
                        <option value="PY">Paraguay</option>
                        <option value="PE">Peru</option>
                        <option value="SR">Suriname</option>
                        <option value="UY">Uruguay</option>
                        <option value="VE">Venezuela</option>
                    </optgroup>
                    <optgroup label="Europe">
                        <option value="GB">United Kingdom</option>
                        <option value="AL">Albania</option>
                        <option value="AD">Andorra</option>
                        <option value="AT">Austria</option>
                        <option value="BY">Belarus</option>
                        <option value="BE">Belgium</option>
                        <option value="BA">Bosnia and Herzegovina</option>
                        <option value="BG">Bulgaria</option>
                        <option value="HR">Croatia (Hrvatska)</option>
                        <option value="CY">Cyprus</option>
                        <option value="CZ">Czech Republic</option>
                        <option value="FR">France</option>
                        <option value="GI">Gibraltar</option>
                        <option value="DE">Germany</option>
                        <option value="GR">Greece</option>
                        <option value="VA">Holy See (Vatican City State)</option>
                        <option value="HU">Hungary</option>
                        <option value="IT">Italy</option>
                        <option value="LI">Liechtenstein</option>
                        <option value="LU">Luxembourg</option>
                        <option value="MK">Macedonia</option>
                        <option value="MT">Malta</option>
                        <option value="MD">Moldova</option>
                        <option value="MC">Monaco</option>
                        <option value="ME">Montenegro</option>
                        <option value="NL">Netherlands</option>
                        <option value="PL">Poland</option>
                        <option value="PT">Portugal</option>
                        <option value="RO">Romania</option>
                        <option value="SM">San Marino</option>
                        <option value="RS">Serbia</option>
                        <option value="SK">Slovakia</option>
                        <option value="SI">Slovenia</option>
                        <option value="ES">Spain</option>
                        <option value="UA">Ukraine</option>
                        <option value="DK">Denmark</option>
                        <option value="EE">Estonia</option>
                        <option value="FO">Faroe Islands</option>
                        <option value="FI">Finland</option>
                        <option value="GL">Greenland</option>
                        <option value="IS">Iceland</option>
                        <option value="IE">Ireland</option>
                        <option value="LV">Latvia</option>
                        <option value="LT">Lithuania</option>
                        <option value="NO">Norway</option>
                        <option value="SJ">Svalbard and Jan Mayen Islands</option>
                        <option value="SE">Sweden</option>
                        <option value="CH">Switzerland</option>
                        <option value="TR">Turkey</option>
                    </optgroup>
                    <optgroup label="Asia">
                        <option value="AF">Afghanistan</option>
                        <option value="AM">Armenia</option>
                        <option value="AZ">Azerbaijan</option>
                        <option value="BH">Bahrain</option>
                        <option value="BD">Bangladesh</option>
                        <option value="BT">Bhutan</option>
                        <option value="IO">British Indian Ocean Territory</option>
                        <option value="BN">Brunei Darussalam</option>
                        <option value="KH">Cambodia</option>
                        <option value="CN">China</option>
                        <option value="CX">Christmas Island</option>
                        <option value="CC">Cocos (Keeling) Islands</option>
                        <option value="GE">Georgia</option>
                        <option value="HK">Hong Kong</option>
                        <option value="IN">India</option>
                        <option value="ID">Indonesia</option>
                        <option value="IR">Iran</option>
                        <option value="IQ">Iraq</option>
                        <option value="IL">Israel</option>
                        <option value="JP">Japan</option>
                        <option value="JO">Jordan</option>
                        <option value="KZ">Kazakhstan</option>
                        <option value="KP">Korea, Democratic People's Republic of</option>
                        <option value="KR">Korea, Republic of</option>
                        <option value="KW">Kuwait</option>
                        <option value="KG">Kyrgyzstan</option>
                        <option value="LA">Lao</option>
                        <option value="LB">Lebanon</option>
                        <option value="MY">Malaysia</option>
                        <option value="MV">Maldives</option>
                        <option value="MN">Mongolia</option>
                        <option value="MM">Myanmar (Burma)</option>
                        <option value="NP">Nepal</option>
                        <option value="OM">Oman</option>
                        <option value="PK">Pakistan</option>
                        <option value="PH">Philippines</option>
                        <option value="QA">Qatar</option>
                        <option value="RU">Russian Federation</option>
                        <option value="SA">Saudi Arabia</option>
                        <option value="SG">Singapore</option>
                        <option value="LK">Sri Lanka</option>
                        <option value="SY">Syria</option>
                        <option value="TW">Taiwan</option>
                        <option value="TJ">Tajikistan</option>
                        <option value="TH">Thailand</option>
                        <option value="TP">East Timor</option>
                        <option value="TM">Turkmenistan</option>
                        <option value="AE">United Arab Emirates</option>
                        <option value="UZ">Uzbekistan</option>
                        <option value="VN">Vietnam</option>
                        <option value="YE">Yemen</option>
                    </optgroup>
                    <optgroup label="Australia / Oceania">
                        <option value="AS">American Samoa</option>
                        <option value="AU">Australia</option>
                        <option value="CK">Cook Islands</option>
                        <option value="FJ">Fiji</option>
                        <option value="PF">French Polynesia (Tahiti)</option>
                        <option value="GU">Guam</option>
                        <option value="KB">Kiribati</option>
                        <option value="MH">Marshall Islands</option>
                        <option value="FM">Micronesia, Federated States of</option>
                        <option value="NR">Nauru</option>
                        <option value="NC">New Caledonia</option>
                        <option value="NZ">New Zealand</option>
                        <option value="NU">Niue</option>
                        <option value="MP">Northern Mariana Islands</option>
                        <option value="PW">Palau</option>
                        <option value="PG">Papua New Guinea</option>
                        <option value="PN">Pitcairn</option>
                        <option value="WS">Samoa</option>
                        <option value="SB">Solomon Islands</option>
                        <option value="TK">Tokelau</option>
                        <option value="TO">Tonga</option>
                        <option value="TV">Tuvalu</option>
                        <option value="VU">Vanuatu</option>
                        <option valud="WF">Wallis and Futuna Islands</option>
                    </optgroup>
                    <optgroup label="Africa">
                        <option value="DZ">Algeria</option>
                        <option value="AO">Angola</option>
                        <option value="BJ">Benin</option>
                        <option value="BW">Botswana</option>
                        <option value="BF">Burkina Faso</option>
                        <option value="BI">Burundi</option>
                        <option value="CM">Cameroon</option>
                        <option value="CV">Cape Verde</option>
                        <option value="CF">Central African Republic</option>
                        <option value="TD">Chad</option>
                        <option value="KM">Comoros</option>
                        <option value="CG">Congo</option>
                        <option value="CD">Congo, the Democratic Republic of the</option>
                        <option value="DJ">Dijibouti</option>
                        <option value="EG">Egypt</option>
                        <option value="GQ">Equatorial Guinea</option>
                        <option value="ER">Eritrea</option>
                        <option value="ET">Ethiopia</option>
                        <option value="GA">Gabon</option>
                        <option value="GM">Gambia</option>
                        <option value="GH">Ghana</option>
                        <option value="GN">Guinea</option>
                        <option value="GW">Guinea-Bissau</option>
                        <option value="CI">Cote d'Ivoire (Ivory Coast)</option>
                        <option value="KE">Kenya</option>
                        <option value="LS">Lesotho</option>
                        <option value="LR">Liberia</option>
                        <option value="LY">Libya</option>
                        <option value="MG">Madagascar</option>
                        <option value="MW">Malawi</option>
                        <option value="ML">Mali</option>
                        <option value="MR">Mauritania</option>
                        <option value="MU">Mauritius</option>
                        <option value="YT">Mayotte</option>
                        <option value="MA">Morocco</option>
                        <option value="MZ">Mozambique</option>
                        <option value="NA">Namibia</option>
                        <option value="NE">Niger</option>
                        <option value="NG">Nigeria</option>
                        <option value="RE">Reunion</option>
                        <option value="RW">Rwanda</option>
                        <option value="ST">Sao Tome and Principe</option>
                        <option value="SH">Saint Helena</option>
                        <option value="SN">Senegal</option>
                        <option value="SC">Seychelles</option>
                        <option value="SL">Sierra Leone</option>
                        <option value="SO">Somalia</option>
                        <option value="ZA">South Africa</option>
                        <option value="SS">South Sudan</option>
                        <option value="SD">Sudan</option>
                        <option value="SZ">Swaziland</option>
                        <option value="TZ">Tanzania</option>
                        <option value="TG">Togo</option>
                        <option value="TN">Tunisia</option>
                        <option value="UG">Uganda</option>
                        <option value="EH">Western Sahara</option>
                        <option value="ZM">Zambia</option>
                        <option value="ZW">Zimbabwe</option>
                    </optgroup>
                    <option value="AQ">Antarctica</option>
                </select>
                <label>Pays</label>
            </div>
            {mailError.length > 0 && <><div className={classes.mailError}>{mailError}<a href="/sign-in">Se connecter</a></div> </>}
        </form>
    )
}

export default RegisterForm;