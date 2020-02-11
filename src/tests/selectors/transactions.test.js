import selectTransactions from "../../selectors/Transactions";
import transactions from "../fixtures/transactions";

//TestCase for filtering by Text

test("should filter by text value", () => {
  const filters = {
    text: "Litecoin",
    sortBy: "Date"
  };
  const result = selectTransactions(transactions, filters);
  expect(result).toEqual([transactions[1]]);
});

//TestCase for filtering by Date

test("should filter by date", () => {
  const filters = {
    text: "",
    sortBy: "date"
  };
  const result = selectTransactions(transactions, filters);
  expect(result).toEqual([transactions[2], transactions[0], transactions[1]]);
});

//TestCase for filtering by Amount

test("should filter by amount", () => {
  const filters = {
    text: "",
    sortBy: "amount"
  };
  const result = selectTransactions(transactions, filters);
  expect(result).toEqual([transactions[0], transactions[1], transactions[2]]);
});
