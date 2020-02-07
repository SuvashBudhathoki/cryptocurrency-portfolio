import React from "react";
import { connect } from "react-redux";
import TransactionForm from "./TransactionForm";
import { addTransaction } from "../actions/transactions";

const AddTransaction = props => (
  <div>
    <TransactionForm
      onSubmit={Transaction => {
        props.dispatch(addTransaction(Transaction));
        props.history.push("/");
      }}
    />
  </div>
);

export default connect()(AddTransaction);
