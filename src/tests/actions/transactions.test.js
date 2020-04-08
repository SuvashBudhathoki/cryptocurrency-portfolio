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

const uid = "thisismytestuid";
const defaultAuthState =  {auth: { uid }}
const createMockStore = configureMockStore([thunk]);

beforeEach((done) => {
  const transactionsData = {};
  transactions.forEach(({ id, transaction, units, amount }) => {
    transactionsData[id] = { transction, units, amount };
  });
  database
    .ref(`users/${uid}/transactions`)
    .set(transactionsData)
    .then(() => done());
});

//TestCase for RemoveTransaction

test("should setup remove transaciton action object", () => {
  const action = removeTransaction({ id: "123abc" });
  expect(action).toEqual({
    type: "REMOVE_TRANSACTION",
    id: "123abc",
  });
});

test("should remove transaction from firebase", (done) => {
  const store = createMockStore(defaultAuthState });
  const id = transactions[2].id;
  store
    .dispatch(startRemoveTransaction({ id }))
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: "REMOVE_TRANSACTION",
        id,
      });
      return database.ref(`users/${uid}/transactions/${id}`).once("value");
    })
    .then((snapshot) => {
      expect(snapshot.val()).toBeFalsy();
      done();
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
  const store = createMockStore(defaultAuthState);
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
        return database.ref(`users/${uid}/transactions/${id}`).once("value");
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



test("should add transaction to database and store", (done) => {
  const store = createMockStore(defaultAuthState);
  const transactionData = {
    transaction: "Bitcoin",
    amount: 30,
    units: 30,
    createdAt: 9349392,
  };
  store.dispatch(startAddTransaction(transactionData)).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: "ADD_TRANSACTION",
      transaction: {
        id: expect.any(String),
        ...transactionData,
      }
    })
    return database.ref(`users/${uid}/transactions/${actions[0].transaction.id}`).once('value')
  }).then(snapshot=>{
    expect(snapshot.val()).toEqual(transactionData);
    done();
  })

});

test('should add expense with defaults to database and store', done=>{
  const store = createMockStore(defaultAuthState);
  const transactionDefaults = {
    transaction:'',
    amount:0,
    units:0,
    createdAt:0
  };

  store.dispatch(startAddTransaction({})).then(()=>{
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type:'ADD_TRANSACTION',
      transaction:{
        id: expect.any(String),
        ...transactionDefaults
      }
      
    })
    return database.ref(`users/${uid}/transactions/${actions[0].transaction.id}`).once('value')
    
  }).then(snapshot=>{
    expect(snapshot.val()).toEqual(transactionDefaults);
    done();
  });
});

