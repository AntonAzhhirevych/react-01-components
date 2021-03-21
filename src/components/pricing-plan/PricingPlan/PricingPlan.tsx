import { PricingPlanProps } from './interfaces';
import './PricingPlan.css';

const PricingPlan = ({ items }: PricingPlanProps) => {
  return (
    <ul className="plan">
      {items.map((item) => (
        <li key={item.description} className="item">
          <div className="container">
            <img className="img" src={item.icon} alt="pricing img" />
            <h2>{item.label}</h2>
            <p>{item.capacity}</p>
            <p>{item.description}</p>
            <p>{item.price}</p>
            {}
            <button className="button" type="button">
              Get Started
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default PricingPlan;
