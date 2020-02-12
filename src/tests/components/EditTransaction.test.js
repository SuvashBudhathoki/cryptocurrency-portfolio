import React from "react";
import { shallow } from "enzyme";
import { EditTransaction } from "../../components/EditTransaction";
import transactions from "../fixtures/transactions";

let editTransaction, removeTransaction, history, wrapper;

//using beforeEach function from jest to set the values for each test before executiion

beforeEach(() => {
  editTransaction = jest.fn();
  removeTransaction = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(
    <EditTransaction
      editTransaction={editTransaction}
      removeTransaction={removeTransaction}
      history={history}
      transaction={transactions[0]}
    />
  );
});

test("should render EditTransaction page correctly", () => {
  expect(wrapper).toMatchSnapshot();
});

test("should handle editTransaction correctly", () => {
  wrapper.find("TransactionForm").prop("onSubmit")(transactions[0]);
  expect(history.push).toHaveBeenLastCalledWith("/");
  expect(editTransaction).toHaveBeenLastCalledWith(
    transactions[0].id,
    transactions[0]
  );
});

test("should handle removeTransaction correctly", () => {
  wrapper.find("button").simulate("click");
  expect(history.push).toHaveBeenLastCalledWith("/");
  expect(removeTransaction).toHaveBeenLastCalledWith({
    id: transactions[0].id
  });
});
