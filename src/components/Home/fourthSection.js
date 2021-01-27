import classes from '../../assets/fourthSection.module.css'
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa'

function fourthSection() {
    return (
    <section className={classes.container}>
        <div className={classes.cardContainer}>
          <div className={classes.introduction}>
            <h2 className={classes.h2}>Lancez votre première production gratuite*</h2>
            <p className={classes.p}>Bénéficiez d’une première production hors frais de commission en sélectionnant notre offre avec engagement.</p>
          </div>
          <div className={classes.column}>
            <div className={classes.firstCard}>
              <div className={classes.row}>
                <div className={classes.firstColumn}>
                  <h6>À partir de</h6>
                  <h3>99.99€/mois</h3>
                  <span>
                    + Commission par palier comprise entre 0.80% et 7.00%, selon
                    le volume de production
                  </span>
                </div>
                <div className={classes.listColumn}>
                  <div class={classes.item}>
                    <FaCheckCircle color="#01798c" size="24px" />
                    <span>Échantillons des matières</span>
                  </div>
                  <div class={classes.item}>
                    <FaCheckCircle color="#01798c" size="24px" />
                    <span>Gestion des commandes</span>
                  </div>
                  <div class={classes.item}>
                    <FaCheckCircle color="#01798c" size="24px" />
                    <span>Suivi en temps réels</span>
                  </div>
                </div>
                <div className={classes.listColumn}>
                  <div class={classes.item}>
                    <FaCheckCircle color="#01798c" size="24px" />
                    <span>Stratégie de production</span>
                  </div>
                  <div class={classes.item}>
                    <FaCheckCircle color="#01798c" size="24px" />
                    <span>Gestion des projets</span>
                  </div>
                  <div class={classes.item}>
                    <FaCheckCircle color="#01798c" size="24px" />
                    <span>Resp. production dédiés</span>
                  </div>
                </div>
                <button className={classes.btn}>Sélectionner</button>
              </div>
            </div>
            </div>
            <div className={classes.column}>
            <div className={classes.card}>
              <div className={classes.row}>
                <div className={classes.firstColumn}>
                  <h3>0€/mois</h3>
                  <span>
                    + Commission par palier compris entre 7% et 12,50%, selon le volume de production
                  </span>
                </div>
                <div className={classes.listColumn}>
                  <div class={classes.item}>
                    <FaCheckCircle color="#FFF" size="24px" />
                    <span>Échantillons des matières</span>
                  </div>
                  <div class={classes.item}>
                    <FaCheckCircle color="#FFF" size="24px" />
                    <span>Gestion des commandes</span>
                  </div>
                  <div class={classes.item}>
                    <FaCheckCircle color="#FFF" size="24px" />
                    <span>Suivi en temps réels</span>
                  </div>
                </div>
                <div className={classes.listColumn}>
                  <div class={classes.item}>
                    <FaCheckCircle color="#FFF" size="24px" />
                    <span>Resp. production dédiés</span>
                  </div>
                  <div class={classes.item}>
                    <FaTimesCircle color="#FFF" size="24px" />
                    <span>Stratégie de production</span>
                  </div>
                  <div class={classes.item}>
                    <FaTimesCircle color="#FFF" size="24px" />
                    <span>Gestion des projets</span>
                  </div>
                </div>
                <button className={`${classes.btn} ${classes.disabledBtn}`}>Bientôt disponible</button>
              </div>
            </div>
            </div>
            <div className={classes.column}>
            <div className={classes.card}>
              <div className={classes.lastRow}>
                <div className={classes.firstColumn}>
                  <h6>Tarif spécial</h6>
                  <h3>Incubées</h3>
                </div>
                <div className={classes.listColumn}>
                  <span>+ 40 incubateurs partenaires à travers la France Métropolitaine*</span>
                </div>
                <button className={classes.btn}>Vérifier éligibilité</button>
              </div>
            </div>
            </div>
            </div>
      </section>)
}

export default fourthSection