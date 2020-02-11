import React from "react";
import { connect } from "react-redux";
import numeral from "numeral";
import selectTransactions from "../selectors/Transactions";
import selectTransactionsTotal from "../selectors/TransactionTotal";
import selectUnitsTotal from "../selectors/UnitsTotal";

const TransactionTotal = ({
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
    <div>
      <h1>
        {`Viewing ${transactionCount} ${transactionWord} totalling AUD 
        ${formattedTransactionTotal} with a total of ${unitsTotal} ${unitWord}`}
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
    transactionsTotal: selectTransactionsTotal(visibleTransactions),
    unitsTotal: selectUnitsTotal(visibleTransactions)
  };
};

export default connect(mapStateToProps)(TransactionTotal);
