import React from "react";
import { shallow } from "enzyme";
import { AddTransaction } from "../../components/AddTransaction";
import transactions from "../fixtures/transactions";

let startAddTransaction, history, wrapper;

//using beforeEach function from jest to set the values for each test before executiion

beforeEach(() => {
  startAddTransaction = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(
    <AddTransaction
      startAddTransaction={startAddTransaction}
      history={history}
    />
  );
});

test("should render startAddTransaction page correctly", () => {
  expect(wrapper).toMatchSnapshot();
});

test("should handle onSubmit", () => {
  wrapper.find("TransactionForm").prop("onSubmit")(transactions[1]);
  expect(history.push).toHaveBeenLastCalledWith("/");
  expect(startAddTransaction).toHaveBeenLastCalledWith(transactions[1]);
});
