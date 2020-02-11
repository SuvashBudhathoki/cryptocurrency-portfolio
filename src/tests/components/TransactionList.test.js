import React from "react";
import { shallow } from "enzyme";
import { TransactionList } from "../../components/TransactionList";
import transactions from "../fixtures/transactions";

//TestCase to check if the transactions are displayed

test("should render TransactionList with transaction", () => {
  const wrapper = shallow(<TransactionList transactions={transactions} />);
  expect(wrapper).toMatchSnapshot();
});

//TestCase to check if no transactions is displayed when passed an empty array

test("should render TransactionList with empty message", () => {
  const wrapper = shallow(<TransactionList transactions={[]} />);
  expect(wrapper).toMatchSnapshot();
});
