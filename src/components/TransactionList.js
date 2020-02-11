import React from "react";
import { connect } from "react-redux";
import TransactionListItem from "./TransactionListItem";
import selectFilteredTransaction from "../selectors/Transactions";

export const TransactionList = props => (
  <div>
    {props.transactions.length === 0 ? (
      <p> No Transactions To Dispay</p>
    ) : (
      props.transactions.map(transaction => {
        return <TransactionListItem {...transaction} key={transaction.id} />;
      })
    )}
  </div>
);

const mapStateToProps = state => {
  return {
    transactions: selectFilteredTransaction(state.transactions, state.filters)
  };
};

export default connect(mapStateToProps)(TransactionList);
