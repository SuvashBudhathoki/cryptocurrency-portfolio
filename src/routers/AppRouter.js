import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import Dashboard from "../components/Dashboard";
import AddTransaction from "../components/AddTransaction";
import EditTransaction from "../components/EditTransaction";
import Header from "../components/Header";
import RenderCoinMarketCapApi from "../components/RenderCoinMarketCapApi";
import NotFoundPage from "../components/NotFoundPage";
import LoginPage from "../components/LoginPage";
import createHistory from "history/createBrowserHistory";

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={LoginPage} exact={true} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/create" component={AddTransaction} exact={true} />
        <Route path="/edit/:id" component={EditTransaction} />
        <Route path="/coin-market-api" component={RenderCoinMarketCapApi} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
