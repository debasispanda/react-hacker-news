import './App.css';
import Dashboard from './components/dashboard/Dashboard';
import Pagination from './components/pagination/Pagination';
import { useState } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

function App() {
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/:page">
            <Dashboard setTotalPages={setTotalPages} setCurrentPage={setCurrentPage} setLoading={setLoading} />
          </Route>
          <Route exact path="/">
            <Redirect to="/0" />
          </Route>
        </Switch>
        <Pagination totalPages={totalPages} currentPage={currentPage} loading={loading}></Pagination>
      </Router>
    </div>
  );
}

export default App;
