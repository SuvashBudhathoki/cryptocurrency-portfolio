import { createStore, combineReducers } from "redux";
import transactionsReducer from "../reducers/Transactions";
import filtersReducer from "../reducers/Filters";

//Creation of store

export default () => {
  const store = createStore(
    combineReducers({
      transactions: transactionsReducer,
      filters: filtersReducer
    })
  );
  return store;
};
