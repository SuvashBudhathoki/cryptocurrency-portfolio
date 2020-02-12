import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/ConfigureStore";
import { Provider } from "react-redux";
import { addTransaction } from "./actions/transactions";
import "react-dates/lib/css/_datepicker.css";
import "normalize.css/normalize.css";
import "./styles/styles.scss";

const store = configureStore();

store.dispatch(
  addTransaction({ currencyName: "Bitcoin", units: 10, amount: 10 })
);

store.dispatch(
  addTransaction({ currencyName: "Zcash", units: 10, amount: 100 })
);

store.dispatch(
  addTransaction({ currencyName: "Ethereum", units: 10, amount: 5 })
);
//store.dispatch(setTextFilter("z"));

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById("app"));
