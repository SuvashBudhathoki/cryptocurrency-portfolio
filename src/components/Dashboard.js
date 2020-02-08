import React from "react";
import TransactionList from "./TransactionList";
import TransactionTotal from "./TransactionTotal";

const Dashboard = () => (
  <div>
    <p>
      <TransactionTotal />
      <TransactionList />
    </p>
  </div>
);

export default Dashboard;
