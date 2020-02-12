import React from "react";
import { shallow } from "enzyme";
import { TransactionListFilters } from "../../components/TransactionListFilters";
import { filters, altFilters } from "../fixtures/fliters";

let setTextFilter, sortByDate, sortByAmount, wrapper;

beforeEach(() => {
  setTextFilter = jest.fn();
  sortByAmount = jest.fn();
  sortByDate = jest.fn();
  wrapper = shallow(
    <TransactionListFilters
      filters={filters}
      setTextFilter={setTextFilter}
      sortByAmount={sortByAmount}
      sortByDate={sortByDate}
    />
  );
});

//TestCase to ensure TransactionListFilter renders correctly

test("should render TransactionListFilter correctly", () => {
  expect(wrapper).toMatchSnapshot();
});

//TestCase to render with data

test("should render TransactionListFilter with alt data correctly", () => {
  wrapper.setProps({
    filters: altFilters
  });
  expect(wrapper).toMatchSnapshot();
});

//TestCase for sorByDate

test("should sort by date", () => {
  const value = "date";
  wrapper.setProps({
    filters: altFilters
  });
  wrapper.find("select").simulate("change", { target: { value } });
  expect(sortByDate).toHaveBeenCalled();
});

//TestCase for sortByAmount

test("should sort by Amount", () => {
  const value = "amount";

  wrapper.find("select").simulate("change", { target: { value } });
  expect(sortByAmount).toHaveBeenCalled();
});
