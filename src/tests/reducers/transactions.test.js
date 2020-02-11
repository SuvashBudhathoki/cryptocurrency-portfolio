import transactionsReducer from "../../reducers/Transactions";
import transactions from "../fixtures/transactions";

//TestCase for setting default state a

test("should set default state", () => {
  const state = transactionsReducer(undefined, { type: "@INIT" });
  expect(state).toEqual([]);
});

//TestCase for removing transaction by id

test("should remove transaction by id", () => {
  const action = {
    type: "REMOVE_TRANSACTION",
    id: transactions[1].id
  };
  const state = transactionsReducer(transactions, action);
  expect(state).toEqual([transactions[0], transactions[2]]);
});

//TestCase to ensure nothing changes when id doesn't match

test("should not remove transaction if id not found", () => {
  const action = {
    type: "REMOVE_TRANSACTION",
    id: "-1"
  };
  const state = transactionsReducer(transactions, action);
  expect(state).toEqual(transactions);
});

//TestCase to add a new transaction

test("should add transaction ", () => {
  const transaction = {
    id: "109",
    currencyName: "Coin",
    amounts: 100,
    units: 50,
    createdAt: 0
  };
  const action = {
    type: "ADD_TRANSACTION",
    transaction
  };
  const state = transactionsReducer(transactions, action);
  expect(state).toEqual([...transactions, transaction]);
});

//TestCase to edit the transaction by matching id

test("should edit transaction", () => {
  const amount = 10000;
  const action = {
    type: "EDIT_TRANSACTION",
    id: transactions[1].id,
    updates: {
      amount
    }
  };
  const state = transactionsReducer(transactions, action);
  expect(state[1].amount).toBe(amount);
});

//TestCase to ensure noting is edited if id doesn't match

test("should not edit transactions when id doesnot match", () => {
  const amount = 10000;
  const action = {
    type: "EDIT_TRANSACTION",
    id: "-1",
    updates: {
      amount
    }
  };
  const state = transactionsReducer(transactions, action);
  expect(state).toEqual(transactions);
});
