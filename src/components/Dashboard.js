import React from "react";
import TransactionList from "./TransactionList";
import TransactionListFilters from "./TransactionListFilters";
import TransactionTotal from "./TransactionTotal";

const Dashboard = () => (
  <div>
    <TransactionTotal />
    <TransactionListFilters />
    <TransactionList />
  </div>
);

export default Dashboard;
