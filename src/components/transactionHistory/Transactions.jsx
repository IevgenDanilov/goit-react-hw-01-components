import React from "react";
import PropTypes from "prop-types";
import styles from "./Transactions.module.scss";

const TransactionHistory = ({ items }) => (
  <table className={styles.transactionHistory}>
    <thead>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>

    <tbody>
      {items.map(({ id, type, amount, currency = "UAH" }) => (
        <tr key={id} className={styles.item}>
          <td>{type}</td>
          <td>{amount}</td>
          <td>{currency}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default TransactionHistory;

TransactionHistory.defaultProps = {
  items: [],
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string,
      amount: PropTypes.number,
      currency: PropTypes.string.isRequired,
    })
  ),
};
