import React from "react";
import { connect } from "react-redux";
import TransactionListItem from "./TransactionListItem";
import selectFilteredTransaction from "../selectors/Transactions";

export const TransactionList = (props) => (
  <div className="content-container">
    <div>
      <div className="list-header">
        <div className="show-for-mobile">Transactions</div>
        <div className="show-for-desktop">Transaction</div>
        <div className="show-for-desktop">Units</div>
        <div className="show-for-desktop">Amount</div>
      </div>
      <div className="list-body"></div>
      {props.transactions.length === 0 ? (
        <div className="list-item list-item--message">
          <span> No Transactions To Dispay</span>
        </div>
      ) : (
        props.transactions.map((transaction) => {
          return <TransactionListItem {...transaction} key={transaction.id} />;
        })
      )}
    </div>
  </div>
);

const mapStateToProps = (state) => {
  return {
    transactions: selectFilteredTransaction(state.transactions, state.filters),
  };
};

export default connect(mapStateToProps)(TransactionList);
