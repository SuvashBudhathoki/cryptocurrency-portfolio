import React from "react";
import { connect } from "react-redux";
import numeral from "numeral";
import { Link } from "react-router-dom";
import selectTransactions from "../selectors/Transactions";
import selectTransactionsTotal from "../selectors/TransactionTotal";
import selectUnitsTotal from "../selectors/UnitsTotal";

export const TransactionTotal = ({
  transactionCount,
  transactionsTotal,
  unitsTotal
}) => {
  const transactionWord =
    transactionCount === 1 ? "transaction" : "transactions";
  const formattedTransactionTotal = numeral(transactionsTotal).format(
    "$0,0.00"
  );
  const unitWord = unitsTotal <= 1 ? "unit" : "units";
  return (
    <div className="page-header">
      <div className="content-container">
        <h1 className="page-header__title">
          Viewing <span>{transactionCount}</span> {transactionWord} totalling
          AUD
          <span>{formattedTransactionTotal}</span> with a total of
          <span> {unitsTotal}</span> {unitWord}
          <div className="page-header__actions">
            <Link to="/create" className="button">
              Add Transaction
            </Link>
          </div>
        </h1>
      </div>
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
    transactionsTotal: selectTransactionsTotal(visibleTransactions),
    unitsTotal: selectUnitsTotal(visibleTransactions)
  };
};

export default connect(mapStateToProps)(TransactionTotal);
