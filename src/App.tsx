import { NotFound, PrivateRoute } from 'components/Common';
import HomePage from 'features/home';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <PrivateRoute path="/admin">{/* pages need authentication */}</PrivateRoute>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default App;
