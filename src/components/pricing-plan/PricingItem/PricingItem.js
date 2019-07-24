import React from 'react';
import PropTypes from 'prop-types';
import styles from './PricingItem.module.css';

const PricingItem = ({ icon, label, capacity, description, price }) => {
  return (
    <div className={styles.container}>
      <img className={styles.img} src={icon} alt="pricing img" />
      <h2>{label}</h2>
      <p>{capacity}</p>
      <p>{description}</p>
      <p>{price}</p>
      <button type="button">Get Started</button>
    </div>
  );
};

PricingItem.propTypes = {
  icon: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  capacity: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default PricingItem;
