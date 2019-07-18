import React from 'react';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import transaction from './transactions.json';

const FourthTask = () => {
  return <TransactionHistory items={transaction} />;
};

export default FourthTask;
