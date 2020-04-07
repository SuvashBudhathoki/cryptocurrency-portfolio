import uuid from "uuid";
import database from "../firebase/firebase";

//Add_Transaction h

export const addTransaction = (transaction) => ({
  type: "ADD_TRANSACTION",
  transaction,
});

export const startAddTransaction = (transactionData = {}) => {
  return (dispatch) => {
    const {
      currencyName = "",
      units = 0,
      amount = 0,
      createdAt = 0,
    } = transactionData;

    const transaction = {
      currencyName,
      units,
      amount,
      createdAt,
    };

    database
      .ref("transactions")
      .push(transaction)
      .then((ref) => {
        dispatch(
          addTransaction({
            id: ref.key,
            ...transaction,
          })
        );
      });
  };
};

//Remove_Transaction

export const removeTransaction = ({ id } = {}) => ({
  type: "REMOVE_TRANSACTION",
  id,
});

// Edit_Transaction

export const editTransaction = (id, updates) => ({
  type: "EDIT_TRANSACTION",
  id,
  updates,
});
