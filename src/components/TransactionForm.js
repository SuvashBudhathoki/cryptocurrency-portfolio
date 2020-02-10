import React from "react";
import moment from "moment";
import "react-dates/initialize";
import { SingleDatePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";
import Select from "react-select";
import options from "./CurrencyNames";

export default class TransactionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currencyName: props.transaction ? props.transaction.currencyName : "",
      amount: props.transaction
        ? (props.transaction.amount / 100).toString()
        : "",
      units: props.transaction ? props.transaction.units : "",
      createdAt: props.transaction
        ? moment(props.transaction.createdAt)
        : moment(),
      error: "",
      value: "",
      selectedOption: null
    };
  }

  //Setting up currency name from user

  onValueChange = selectedOption => {
    this.setState(() => ({
      selectedOption,
      currencyName: selectedOption.label
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

  onDateChange = createdAt => {
    if (createdAt) {
      this.setState(() => ({ createdAt }));
    }
  };

  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calenderFocused: focused }));
  };

  //onForm Submit
  //check to see if amounts and units of cryptocurrency has been provided
  //ask user to re-enter the information if not provided

  onSubmit = e => {
    e.preventDefault();

    if (!this.state.amount || !this.state.units || !this.state.currencyName) {
      this.setState(() => ({
        error:
          "Please provide total units and amounts with cryptocurrency name!!"
      }));
    } else {
      this.setState(() => ({ error: "" }));
      this.props.onSubmit({
        currencyName: this.state.currencyName,
        amount: parseFloat(this.state.amount, 10) * 100,
        units: parseFloat(this.state.units, 10),
        createdAt: this.state.createdAt.valueOf()
      });
    }
  };

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.onSubmit}>
          <Select
            value={this.state.selectedOption}
            onChange={this.onValueChange}
            options={options}
            autoFocus
            placeholder="Select your currency name"
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
          <SingleDatePicker
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.calenderFocused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={() => false}
          />

          <button>
            {this.props.transaction ? "Edit Transaction" : "Add Transaction"}
          </button>
        </form>
      </div>
    );
  }
}
