import {
  addTransaction,
  startAddTransaction,
  editTransaction,
  startEditTransaction,
  removeTransaction,
} from "../../actions/transactions";
import confifureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { database } from "../../firebase/firebase";

import transactions from "../fixtures/transactions";
import { configure } from "enzyme";

const createMockStore = configureMockStore([thunk]);

//TestCase for RemoveTransaction

test("should setup remove transaciton action object", () => {
  const action = removeTransaction({ id: "123abc" });
  expect(action).toEqual({
    type: "REMOVE_TRANSACTION",
    id: "123abc",
  });
});

//TestCase for Edit Transaction

test("should setup edit transaction action object", () => {
  const action = editTransaction(123, { amount: 300 });
  expect(action).toEqual({
    type: "EDIT_TRANSACTION",
    id: 123,
    updates: {
      amount: 300,
    },
  });
});

test("should edit transaction from firebase", (done) => {
  const store = createMockStore({});
  const id = transactions[0].id;
  const updates = { amount: 100 };

  store.dispatch(
    startEditTransaction(id, updates)
      .then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
          type: "EDIT_EXPENSE",
          id,
          updates,
        });
        return database.ref(`transactions/${id}`).once("value");
      })
      .then((snapshot) => {
        expect(snapshot.val().amount).toBe(updates.amount);
        done();
      })
  );
});

//TestCase for AddTransaction

test("should setup add transaction action object", () => {
  const action = addTransaction(transactions[2]);
  expect(action).toEqual({
    type: "ADD_TRANSACTION",
    transaction: transactions[2],
  });
});

test("should add transaction to database and store", () => {
  const store = createMockStore({});
  const transactionData = {
    transaction: "Bitcoin",
    amount: 30,
    units: 30,
    createdAt: 9349392,
  };
  store.dispatch(startAddTransaction(transactionData)).then(() => {
    const actions = store.getActions();
    expect(action[0]).toEqual({
      type: "ADD_TRANSACTION",
      transaction: {
        id: expect.any(String),
        ...transactionData,
      },
    });
  });
  done();
});
