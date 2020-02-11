import moment from "moment";
import { sortByDate, sortByAmount, setTextFilter } from "../../actions/filters";

//TestCase for setTextFilter with some value passed and default value passed

test("should generate set text fiter  action object", () => {
  const action = setTextFilter("Bitcoin");

  expect(action).toEqual({
    type: "SET_TEXT_FILTER",
    text: "Bitcoin"
  });
});

test("should generate empty value for text filter action object", () => {
  const action = setTextFilter();
  expect(action).toEqual({
    type: "SET_TEXT_FILTER",
    text: ""
  });
});

//TestCase for sortByDate

test("should generate sort by date action object", () => {
  expect(sortByDate()).toEqual({ type: "SORT_BY_DATE" });
});

//TestCase for sortByAmount

test("should generate sort by amount action object", () => {
  expect(sortByDate()).toEqual({ type: "SORT_BY_DATE" });
});
