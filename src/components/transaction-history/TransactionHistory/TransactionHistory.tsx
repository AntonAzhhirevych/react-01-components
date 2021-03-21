import './TransactionHistory.css';
import { TransactionHistoryProps } from './interfaces';

const TransactionHistory = ({ items }: TransactionHistoryProps) => {
  console.log(items[0]);
  return (
    <table className="table">
      <thead>
        <tr className="tr">
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map((item) => (
          <tr key={item.id}>
            <td className="td">{item.type}</td>
            <td className="td">{item.amount}</td>
            <td className="td">{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
