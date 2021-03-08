import Header from '../components/Header/header'
import Footer from '../components/Footer/footer'
import Content from '../components/Billing/register'
import Billing from '../components/Billing/billing'
import PaymentSuccess from '../components/Billing/PaymentComplete'
import CommandConfirmed from '../components/Billing/commandConfirmed'

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
