import React from "react";
import TransactionList from "./TransactionList";
import TransactionTotal from "./TransactionTotal";
import CoinMarketCap from "./CoinMarketCapApi";

const Dashboard = () => (
  <div>
    <p>
      <TransactionTotal />
      <TransactionList />
      ------CoinMarketCap----
      <CoinMarketCap />
    </p>
  </div>
);

export default Dashboard;
