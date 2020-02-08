import React from "react";
import { Link } from "react-router-dom";

const TransactionListItem = ({ id, currencyName, amount, units, dispatch }) => (
  <div>
    <Link to={`/edit/${id}`}>
      <h3>{currencyName}</h3>
    </Link>
    <p>
      {units}units ${amount / 100}
    </p>
  </div>
);

export default TransactionListItem;
