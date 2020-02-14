import React from "react";
import moment from "moment";
import "react-dates/initialize";
import { SingleDatePicker } from "react-dates";
import Select from "react-select";
import { currencyNames } from "../fixtures/CurrencyNames";

export default class TransactionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currencyName: props.transaction ? props.transaction.currencyName : "",
      amount: props.transaction ? props.transaction.amount : "",
      units: props.transaction ? props.transaction.units : "",
      createdAt: props.transaction
        ? moment(props.transaction.createdAt)
        : moment(),
      error: "",
      selectedOption: props.transaction
        ? props.transaction.currencyName
        : "Enter the Currency Name ",
      calendarFocused: false
    };
  }

  //Setting up currency name from user

  onCurrencyChange = selectedOption => {
    this.setState(() => ({
      selectedOption: selectedOption.label,
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
    this.setState(() => ({ calendarFocused: focused }));
  };

  //onForm Submit
  //check to see if amounts and units of cryptocurrency has been provided
  //ask user to re-enter the information if not provided

  onSubmit = e => {
    e.preventDefault();

    if (!this.state.amount || !this.state.units || !this.state.currencyName) {
      this.setState(() => ({
        error:
          "Please provide the currency name with total units and total amounts!!"
      }));
    } else {
      this.setState(() => ({
        error: ""
      }));
      this.props.onSubmit({
        currencyName: this.state.currencyName,
        amount: parseFloat(this.state.amount, 10),
        units: parseFloat(this.state.units, 10),
        createdAt: this.state.createdAt.valueOf()
      });
    }
  };

  render() {
    return (
      <form className="form" onSubmit={this.onSubmit}>
        {this.state.error && <p className="form__error">{this.state.error}</p>}

        <Select
          value={this.state.selectedOption}
          onChange={this.onCurrencyChange}
          options={currencyNames}
          autoFocus
          placeholder={this.state.selectedOption}
        />

        <input
          type="text"
          placeholder="Units"
          className="text-input"
          value={this.state.units}
          onChange={this.onUnitsChange}
        />

        <input
          type="text"
          placeholder="Total Amount"
          className="text-input"
          value={this.state.amount}
          onChange={this.onAmountChange}
        />
        <SingleDatePicker
          date={this.state.createdAt}
          onDateChange={this.onDateChange}
          focused={this.state.calendarFocused}
          onFocusChange={this.onFocusChange}
          numberOfMonths={1}
          isOutsideRange={() => false}
          displayFormat="DD/MM/YYYY"
        />
        <div>
          <button className="button">
            {this.props.transaction ? "Edit Transaction" : "Add Transaction"}
          </button>
        </div>
      </form>
    );
  }
}
