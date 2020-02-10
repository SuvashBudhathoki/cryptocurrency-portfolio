export default transactions => {
  return transactions
    .map(transaction => transaction.amount)
    .reduce((sum, amount) => sum + amount, 0);
};

// import React from "react";
// import { connect } from "react-redux";

// const TransactionTotal = props => (
//   <div>
//     <p>
//       Total Transaction :
//       {props.transactions.reduce(
//         (previous, transaction) => previous + transaction.amount,
//         0
//       )}
//     </p>
//   </div>
// );

// const mapStateToProps = state => {
//   return {
//     transactions: state.transactions
//   };
// };
// export default connect(mapStateToProps)(TransactionTotal);
