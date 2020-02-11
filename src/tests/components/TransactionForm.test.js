import React from "react";
import { shallow } from "enzyme";
import TransactionForm from "../../components/TransactionForm";
import transactions from "../fixtures/transactions";
import moment from "moment";

//TestCase to ensure TransactionForm executes correctly with empty data

test("should render TransactionForm correctly", () => {
  const wrapper = shallow(<TransactionForm />);
  expect(wrapper).toMatchSnapshot();
});

//TestCase to ensure TransactionForm executes correctly with transaction data

test("should render TransactionForm correctly with transaction data", () => {
  const wrapper = shallow(<TransactionForm transaction={transactions[0]} />);
  expect(wrapper).toMatchSnapshot();
});

//TestCase to ensure TransactionForm can execute error for invalid submission

test("should render error for invalid form submission", () => {
  const wrapper = shallow(<TransactionForm />);
  expect(wrapper).toMatchSnapshot();
  wrapper.find("form").simulate("submit", { preventDefault: () => {} });
  expect(wrapper.state("error").length).toBeGreaterThan(0);
  expect(wrapper).toMatchSnapshot();
});

//TestCase to ensure correct amount is saved with valid input

test("should set amount if valid input", () => {
  const value = "100.8";
  const wrapper = shallow(<TransactionForm />);
  wrapper
    .find("input")
    .at(1)
    .simulate("change", { target: { value } });
  expect(wrapper.state("amount")).toBe(value);
});

//TestCase to ensure default value is set with invalid input

test("should set amount if invalid input", () => {
  const value = "100.888";
  const wrapper = shallow(<TransactionForm />);
  wrapper
    .find("input")
    .at(1)
    .simulate("change", { target: { value } });
  expect(wrapper.state("amount")).toBe("");
});

//TestCase to save correct number of units with valid input

test("should set units if valid input", () => {
  const value = "100";
  const wrapper = shallow(<TransactionForm />);
  wrapper
    .find("input")
    .at(0)
    .simulate("change", { target: { value } });
  expect(wrapper.state("units")).toBe(value);
});

//TestCase to ensure form is submitted properly with valid set of data using spies

test("should call onSubmit prop for valid form submission", () => {
  const onSubmitSpy = jest.fn();
  const wrapper = shallow(
    <TransactionForm transaction={transactions[0]} onSubmit={onSubmitSpy} />
  );
  wrapper.find("form").simulate("submit", {
    preventDefault: () => {}
  });
  expect(wrapper.state("error")).toBe("");
  expect(onSubmitSpy).toHaveBeenLastCalledWith({
    currencyName: transactions[0].currencyName,
    amount: transactions[0].amount,
    units: transactions[0].units,
    createdAt: transactions[0].createdAt
  });
});

//TestCase for date change

test("should set new date on date change", () => {
  const now = moment();
  const wrapper = shallow(<TransactionForm />);
  wrapper.find("withStyles(SingleDatePicker)").prop("onDateChange")(now);
  expect(wrapper.state("createdAt")).toEqual(now);
});

//TestCase for calendarFocus change

test("should set calendar focus on change", () => {
  const focused = true;
  const wrapper = shallow(<TransactionForm />);
  wrapper.find("withStyles(SingleDatePicker)").prop("onFocusChange")({
    focused
  });
  expect(wrapper.state("calendarFocused")).toEqual(focused);
});
