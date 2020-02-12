import React from "react";
import { connect } from "react-redux";
import TransactionForm from "./TransactionForm";
import { editTransaction, removeTransaction } from "../actions/transactions";

export class EditTransaction extends React.Component {
  onSubmit = transaction => {
    this.props.editTransaction(this.props.transaction.id, transaction);
    this.props.history.push("/");
  };
  onRemove = () => {
    this.props.removeTransaction({ id: this.props.transaction.id });
    this.props.history.push("/");
  };
  render() {
    return (
      <div>
        <TransactionForm
          onSubmit={this.onSubmit}
          transaction={this.props.transaction}
        />
        <button onClick={this.onRemove}>Delete Transaction</button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch, props) => ({
  editTransaction: (id, transaction) =>
    dispatch(editTransaction(id, transaction)),
  removeTransaction: id => dispatch(removeTransaction(id))
});

const mapStateToProps = (state, props) => ({
  transaction: state.transactions.find(
    transaction => transaction.id === props.match.params.id
  )
});

export default connect(mapStateToProps, mapDispatchToProps)(EditTransaction);
