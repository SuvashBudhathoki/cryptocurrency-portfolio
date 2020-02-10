import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import numeral from "numeral";

const TransactionListItem = ({
  id,
  currencyName,
  amount,
  units,
  createdAt
}) => (
  <div>
    <Link to={`/edit/${id}`}>
      <h3>{currencyName}</h3>
    </Link>
    <p>
      {units}units -{numeral(amount).format("$0,0.00")}-
      {moment(createdAt).format("MMMM Do, YYYY")}
    </p>
  </div>
);

export default TransactionListItem;
