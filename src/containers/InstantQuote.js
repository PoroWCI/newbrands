import Header from '../components/header'
import Content from '../components/register'
import Billing from '../components/billing'
import PaymentSuccess from '../components/PaymentComplete'

function InstantQuote(props) {
    console.log(props.step)
    return (
        <div>
            <Header />
            {!props.step ? <Content price={props.price} /> : props.step == Billing ? <Billing /> : props.step === PaymentSuccess ? <PaymentSuccess />: null} 
            
        </div>
    );
}

export default InstantQuote;
