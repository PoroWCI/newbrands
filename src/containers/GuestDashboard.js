import Header from '../components/Header/header'
import Dashboard from '../components/Dashboard/dashboard'
import Footer from '../components/Footer/footer'

function GuestDashboard(props) {
    return (
        <div>
            <Header />
                <Dashboard panel={props.panel} accountActivated={false} />
            <Footer />
        </div>
    );
}

export default GuestDashboard;
