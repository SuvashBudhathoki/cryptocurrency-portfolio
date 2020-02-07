import React from "react";
import { removeTransaction } from "../actions/transactions";
import { connect } from "react-redux";

const TransactionListItem = ({
  id,
  currencyName,
  amount,
  createdAt,
  units,
  dispatch
}) => (
  <div>
    <h3>{currencyName}</h3>
    <p>
      {units}units ${amount} - {createdAt}
    </p>

    <button
      onClick={() => {
        dispatch(removeTransaction({ id }));
      }}
    >
      Remove
    </button>
  </div>
);

export default connect()(TransactionListItem);
