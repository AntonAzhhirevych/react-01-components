import './Stats.css';
import { StatsProps } from '../interfaces';

const Stats = ({ title, items }: StatsProps) => {
  return (
    <section className="section">
      <h2 className="title">{title}</h2>
      <ul className="container">
        {items.map((item) => (
          <li key={item.id} className="item">
            <span>{item.label}</span>
            <span>{item.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Stats;
