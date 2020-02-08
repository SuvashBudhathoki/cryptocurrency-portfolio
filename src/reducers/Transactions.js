//Transactions Reducers

const transactionReducerDefaultState = [];

export default (state = transactionReducerDefaultState, action) => {
  switch (action.type) {
    case "ADD_TRANSACTION":
      return [...state, action.transaction];

    // presenting the transactions which are not equal to the transaction selected by user for removal

    case "REMOVE_TRANSACTION":
      return state.filter(({ id }) => id !== action.id);

    case "EDIT_TRANSACTION":
      return state.map(transaction => {
        if (transaction.id === action.id) {
          return {
            ...transaction,
            ...action.updates
          };
        } else {
          return transaction;
        }
      });

    default:
      return state;
  }
};
