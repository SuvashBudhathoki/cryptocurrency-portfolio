import uuid from "uuid";

//Defining Action generators for Transactions

//Add_Transaction

//initializing default value and destructuring from other passed objects

export const addTransaction = ({
  currencyName = "",
  units = 0,
  amount = 0,
  createdAt = 0
} = {}) => ({
  type: "ADD_TRANSACTION",
  transaction: {
    id: uuid(),
    currencyName,
    units,
    amount,
    createdAt
  }
});

//Remove_Transaction

export const removeTransaction = ({ id } = {}) => ({
  type: "REMOVE_TRANSACTION",
  id
});

// Edit_Transaction

export const editTransaction = (id, updates) => ({
  type: "EDIT_EXPENSE",
  id,
  updates
});
