import "./App.css";
import Dashboard from "./components/dashboard/Dashboard";

import { Switch, Route, Redirect } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route path="/:page" component={Dashboard} />
        <Route exact path="/">
          <Redirect to="/0" />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
