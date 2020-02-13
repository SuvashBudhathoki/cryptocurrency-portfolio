import React from "react";
import { connect } from "react-redux";
import currencyNames from "../fixtures/CurrencyNames";
import Select from "react-select";
import { setTextFilter, sortByAmount, sortByDate } from "../actions/filters";

export class TransactionListFilters extends React.Component {
  state = {
    calendarFocused: null,
    selectedOption: "Select the Currency to Group by"
  };

  //Setting up currency name from user

  onValueChange = selectedOption => {
    this.props.setTextFilter(selectedOption.label);
    this.setState(() => ({ selectedOption }));
  };

  onOptionSelected;

  //Sort By

  onSortChange = e => {
    if (e.target.value === "date") {
      this.props.sortByDate();
    } else if (e.target.value === "amount") {
      this.props.sortByAmount();
    }
  };

  onFocusChange = calendarFocused => {
    this.setState(() => ({ calendarFocused }));
  };

  render() {
    return (
      <div className="content-container">
        <div className="input-group__item">
          <Select
            type="text"
            value={this.state.selectedOption}
            onChange={this.onValueChange}
            options={currencyNames}
            placeholder={this.state.selectedOption}
            isOptionSelected={this.onOptionSelected}
          />
        </div>

        <div className="input-group">
          <div className="input-group__item">
            <label className="label" value="text">
              Sort By
            </label>
            <select
              className=" text-input select"
              value={this.props.filters.sortBy}
              onChange={this.onSortChange}
            >
              <option value="date">Date</option>
              <option value="amount"> Amount</option>
            </select>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({ filters: state.filters });

const mapDispatchToProps = dispatch => ({
  setTextFilter: text => dispatch(setTextFilter(text)),
  sortByDate: () => dispatch(sortByDate()),
  sortByAmount: () => dispatch(sortByAmount())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TransactionListFilters);
