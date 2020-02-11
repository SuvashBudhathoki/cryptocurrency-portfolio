import React from "react";
import { shallow } from "enzyme";
import TransactionForm from "../../components/TransactionForm";

test("should render TransactionForm correctly", () => {
  const wrapper = shallow(<TransactionForm />);
  expect(wrapper).toMatchSnapshot();
});
