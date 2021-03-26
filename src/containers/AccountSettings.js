import Header from '../components/Header/header'
import Account from '../components/AccountSettings/account'
import Notifications from '../components/AccountSettings/notifications'
import Subscription from '../components/AccountSettings/subscription'
import Transactions from '../components/AccountSettings/transactions'
import Menu from '../components/AccountSettings/sideMenu'
import { Redirect, Route, Switch } from "react-router-dom"

function AccountSettings() {
    return (
        <div>
            <Header />
                <Switch>
                    <Route exact path='/account/informations'>
                        <Menu panel="informations" />
                        <Account />
                    </Route>
                    <Route exact path='/account/notifications'>
                        <Menu panel="notifications" />
                        <Notifications />
                    </Route>
                    <Route exact path='/account/subscription'>
                        <Menu panel="subscription" />
                        <Subscription />
                    </Route>
                    <Route exact path='/account/transactions'>
                        <Menu panel="transactions" />
                        <Transactions />
                    </Route>
                    <Route path='/account/'>
                        <Redirect to="/account/informations" />
                    </Route>
                </Switch>
        </div>
    );
}

export default AccountSettings;
