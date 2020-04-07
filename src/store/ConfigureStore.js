import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import transactionsReducer from "../reducers/Transactions";
import filtersReducer from "../reducers/Filters";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//Creation of store

export default () => {
  const store = createStore(
    combineReducers({
      transactions: transactionsReducer,
      filters: filtersReducer,
<<<<<<< HEAD
    })
=======
    }),
    composeEnhancers(applyMiddleware(thunk))
>>>>>>> master
  );
  return store;
};
