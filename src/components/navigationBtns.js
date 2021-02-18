import classes from '../assets/navigationBtns.module.css'
import { Route } from "react-router-dom";

function NavigationBtn(props) {
    return (
    <div className={classes.btnDiv}>
        <Route
            render={({ history }) => (
                <button className={classes.backBtn} onClick={() => history.goBack()}>
                    Retour
                </button>
            )}
        />
        <Route
            render={({ history }) => (
                <button className={classes.btn} onClick={() => history.push(props.link)}>
                    Continuer
                </button>
            )}
        />
    </div>)
}

export default NavigationBtn