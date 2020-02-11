import {
  addTransaction,
  editTransaction,
  removeTransaction
} from "../../actions/transactions";

//TestCase for RemoveTransaction

test("should setup remove transaciton action object", () => {
  const action = removeTransaction({ id: "123abc" });
  expect(action).toEqual({
    type: "REMOVE_TRANSACTION",
    id: "123abc"
  });
});

//TestCase for Edit Transaction

test("should setup edit transaction action object", () => {
  const action = editTransaction(123, { amount: 300 });
  expect(action).toEqual({
    type: "EDIT_TRANSACTION",
    id: 123,
    updates: {
      amount: 300
    }
  });
});

//TestCase for AddTransaction

test("should setup add transaction action object", () => {
  const transactionData = {
    currencyName: "Ss",
    amount: 5,
    units: 10,
    createdAt: 100
  };
  const action = addTransaction(transactionData);
  expect(action).toEqual({
    type: "ADD_TRANSACTION",
    transaction: {
      ...transactionData,
      id: expect.any(String)
    }
  });
});

test("should setup default value add transaction action object", () => {
  const transactionData = {
    currencyName: "",
    amount: 0,
    units: 0,
    createdAt: 0
  };
  const action = addTransaction();

  expect(action).toEqual({
    type: "ADD_TRANSACTION",
    transaction: {
      ...transactionData,
      id: expect.any(String)
    }
  });
});
