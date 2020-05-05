import React, { Suspense, lazy } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

const Home = lazy(() => import('./landing'));
const Scan = lazy(() => import('./scanCode'));
const Prodcut = lazy(() => import('./addProduct'));

export default function Routing() {
  return (
    <Router>
      <Suspense fallback={<div>Loading ..</div>}>
        <Switch>
          <Route exact path="/scan">
            <Scan />
          </Route>
          <Route exact path="/add">
            <Prodcut />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Suspense>
    </Router>
  );
}
