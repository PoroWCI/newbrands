import working from '../../assets/img/working.svg'
import classes from '../../assets/firstSection.module.css'

function firstSection() {
    return (
        <div className={classes.container}>
            <div className={classes.leftColumn}>
              <h1 className={classes.h1}>
                Optimisons les chaînes de valeur de l’industrie textile
                française
              </h1>
              <p className={classes.lightText}>
                NewBrands permet de simplifier et réduire les coûts de la chaîne
                de production Made In France en sélectionnant pour vous les
                acteurs les plus adaptés à vos projets de productions.
              </p>
              <div>
                <div>
                    <div className={classes.dottedHr}></div>
                  <form>
                    <div className={classes.inputDiv}>
                      <input
                        type="email"
                        name="email"
                        placeholder="Entrez votre adresse e-mail"
                        required
                        className={classes.mailInput}
                      />
                      <div>
                        <button type="submit" name="submit" className={classes.btn}>
                          Être prévenu
                          <i></i>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className={classes.noSpam}>
                <div>
                  <span className={classes.lightText}>
                    Nous vous préviendrons par e-mail de la disponibilité de
                    notre plateforme gratuitement et sans engagement.{" "}
                    <span className={classes.boldText}>Promis, sans spam.</span>
                  </span>
                </div>
              </div>
            </div>
            <img src={working} alt="Working" />
          </div>
    )
}

export default firstSection