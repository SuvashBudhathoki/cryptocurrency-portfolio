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

    return database
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

export const startRemoveTransaction = ({ id }) => {
  return (dispatch) => {
    return database
      .ref(`transactions/${id}`)
      .remove()
      .then(() => {
        dispatch(removeTransaction({ id }));
      });
  };
};

// Edit_Transaction

export const editTransaction = (id, updates) => ({
  type: "EDIT_TRANSACTION",
  id,
  updates,
});

export const startEditTransaction = (id, updates) => {
  return (dispatch) => {
    return database
      .ref(`transactions/${id}`)
      .update(updates)
      .then(() => dispatch(editTransaction(id, updates)));
  };
};

export const setTransactions = (transactions) => ({
  type: "SET_TRANSACTIONS",
  transactions,
});

export const startSetTransactions = () => {
  return (dispatch) => {
    return database
      .ref("transactions")
      .once("value")
      .then((snapshot) => {
        const transactions = [];
        snapshot.forEach((childSnapshot) => {
          transactions.push({
            id: childSnapshot.key,
            ...childSnapshot.val(),
          });
        });
        dispatch(setTransactions(transactions));
      });
  };
};
