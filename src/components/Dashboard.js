import React from "react";
import TransactionList from "./TransactionList";
import TransactionTotal from "./TransactionTotal";
import CoinMarketCap from "./CoinMarketCapApi";
import TransactionListFilters from "./TransactionListFilters";

const Dashboard = () => (
  <div>
    <p>
      <TransactionListFilters />
      <TransactionTotal />
      <TransactionList />
      ------CoinMarketCap----
    </p>
  </div>
);

export default Dashboard;
