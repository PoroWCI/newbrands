// import { useTranslation } from "react-i18next";
import classes from './registerForm.module.css'
import Form from './registerForm';
import Navigation from './navigationBtns'

function OnBoardingRegister(price) {
    // const { t } = useTranslation('common');
    return (
        <div className={classes.container}>
            <h2>#ONBOARDING</h2>
            <h1>Vos coordonnées</h1>
            <p>
                Durant cet OnBoarding, plusieurs questions vont vous êtres posées afin de comprendre au mieux votre activité afin d’établir une offre correspondant à vos besoins adapté à votre projet.
            </p>
            <Form />
            <Navigation link={price.price === 'instant-quote' ? 'billing' : 'registration-completed'} />
        </div>
    );
}

export default OnBoardingRegister;