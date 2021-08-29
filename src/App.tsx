import { NotFound, PrivateRoute } from 'components/Common';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import { Counter } from './features/counter/Counter';

function App() {
  return (
    <>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Counter />
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
