import React from "react";
import { connect } from "react-redux";

class TransactionTotal extends React.Component {
  state = {
    total: 0
  };
  render() {
    return (
      <div>
        <p> Total Transaction</p>
      </div>
    );
  }
}

const mapPropsToState = state => {
  amount: state.transactions.amount;
};

export default connect()(TransactionTotal);
