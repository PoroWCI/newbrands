import { Link } from 'react-router-dom'
import classes from './sideMenu.module.css'

function SideMenu(props) {
    return (
        <div className={classes.container}>
            <div className={classes.sideMenu}>
                <h2>Mon compte</h2>
                <ul>
                    <Link to="informations">
                        <li className={props.panel === "informations" ? classes.active : ""}>Informations</li>
                    </Link>
                    <Link to="notifications">
                        <li className={props.panel === "notifications" ? classes.active : ""}>Notifications</li>
                    </Link>
                    <Link to="subscription">
                        <li className={props.panel === "subscription" ? classes.active : ""}>Abonnement</li>
                    </Link>
                    <Link to="transactions">
                        <li className={props.panel === "transactions" ? classes.active : ""}>Transactions</li>
                    </Link>
                </ul>
                <span className={classes.footer}>© Copyright 2017-2021, NewBrands, SAS et ses partenaires </span>
            </div>
        </div>
    )
}

export default SideMenu;