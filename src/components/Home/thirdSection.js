
import projectSample from "../../assets/img/project-sample.png";
import projectCreation from "../../assets/img/project-creation.png";
import classes from '../../assets/thirdSection.module.css'

function thirdSection() {
    return (
        <div className={classes.container}>
        <div>
          <h2 className={classes.h2}>
            Nous simplifions vos démarches et réduisons vos coûts de production{" "}
          </h2>
          <div className={classes.firstContainer}>
            <div className={classes.textLeft}>
              <h2>Concentrez-vous sur l'essentiel</h2>
              <p>
                Nous vous accompagnons étape par étape dans la définition de
                votre projet. Préciser l’ensemble des informations permettant de
                trouver le ou les meilleurs partenaires. De son type (stylisme,
                modélisme, confection, sourcing), jusqu’au nombre de produits
                que vous souhaitez confectionner !
              </p>
              <a href="#">
                Demandez une demo <span>{">"}</span>
              </a>
            </div>
              <img className={classes.rightImg} src={projectSample} alt="Image" />
                <div className={classes.secondContainer}>
                <img className={classes.rightImg} src={projectCreation} alt="Image" />
              <div  className={classes.textLeft}>
                <h2>Un suivi complet et flexible</h2>
                <div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default thirdSection