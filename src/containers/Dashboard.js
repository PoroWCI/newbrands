import Header from '../components/Header/header'
import DashboardComponent from '../components/Dashboard/dashboard'
import Footer from '../components/Footer/footer'
import { Route, Switch, Redirect } from "react-router-dom"
import MyCommands from '../components/Dashboard/dashboard'

function Dashboard() {
    return (
        <div>
            <Header />
                <Switch>
                    <Route exact path='/dashboard/commands/token'>
                        <DashboardComponent activated={true} panel="commands" />
                    </Route>
                    <Route exact path='/dashboard/commands'>
                        <DashboardComponent activated={false} panel="commands" />
                    </Route>
                    <Route exact path='/dashboard/projects'>
                        <DashboardComponent activated={false} panel="projects" />
                    </Route>
                    <Route exact path='/dashboard/completed-commands'>
                        <DashboardComponent activated={false} panel="completed-commands" />
                    </Route>
                    <Route path='/dashboard/'>
                        <Redirect to="/dashboard/commands" />
                    </Route>
                </Switch>
            <Footer />
        </div>
    );
}

export default Dashboard;
