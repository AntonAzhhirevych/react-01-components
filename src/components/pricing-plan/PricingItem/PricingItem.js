import React from 'react';
import styles from '../PricingItem/PricingItem.module.css';
import PropTypes from 'prop-types';

const PricingItem = ({ item }) => {
  return (
    <div className={styles.container}>
      <img className={styles.img} src={item.icon} alt="pricing img" />
      <h2>{item.label}</h2>
      <p>{item.capacity}</p>
      <p>{item.description}</p>
      <p>{item.price}</p>
      <button>Get Started</button>
    </div>
  );
};

PricingItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default PricingItem;
