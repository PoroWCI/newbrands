import Header from '../components/header'
import Footer from '../components/footer'
import Content from '../components/register'
import Billing from '../components/billing'
import PaymentSuccess from '../components/PaymentComplete'
import CommandConfirmed from '../components/commandConfirmed'

function InstantQuote(props) {
    return (
        <div>
            <Header />
            {!props.step ? <Content price={props.price} /> 
            : props.step == Billing ? <Billing /> 
            : props.step === PaymentSuccess ? <PaymentSuccess />
            : props.step === CommandConfirmed ? <CommandConfirmed />
            : null} 
            <Footer />
        </div>
    );
}

export default InstantQuote;