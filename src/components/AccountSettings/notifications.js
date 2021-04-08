import { useState } from 'react';
import classes from './notifications.module.css'

function NotificationsPanel() {
    const [promotions, setPromotions] = useState({ sms: false, mail: false })
    const [production, setProduction] = useState({ sms: false, mail: false })
    const [messages, setMessages] = useState({ sms: false, mail: false })

    return (
        <div className={classes.container}>
            <div className={classes.mainContainer}>
                <h2>Préférence de communication</h2>
                <span>La manière dont vous souhaitez être contacté sur nos actualités et mise à jour</span>

                <div className={classes.radioDiv}>
                    <label className={classes.radioInput}>Newsletter mensuelle
                        <input type="checkbox" />
                        <span className={classes.checkmark}></span>
                    </label>
                    <p>La manière dont vous souhaitez être contacté sur nos actualités et mise à jour</p>
                </div>
                <div className={classes.radioDiv}>
                    <label className={classes.radioInput}>Trucs et Astuces
                        <input type="checkbox" />
                        <span className={classes.checkmark}></span>
                    </label>
                    <p>La manière dont vous souhaitez être contacté sur nos actualités et mise à jour</p>
                </div>
                <div className={classes.radioDiv}>
                    <label className={classes.radioInput}>Offres et Promotions
                        <input type="checkbox" checked={promotions.sms || promotions.mail} onClick={() => {
                            promotions.sms && promotions.mail ? setPromotions({ sms: false, mail: false }) : setPromotions({ sms: true, mail: true })
                        }} />
                        <span className={classes.checkmark}></span>
                    </label>
                    <p>La manière dont vous souhaitez être contacté sur nos actualités et mise à jour</p>
                    <ul className={classes.subCategory}>
                        <li>
                            <label className={classes.radioInput}>Par SMS
                            <input type="checkbox" checked={promotions.sms} onChange={() => setPromotions({ mail: promotions.mail, sms: !promotions.sms })} />
                                <span className={classes.checkmark}></span>
                            </label>
                        </li>
                        <li>
                            <label className={classes.radioInput}>Par e-mail
                            <input type="checkbox" checked={promotions.mail} onChange={() => setPromotions({ sms: promotions.sms, mail: !promotions.mail })} />
                                <span className={classes.checkmark}></span>
                            </label>
                        </li>
                    </ul>
                </div>
                <div className={classes.radioDiv}>
                    <label className={classes.radioInput}>Mise à jour des étapes de productions
                    <input type="checkbox" checked={production.sms || production.mail} onClick={() => {
                            production.sms && production.mail ? setProduction({ sms: false, mail: false }) : setProduction({ sms: true, mail: true })
                        }} />
                        <span className={classes.checkmark}></span>
                    </label>
                    <p>La manière dont vous souhaitez être contacté sur nos actualités et mise à jour</p>
                    <ul className={classes.subCategory}>
                        <li>
                            <label className={classes.radioInput}>Par SMS
                            <input type="checkbox" checked={production.sms} onChange={() => setProduction({ mail: production.mail, sms: !production.sms })} />
                                <span className={classes.checkmark}></span>
                            </label>
                        </li>
                        <li>
                            <label className={classes.radioInput}>Par e-mail
                            <input type="checkbox" checked={production.mail} onChange={() => setProduction({ sms: production.sms, mail: !production.mail })} />
                                <span className={classes.checkmark}></span>
                            </label>
                        </li>
                    </ul>
                </div>
                <div className={classes.radioDiv}>
                    <label className={classes.radioInput}>Nouveaux messages
                    <input type="checkbox" checked={messages.sms || messages.mail} onClick={() => {
                            messages.sms && messages.mail ? setMessages({ sms: false, mail: false }) : setMessages({ sms: true, mail: true })
                        }} />
                        <span className={classes.checkmark}></span>
                    </label>
                    <p>La manière dont vous souhaitez être contacté sur nos actualités et mise à jour</p>
                    <ul className={classes.subCategory}>
                        <li>
                            <label className={classes.radioInput}>Par SMS
                            <input type="checkbox" checked={messages.sms} onChange={() => setMessages({ mail: messages.mail, sms: !messages.sms })} />
                                <span className={classes.checkmark}></span>
                            </label>
                        </li>
                        <li>
                            <label className={classes.radioInput}>Par e-mail
                            <input type="checkbox" checked={messages.mail} onChange={() => setMessages({ sms: messages.sms, mail: !messages.mail })} />
                                <span className={classes.checkmark}></span>
                            </label>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default NotificationsPanel;