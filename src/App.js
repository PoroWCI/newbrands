import Home from './containers/Home'
import Contact from './containers/Contact'
import MentionsLegales from './containers/MentionsLegales'
import './assets/style.css'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

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
      <Route exact path="/mentions-legales">
        <MentionsLegales />
      </Route>
    </Switch>
  </BrowserRouter>
  )
}

export default App;
