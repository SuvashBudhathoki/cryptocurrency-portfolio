import React from "react";
import { connect } from "react-redux";
import "react-dates/initialize";
import { DateRangePicker } from "react-dates";
import options from "./CurrencyNames";
import "react-dates/lib/css/_datepicker.css";
import Select from "react-select";
import { setTextFilter, sortByAmount, sortByDate } from "../actions/filters";

class TransactionListFilters extends React.Component {
  state = {
    calendarFocused: null,
    selectedOption: "Select your currency from here"
  };

  //Setting up currency name from user

  onValueChange = selectedOption => {
    this.props.dispatch(setTextFilter(selectedOption.label));
    this.setState(() => ({ selectedOption }));
  };

  //Sort By

  onSortChange = e => {
    if (e.target.value === "date") {
      this.props.dispatch(sortByDate());
    } else if (e.target.value === "amount") {
      this.props.dispatch(sortByAmount());
    }
  };

  onFocusChange = calendarFocused => {
    this.setState(() => ({ calendarFocused }));
  };

  render() {
    return (
      <div>
        <Select
          type="text"
          value={this.state.selectedOption}
          onChange={this.onValueChange}
          options={options}
          placeholder={this.state.selectedOption}
        />
        <select value={this.props.filters.sortBy} onChange={this.onSortChange}>
          <option value="date"> Date</option>
          <option value="amount"> Amount</option>
        </select>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    filters: state.filters
  };
};

export default connect(mapStateToProps)(TransactionListFilters);
