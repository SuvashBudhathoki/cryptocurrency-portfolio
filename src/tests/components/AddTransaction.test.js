import React from "react";
import { shallow } from "enzyme";
import { AddTransaction } from "../../components/AddTransaction";
import transactions from "../fixtures/transactions";

let addTransaction, history, wrapper;

//using beforeEach function from jest to set the values for each test before executiion

beforeEach(() => {
  addTransaction = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(
    <AddTransaction addTransaction={addTransaction} history={history} />
  );
});

test("should render AddTransaction page correctly", () => {
  expect(wrapper).toMatchSnapshot();
});

test("should handle onSubmit", () => {
  wrapper.find("TransactionForm").prop("onSubmit")(transactions[1]);
  expect(history.push).toHaveBeenLastCalledWith("/");
  expect(addTransaction).toHaveBeenLastCalledWith(transactions[1]);
});
