export default transactions => {
  return transactions
    .map(transaction => transaction.units)
    .reduce((sum, units) => sum + units, 0);
};
