import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Dashboard from "../components/Dashboard";
import AddTransaction from "../components/AddTransaction";
import EditTransaction from "../components/EditTransaction";
import Header from "../components/Header";
import RenderCoinMarketCapApi from "../components/RenderCoinMarketCapApi";
import NotFoundPage from "../components/NotFoundPage";

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={Dashboard} exact={true} />
        <Route path="/create" component={AddTransaction} exact={true} />
        <Route path="/edit/:id" component={EditTransaction} />
        <Route path="/coin-market-api" component={RenderCoinMarketCapApi} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
