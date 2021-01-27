import stylism from "../../assets/img/stylism.svg";
import ecology from "../../assets/img/ecology.svg";
import developpment from "../../assets/img/developpement.svg";
import production from "../../assets/img/production.svg";
import transports from "../../assets/img/transports.svg";
import recycling from "../../assets/img/recycling.svg";
import classes from '../../assets/secondSection.module.css'

function secondSection() {
    return (
        <div className={classes.container}>
        <div>
          <div className={classes.introduction}>
            <h2 className={classes.h2}>Nos services, votre marque</h2>
            <span className={classes.lightText}>
              Nous vous accompagnons dès le premier jours de votre projet, nous
              intervenons dès vos besoins de stylisme afin de donner vie à votre
              projet de marque, jusqu’aux prototypages de vos modèles et la
              production de votre collection.
            </span>
          </div>
        </div>
        <div className={classes.grid}>
          <div className={classes.row}>
            <div className={classes.tile}>
              <div>
                <img src={stylism} alt="Stylisme" />
                <h5>#Stylisme</h5>
                <p className={classes.lightText}>
                  Vous avez les idées, mais pas le talent ? Nos stylistes
                  travaillant pour les plus grandes{" "}
                  <span>#maisons_de_coutures</span> sont là pour vous.
                </p>
              </div>
            </div>
            <div className={classes.tile}>
              <div>
                <img src={ecology} alt="Éthique" />
                <h5>#Matières éthiques</h5>
                <p className={classes.lightText}>
                  Sourcing des matières à travers l’union européenne parmi un
                  portefeuille de partenaires labélisées{" "}
                  <span>#GOTS #OEKO</span>
                </p>
              </div>
            </div>
            <div className={classes.tile}>
              <div>
                <img src={developpment} alt="Développement" />
                <h5>#Développement</h5>
                <p className={classes.lightText}>
                  Mise en production dans l’une de nos <span>4 000 usines</span>{" "}
                  aux quatre coins de l’hexagone, au plus proche de votre
                  région.
                </p>
              </div>
            </div>
          </div>
          <div className={classes.row}>
            <div className={classes.tile}>
              <div>
                <img src={production} alt="Production" />
                <h5>#Production françaises</h5>
                <p className={classes.lightText}>
                  Mise en production dans l’une de nos <span>4 000 usines</span>{" "}
                  aux quatre coins de l’hexagone, au plus proche de votre
                  région.
                </p>
              </div>
            </div>
            <div className={classes.tile}>
              <div>
                <img src={transports} alt="Transports" />
                <h5>#Optimisation des transports</h5>
                <p className={classes.lightText}>
                  Nous réduisons aux maximums les transports routiers en
                  favorisant le fret ferroviaires grâce à la coalition
                  Européenne <span>Rail Freight Forward</span>{" "}
                </p>
              </div>
            </div>
            <div className={classes.tile}>
              <div className={classes.soon}>
                <span className={classes.soonText}>
                  <img src={recycling} alt="Recyclage" />
                  Bientôt disponible
                </span>
                <h5>#Recyclage et Upcyclage</h5>
                <p className={classes.lightText}>
                  Nous réduisons aux maximums les transports routiers en
                  favorisant le fret férroviaires grace à la coalition
                  Européenne <span>Rail Freight Forward</span>{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default secondSection