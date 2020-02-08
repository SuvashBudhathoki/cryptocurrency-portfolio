import React from "react";
import { connect } from "react-redux";
import TransactionListItem from "./TransactionListItem";

const TransactionList = props => (
  <div>
    <h1>Transaction List</h1>
    {props.transactions.map((transaction, index) => {
      return <TransactionListItem {...transaction} key={index} />;
    })}
  </div>
);

const mapStateToProps = state => {
  return {
    transactions: state.transactions
  };
};

export default connect(mapStateToProps)(TransactionList);
