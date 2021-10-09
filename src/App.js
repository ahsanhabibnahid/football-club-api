import './App.css';
import Home from './components/Home/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import TeamDetails from './components/TeamDetails/TeamDetails';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/team/:teamId'>
          <TeamDetails></TeamDetails>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
