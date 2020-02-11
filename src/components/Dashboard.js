import React from "react";
import TransactionList from "./TransactionList";
import CoinMarketCap from "./CoinMarketCapApi";
import TransactionListFilters from "./TransactionListFilters";
import TransactionTotal from "./TransactionTotal";

const Dashboard = () => (
  <div>
    <TransactionTotal />
    <TransactionListFilters />
    <TransactionList />
    ------CoinMarketCap----
    <CoinMarketCap />
  </div>
);

export default Dashboard;
