import React from "react";
import { shallow } from "enzyme";
import TransactionListItem from "../../components/TransactionListItem";
import transactions from "../fixtures/transactions";

//TestCase to check if the individual transaction are displayed

test("should render TransactionListItem correctly", () => {
  const wrapper = shallow(<TransactionListItem {...transactions[0]} />);
  expect(wrapper).toMatchSnapshot();
});
