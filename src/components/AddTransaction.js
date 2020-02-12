import React from "react";
import { connect } from "react-redux";
import TransactionForm from "./TransactionForm";
import { addTransaction } from "../actions/transactions";

export class AddTransaction extends React.Component {
  onSubmit = transaction => {
    this.props.addTransaction(transaction);
    this.props.history.push("/");
  };
  render() {
    return (
      <div>
        <h1> Add Transaction</h1>
        <TransactionForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addTransaction: transaction => dispatch(addTransaction(transaction))
});

export default connect(undefined, mapDispatchToProps)(AddTransaction);
