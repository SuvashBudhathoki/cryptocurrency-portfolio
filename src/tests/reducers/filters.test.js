import filtersReducer from "../../reducers/Filters";

//TestCase for setting default filter value
//@@INIT not passed through our program, accessed from browser via redux dev tools

test("should setup default filter value", () => {
  const state = filtersReducer(undefined, { type: "@@INIT" });
  expect(state).toEqual({
    text: "",
    sortBy: "date"
  });
});

//TestCase for sorting by amount

test("should set sortBy to amount", () => {
  const state = filtersReducer(undefined, { type: "SORT_BY_AMOUNT" });
  expect(state.sortBy).toBe("amount");
});

//TestCase for sorting by amount
//assign sortBy as amount first and test to see if it changes

test("should set sortBy to date", () => {
  const currentSate = {
    text: "",
    sortBy: "amount"
  };
  const action = { type: "SORT_BY_DATE" };
  const state = filtersReducer(currentSate, action);
  expect(state.sortBy).toBe("date");
});

//TestCase for setting the text filter

test("should set textFilter", () => {
  const text = "This is my filter";
  const action = {
    type: "SET_TEXT_FILTER",
    text
  };
  const state = filtersReducer(undefined, action);

  expect(state.text).toBe(text);
});
