import Header from '../components/header'
import Content from '../components/register'
import RegistrationCompleted from '../components/registrationCompleted'
import CommandConfirmed from '../components/commandConfirmed'
import Footer from '../components/footer'

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
