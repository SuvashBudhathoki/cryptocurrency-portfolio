import moment from "moment";

//Get transactions according to filters

export default (transactions, { text, sortBy }) => {
  if (text.includes("Show All")) {
    return transactions;
  } else {
    return transactions
      .filter(transaction => {
        const textMatch = transaction.currencyName.includes(text);
        return textMatch;
      })
      .sort((a, b) => {
        if (sortBy === "date") {
          return a.createdAt < b.createdAt ? 1 : -1;
        } else if (sortBy === "amount") {
          return a.amount < b.amount ? 1 : -1;
        }
      });
  }
};
