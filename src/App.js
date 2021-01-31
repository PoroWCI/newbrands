import Home from './containers/Home'
import Contact from './containers/Contact'
import MentionsLegales from './containers/MentionsLegales'
import './assets/style.css'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Legals from './components/legals'
import Use from './components/useContainer'

function App() {
  return (
  <BrowserRouter>
    <Switch>
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
      <Route>
        <Home />
      </Route>
    </Switch>
  </BrowserRouter>
  )
}

export default App;
