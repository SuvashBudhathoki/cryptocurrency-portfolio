import React from "react";
import { connect } from "react-redux";
import TransactionForm from "./TransactionForm";
import { editTransaction, removeTransaction } from "../actions/transactions";
import { setTextFilter } from "../actions/filters";

export class EditTransaction extends React.Component {
  onSubmit = (transaction) => {
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
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title"> Edit Transaction </h1>
          </div>
          <div className="content-container">
            <TransactionForm
              transaction={this.props.transaction}
              onSubmit={this.onSubmit}
            />
            <button
              className="button button--secondary"
              onClick={this.onRemove}
            >
              Delete Transaction
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch, props) => ({
  editTransaction: (id, transaction) =>
    dispatch(editTransaction(id, transaction)),
  removeTransaction: (id) => dispatch(removeTransaction(id)),
});

const mapStateToProps = (state, props) => ({
  transaction: state.transactions.find(
    (transaction) => transaction.id === props.match.params.id
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditTransaction);
