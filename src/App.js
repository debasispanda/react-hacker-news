import "./App.css";
import Dashboard from "./components/dashboard/Dashboard";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/:page" component={Dashboard} />
          <Route exact path="/">
            <Redirect to="/0" />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
