import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
// import PricingItem from '../PricingItem/PricingItem';
import styles from './PricingPlan.module.css';

const PricingPlan = ({ items }) => {
  // console.log(item)
  return (
    <ul className={styles.plan}>
      {items.map(item => (
        <li key={shortid()} className={styles.item}>
          <div className={styles.container}>
            <img className={styles.img} src={item.icon} alt="pricing img" />
            <h2>{item.label}</h2>
            <p>{item.capacity}</p>
            <p>{item.description}</p>
            <p>{item.price}</p>
            <button type="button">Get Started</button>
          </div>
        </li>
      ))}
    </ul>
  );
};

PricingPlan.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      capacity: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};

export default PricingPlan;
