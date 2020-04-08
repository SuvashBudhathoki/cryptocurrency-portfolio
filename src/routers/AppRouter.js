import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import Dashboard from "../components/Dashboard";
import AddTransaction from "../components/AddTransaction";
import EditTransaction from "../components/EditTransaction";
import RenderCoinMarketCapApi from "../components/RenderCoinMarketCapApi";
import NotFoundPage from "../components/NotFoundPage";
import LoginPage from "../components/LoginPage";
import createHistory from "history/createBrowserHistory";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRouter";

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <PublicRoute path="/" component={LoginPage} exact={true} />
        <PrivateRoute path="/dashboard" component={Dashboard} />
        <PrivateRoute path="/create" component={AddTransaction} exact={true} />
        <PrivateRoute path="/edit/:id" component={EditTransaction} />
        <PrivateRoute
          path="/coin-market-api"
          component={RenderCoinMarketCapApi}
        />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
