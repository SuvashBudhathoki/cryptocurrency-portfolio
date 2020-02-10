import React from "react";
import TransactionList from "./TransactionList";
import CoinMarketCap from "./CoinMarketCapApi";
import TransactionListFilters from "./TransactionListFilters";
import TransactionTotal from "./TransactionTotal";

const Dashboard = () => (
  <div>
    <p>
      <TransactionTotal />
      <TransactionListFilters />
      <TransactionList />
      ------CoinMarketCap----
      <CoinMarketCap />
    </p>
  </div>
);

export default Dashboard;
