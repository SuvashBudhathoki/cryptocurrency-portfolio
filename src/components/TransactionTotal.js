import React from "react";
import { connect } from "react-redux";
import numeral from "numeral";
import selectTransactions from "../selectors/Transactions";
import selectTransactionsTotal from "../selectors/TransactionTotal";

const TransactionTotal = ({ transactionCount, transactionsTotal }) => {
  const transactionWord =
    transactionCount === 1 ? "transaction" : "transactions";
  const formattedTransactionTotal = numeral(transactionsTotal / 100).format(
    "$0,0.00"
  );
  return (
    <div>
      <h1>
        Viewing {transactionCount} {transactionWord} totalling
        {formattedTransactionTotal}
      </h1>
    </div>
  );
};

const mapStateToProps = state => {
  const visibleTransactions = selectTransactions(
    state.transactions,
    state.filters
  );

  return {
    transactionCount: visibleTransactions.length,
    transactionsTotal: selectTransactionsTotal(visibleTransactions)
  };
};

export default connect(mapStateToProps)(TransactionTotal);
