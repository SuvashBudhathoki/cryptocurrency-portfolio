import moment from "moment";

const filtersReducerDefaultState = {
  text: "",
  sortBy: "date"
};

//Reducer

export default (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case "SET_TEXT_FILTER":
      return {
        ...state,
        text: action.text
      };

    case "SORT_BY_DATE":
      return {
        ...state,
        sortBy: "date"
      };
    case "SORT_BY_AMOUNT":
      return {
        ...state,
        sortBy: "amount"
      };

    default:
      return state;
  }
};
