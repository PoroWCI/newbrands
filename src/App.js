import Home from './containers/Home'
import Contact from './containers/Contact'
import MentionsLegales from './containers/MentionsLegales'
import './assets/style.css'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Legals from './components/legals'
import Use from './components/useContainer'
import RegisterInstantQuote from './containers/InstantQuote'
import RegisterCommittees from './containers/Committees'
import Billing from './components/billing'
import PaymentSuccess from './components/PaymentComplete'
import RegistrationCompleted from './components/registrationCompleted'
import CommandConfirmed from './components/commandConfirmed'

function App() {
  return (
    <BrowserRouter>
      <Switch>

        {/* General pages */}
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Route exact path="/legals">
          <MentionsLegales page={Legals} />
        </Route>
        <Route exact path="/use">
          <MentionsLegales page={Use} />
        </Route>
        {/*  */}

        {/* Instant quote (99e per month) */}
        <Route exact path="/instant-quote/register">
          <RegisterInstantQuote price={"instant-quote"} />
        </Route>
        <Route exact path="/instant-quote/billing">
          <RegisterInstantQuote step={Billing} />
        </Route>
        <Route exact path="/instant-quote/payment-success">
          <RegisterInstantQuote step={PaymentSuccess} />
        </Route>
        <Route exact path="/instant-quote/command-success">
          <RegisterInstantQuote step={CommandConfirmed} />
        </Route>
        {/*  */}

        {/* 0e per month */}
        <Route exact path="/committees/register">
          <RegisterCommittees price={"committees"} />
        </Route>
        <Route exact path="/committees/registration-completed">
          <RegisterCommittees step={RegistrationCompleted} />
        </Route>
        <Route exact path="/committees/command-success">
          <RegisterCommittees step={CommandConfirmed} />
        </Route>
        {/*  */}
      </Switch>
    </BrowserRouter>
  )
}

export default App;
