import React from "react";
import moment from "moment";
import { SingleDatePicker } from "react-dates";

export default class TransactionForm extends React.Component {
  state = {
    currencyName: "",
    amount: "",
    units: "",
    error: ""
  };

  //Setting up currency name from user
  onCurrencyNameChange = e => {
    const currencyName = e.target.value;
    this.setState(() => ({
      currencyName
    }));
  };

  //Change the value of amount as received
  //validate to see if there is amount or not
  //ensure user input numbers from 1 till infinite, with upto 2 decimal places
  onAmountChange = e => {
    const amount = e.target.value;
    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount }));
    }
  };

  //recording the number of units purchased

  onUnitsChange = e => {
    const units = e.target.value;
    if (!units || units.match(/^\d{1,}?$/)) {
      this.setState(() => ({ units }));
    }
  };

  //onForm Submit
  //check to see if amounts and units of cryptocurrency has been provided
  //ask user to re-enter the information if not provided

  onSubmit = e => {
    e.preventDefault();

    if (!this.state.amount || !this.state.units) {
      this.setState(() => ({
        error:
          "Please provide total units and amounts for cryptocurrency purchased!!"
      }));
    } else {
      this.setState(() => ({ error: " " }));
      this.props.onSubmit({
        currencyName: this.state.currencyName,
        amount: parseFloat(this.state.amount, 10) * 100,
        units: parseFloat(this.state.units, 10) * 100
      });
    }
  };

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            placeholder="CurrencyName"
            value={this.state.currencyName}
            onChange={this.onCurrencyNameChange}
            autoFocus
          />

          <input
            type="text"
            placeholder="Units"
            value={this.state.units}
            onChange={this.onUnitsChange}
          />

          <input
            type="text"
            placeholder="Amount"
            value={this.state.amount}
            onChange={this.onAmountChange}
          />
          <button> Add Transaction</button>
        </form>
      </div>
    );
  }
}
