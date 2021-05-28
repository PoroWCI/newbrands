import classes from './partners.module.css'
import Zadig from '../../../assets/img/partners/z&v.svg'
import Defursac from '../../../assets/img/partners/df.svg'
import Chanel from '../../../assets/img/partners/chanel.svg'
import Chloe from '../../../assets/img/partners/chloe.svg'

function Partners() {
    return (<div className={classes.container}>
        <hr className={classes.hr} />
        <ul>
            <li><img src={Zadig} alt="Zadig & Voltaire" /></li>
            <li><img src={Defursac} alt="DE FURSAC" /></li>
            <li><img src={Chanel} alt="Chanel" /></li>
            <li><img src={Chloe} alt="Chloé" /></li>
        </ul>
        <hr className={classes.hr} />
    </div>)
}

export default Partners