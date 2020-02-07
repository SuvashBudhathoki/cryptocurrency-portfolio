import { createStore, combineReducers } from "redux";
import transactionsReducer from "../reducers/Transactions";

//Creation of store

export default () => {
  const store = createStore(
    combineReducers({
      transactions: transactionsReducer
    })
  );
  return store;
};
