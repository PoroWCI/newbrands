import classes from './pageContent.module.css'
import { BsArrowRight } from 'react-icons/bs'
import Objective1 from '../../assets/img/About/objective-001.svg'
import Objective2 from '../../assets/img/About/objective-002.svg'
import Objective3 from '../../assets/img/About/objective-003.svg'
import Objective4 from '../../assets/img/About/objective-004.svg'
import Experience1 from '../../assets/img/About/experience-001.png'
import Experience2 from '../../assets/img/About/experience-002.png'
import Experience3 from '../../assets/img/About/experience-003.png'
import Experience4 from '../../assets/img/About/experience-004.png'
import Phone from '../../assets/img/About/phone.png'

function pageContent() {
    return (
        <div className={classes.container}>
            <div className={classes.textRight}>
                <h2>Remettre de l’efficience <br /><span className={classes.blueTxt}>économique</span>, <span className={classes.blueTxt}>sociale</span> et <span className={classes.blueTxt}>environnementale</span> dans l’industrie de la mode</h2>

                <p>Only, there's some peculiarities to digital products. Things can get really complex, really quickly, and a pragmatic, synthetic and clear vision is essential to be able to create something that, after all, is meant to be used. Emotions also have a big role to play and developing clear and beautiful aesthetics is of the utmost importance to create a pleasant environment in which the user actually enjoys the time spent in it. In the end, we're all suckers for beautiful things that just work™
                    <br />
                    <br />
                    Only, there's some peculiarities to digital products. Things can get really complex, really quickly, and a pragmatic, synthetic and clear vision is essential to be able to create something that, after all, is meant to be used. Emotions also have a big role to play and developing clear and beautiful aesthetics is of the utmost importance to create a pleasant environment in which the user actually enjoys the time spent in it. In the end, we're all suckers for beautiful things that just work™</p>
            </div>
            <div className={classes.textRight}>
                <h2>Objectifs atteints en 3 ans d’existence</h2>
                <div className={classes.objectivesContainer}>
                    <div className={classes.sideInfo}>
                    <img src={Objective1} alt='' />
                        <div>
                            <h5>220+</h5>
                            <span>Marques françaises</span>
                        </div>
                    </div>
                    <div className={classes.sideInfo}>
                    <img src={Objective2} alt='' />
                        <div>
                            <h5>2 Millions</h5>
                            <span>Produits sortis d’usine</span>
                        </div>
                    </div>
                    <div className={classes.sideInfo}>
                    <img src={Objective3} alt='' />
                        <div>
                            <h5>500+</h5>
                            <span>Manufactures</span>
                        </div>
                    </div>
                    <div className={classes.sideInfo}>
                    <img src={Objective4} alt='' />
                        <div>
                            <h5>140 Mt éq.CO2</h5>
                            <span>G.E.S sauvées</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className={classes.leftAlign}>
                <h2>Experience is the key to customer lifetime value.</h2>
                <ul>
                    <li>
                        <img src={Experience1} alt='' />
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </li>
                    <li>
                        <img src={Experience2} alt='' />
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </li>
                    <li>
                        <img src={Experience3} alt='' />
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </li>
                    <li>
                        <img src={Experience4} alt='' />
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </li>
                </ul>
            </div>
            <div className={`${classes.textRight} ${classes.textCenter}`}>
                <img src={Phone} alt='' />
                <div>
                    <h3>-20% d’emission de gaz à effet de serre en moyenne</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum diam orci pretium a pharetra, feugiat cursus. Dictumst risus, sem egestas odio cras adipiscing vulputate. Nisi, risus in suscipit non. Non commodo volutpat, pharetra, vel.</p>
                    <a>Obtenir le rapport <BsArrowRight className={classes.arrowRight} /></a>
                </div>
            </div>
        </div>
    )
}

export default pageContent