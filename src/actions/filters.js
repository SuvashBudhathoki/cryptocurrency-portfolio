// SET_TEXT_FILTER

export const setTextFilter = (text = "") => ({
  type: "SET_TEXT_FILTER",
  text
});

//SORT_BY_DATE

export const sortByDate = () => ({
  type: "SORT_BY_DATE"
});

//SORT_BY_AMOUNT

export const sortByAmount = () => ({
  type: "SORT_BY_AMOUNT"
});
