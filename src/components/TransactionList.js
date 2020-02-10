import React from "react";
import { connect } from "react-redux";
import TransactionListItem from "./TransactionListItem";
import selectFilteredTransaction from "../selectors/Transactions";

const TransactionList = props => (
  <div>
    <h1>Transaction List</h1>
    {props.transactions.map((transaction, index) => {
      return <TransactionListItem {...transaction} key={index.id} />;
    })}
  </div>
);

const mapStateToProps = state => {
  return {
    transactions: selectFilteredTransaction(state.transactions, state.filters)
  };
};

export default connect(mapStateToProps)(TransactionList);
