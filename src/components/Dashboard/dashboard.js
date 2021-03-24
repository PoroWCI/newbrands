import classes from "./dashboard.module.css";
import { Route, Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs"
import moment from 'moment';

function Dashboard(props) {
    const projectsAPI = [
        ["12/11/2020", "stylism", 10, 22413, "stylism", 1],
        ["12/13/2020", "stylism", 10, 22413, "stylism", 1],
        ["06/11/2020", "stylism", 10, 22413, "stylism", 1],
        ["12/11/2020", "stylism", 10, 22413, "stylism", 1],
    ]
    let projectList = []
    for (const [index, value] of projectsAPI.entries()) {
        projectList.push(
            <li className={classes.projectCard} key={index}>
                <div className={classes.leftCol}>
                    <h2>Projet créé le {moment(value[0]).format('D MMM YYYY').toLowerCase()}</h2>
                    <ul className={classes.tags}>
                        <li className={`${classes.tag} ${classes.selectedTag}`}>
                            <span>Stylisme</span>
                        </li>
                        <li className={classes.tag}>
                            <span>Modélisme</span>
                        </li>
                        <li className={classes.tag}>
                            <span>Confection</span>
                        </li>
                        <li className={classes.tag}>
                            <span>Sourcing</span>
                        </li>
                    </ul>
                    <h3>{value[2]} produits</h3>
                </div>
                <div className={classes.rightCol}>
                    <h1>Total H.T {value[3]}</h1>
                    <span>Statut: {value[4]}</span>
                    <Route render={({ history }) => (
                        <button className={classes.whiteBtn} onClick={() => history.push('/project?id='+value[5])}>Voir ma commande</button>
                    )} />
                </div>
            </li>
        )
    }
    return (
        <div className={classes.container}>
            <button className={classes.blueBtn}>Créer un nouveau projet</button>
            <ul className={classes.panelTitleContainer}>
                <Link to="commands"><li className={`${classes.panelTitle} ${props.panel === "commands" ? classes.active : ""}`}>Commandes en cours</li></Link>
                <Link to="projects"><li className={`${classes.panelTitle} ${props.panel === "projects" ? classes.active : ""}`}>Projets à l’étude</li></Link>
                <Link to="completed-commands"><li className={`${classes.panelTitle} ${props.panel === "completed-commands" ? classes.active : ""}`}>Commandes passées</li></Link>
            </ul>
            {props.activated !== true && props.panel === "commands" ? <>
                <div className={classes.blueDiv}>
                    <span>Afin d’activer votre compte, nous avons besoin de quelques informations vous concernant ainsi que votre société.</span>
                    <Route
                        render={({ history }) => (
                            <BsArrowRight className={classes.arrow} onClick={() => history.push("/validation-account")} />
                        )}
                    />
                </div>
                <div className={classes.lazyContainer}>
                    <div className={classes.leftCol}>
                        <div className={classes.lazyInput}></div>
                        <div className={classes.row}>
                            <div className={classes.lazyBtn}></div>
                            <div className={classes.lazyBtn}></div>
                            <div className={classes.lazyBtn}></div>
                            <div className={classes.lazyBtn}></div>
                        </div>
                        <div className={classes.lazyInput}></div>
                    </div>
                    <div className={classes.rightCol}>
                        <div className={classes.lazyInput}></div>
                        <div className={classes.lazyInput}></div>
                        <button className={classes.whiteBtn}>N/A</button>
                    </div>
                </div>
                <br />
                <span className={classes.example}>Visuel d'exemple</span>
            </> : <>
                <ul className={classes.projectCardsContainer}>
                    {projectList}
                </ul>
            </>}
        </div>
    )
}

export default Dashboard;