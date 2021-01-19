import Contact from './containers/Contact'
import MentionsLegales from './containers/MentionsLegales'
import Style from './assets/style.css'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

function App() {
  return (
  <BrowserRouter>
    <Switch>
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
