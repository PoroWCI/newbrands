import classes from "./dashboard.module.css";
import { BsArrowRight } from "react-icons/bs"

function Dashboard(props) {
    return (
        <div className={classes.container}>
            <button className={classes.blueBtn}>Créer un nouveau projet</button>
            <ul className={classes.panelTitleContainer}>
                <li className={`${classes.panelTitle} ${classes.active} `}>Commandes en cours</li>
                <li className={classes.panelTitle}>Projets à l’étude</li>
                <li className={classes.panelTitle}>Commandes passées</li>
            </ul>
            {props.accountActivated === true ? <>
                <div className={classes.blueDiv}>
                    <span>Afin d’activer votre compte, nous avons besoin de quelques informations vous concernant ainsi que votre société.</span>
                    <BsArrowRight className={classes.arrow} />
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
                        <li className={classes.projectCard}>
                            <div className={classes.leftCol}>
                                <h2>Projet créé le 12 nov 2020</h2>
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
                                <h3>10 produits</h3>
                            </div>
                            <div className={classes.rightCol}>
                                <h1>Total H.T 22 413€</h1>
                                <span>Statut: En stylisme</span>
                                <button className={classes.whiteBtn}>Voir ma commande</button>
                            </div>
                        </li>
                    </ul>
                </>}
        </div>
    )
}

export default Dashboard;