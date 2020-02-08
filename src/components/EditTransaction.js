import React from "react";
import { connect } from "react-redux";
import TransactionForm from "./TransactionForm";
import { editTransaction, removeTransaction } from "../actions/transactions";

const EditTransaction = props => {
  return (
    <div>
      <TransactionForm
        transaction={props.transaction}
        onSubmit={transaction => {
          props.dispatch(editTransaction(props.transaction.id, transaction));
          props.history.push("/");
        }}
      />
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    transaction: state.transactions.find(
      transaction => transaction.id === props.match.params.id
    )
  };
};

export default connect(mapStateToProps)(EditTransaction);
