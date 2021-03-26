import classes from './notifications.module.css'

function NotificationsPanel() {
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
                        <input type="checkbox" />
                        <span className={classes.checkmark}></span>
                    </label>
                    <p>La manière dont vous souhaitez être contacté sur nos actualités et mise à jour</p>
                    <ul className={classes.subCategory}>
                        <li>
                            <label className={classes.radioInput}>Par SMS
                            <input type="checkbox" />
                                <span className={classes.checkmark}></span>
                            </label>
                        </li>
                        <li>
                            <label className={classes.radioInput}>Par e-mail
                            <input type="checkbox" />
                                <span className={classes.checkmark}></span>
                            </label>
                        </li>
                    </ul>
                </div>
                <div className={classes.radioDiv}>
                    <label className={classes.radioInput}>Mise à jour des étapes de productions
                        <input type="checkbox" />
                        <span className={classes.checkmark}></span>
                    </label>
                    <p>La manière dont vous souhaitez être contacté sur nos actualités et mise à jour</p>
                    <ul className={classes.subCategory}>
                        <li>
                            <label className={classes.radioInput}>Par SMS
                            <input type="checkbox" />
                                <span className={classes.checkmark}></span>
                            </label>
                        </li>
                        <li>
                            <label className={classes.radioInput}>Par e-mail
                            <input type="checkbox" />
                                <span className={classes.checkmark}></span>
                            </label>
                        </li>
                    </ul>
                </div>
                <div className={classes.radioDiv}>
                    <label className={classes.radioInput}>Nouveaux messages
                        <input type="checkbox" />
                        <span className={classes.checkmark}></span>
                    </label>
                    <p>La manière dont vous souhaitez être contacté sur nos actualités et mise à jour</p>
                    <ul className={classes.subCategory}>
                        <li>
                            <label className={classes.radioInput}>Par SMS
                            <input type="checkbox" />
                                <span className={classes.checkmark}></span>
                            </label>
                        </li>
                        <li>
                            <label className={classes.radioInput}>Par e-mail
                            <input type="checkbox" />
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