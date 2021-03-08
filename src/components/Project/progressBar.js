import classes from './progressbar.module.css'
import Checkmark from '../../assets/img/checkmarkround.svg'
import { IoIosCheckmark } from 'react-icons/io'


function ProgressBar() {
    let stepsAPI = [
        [true, 20, "Étape 1"],
        [true, 20, "Étape 2"],
        [false, 60, "Étape 3"],
    ]
    const steps = []
    for (const [index, value] of stepsAPI.entries()) {
        steps.push(
            <div key={index} className={`${classes.step}`} style={{ width: value[1]+"%" }}>
                    {value[0] === true ? <>
                        <IoIosCheckmark className={classes.checkmark} style={{animationDelay: index*2+"s"}}/>
                        <span className={classes.stepName}>{value[2]}</span>
                        <span className={classes.validatedStep} style={{animationDelay: index*2+"s"}}></span>
                    </> : <>
                        <div className={classes.currentStep}></div>
                        <span className={classes.stepName}>{value[2]}</span>
                        </>}
                </div>
        )
    }
    return (
        <div className={classes.container}>
            <h1>
                Nom_du_projet <span className={classes.reference}>#reference</span>
            </h1>
            <div className={classes.background}>
                {steps}
               
            </div>
            </div>
    )
}

export default ProgressBar;