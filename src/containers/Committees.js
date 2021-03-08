import Header from '../components/Header/header'
import Content from '../components/Billing/register'
import RegistrationCompleted from '../components/Billing/registrationCompleted'
import CommandConfirmed from '../components/Billing/commandConfirmed'
import Footer from '../components/Footer/footer'

function InstantQuote(props) {
    console.log(props.step)
    return (
        <div>
            <Header />
            {!props.step ? <Content price={props.price} /> 
            : props.step === RegistrationCompleted ? <RegistrationCompleted /> 
            : props.step === CommandConfirmed ? <CommandConfirmed /> 
            : null}
            <Footer />
        </div>
    );
}

export default InstantQuote;
