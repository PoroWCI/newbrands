import classes from "./legals.module.css";
import { Route } from "react-router-dom";
import { useLocation } from "react-router";

function LegalsContainer(props) {
  const location = useLocation(); 
  return (
    <div className={classes.sideMenu}>
      <h2>Ressources légales</h2>
      <ul>
        <Route
          render={({ history }) => (
            <li
              className={location.pathname === "/legals" ? classes.active : null}
              onClick={() => history.push("/legals")}
            >
              Mentions légales
            </li>
          )}
        />
        <Route
          render={({ history }) => (
            <li
              className={location.pathname === "/use" ? classes.active : null}
              onClick={() => history.push("/use")}
            >
              Conditions Générales d’Utilisation
            </li>
          )}
        />
        {/* <Route
          render={({ history }) => (
            <li
              className={props.page === "Politics" ? classes.active : null}
              onClick={() => history.push("/politics")}
            >
              Politique de Confidentialité et RGPD
            </li>
          )}
        />
        <Route
          render={({ history }) => (
            <li
              className={props.page === "Service" ? classes.active : null}
              onClick={() => history.push("/service")}
            >
              Conditions Particulières et Générales de Service
            </li>
          )}
        />
        <Route
          render={({ history }) => (
            <li
              className={props.page === "Cookies" ? classes.active : null}
              onClick={() => history.push("/cookies")}
            >
              Chartes Cookies
            </li>
          )}
        /> */}
      </ul>
      <span className={classes.footer}>
        © Copyright 2017-2021, NewBrands, SAS et ses partenaires
      </span>
    </div>
  );
}

export default LegalsContainer;
