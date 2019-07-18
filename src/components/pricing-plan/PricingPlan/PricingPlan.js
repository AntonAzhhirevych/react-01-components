import React from 'react';
import PricingItem from '../PricingItem/PricingItem';
import styles from '../PricingPlan/PricingPlan.module.css';
import PropTypes from 'prop-types';
import shortid from 'shortid';

const PricingPlan = ({ items }) => {
  return (
    <ul className={styles.plan}>
      {items.map(item => (
        <li key={shortid()} className={styles.item}>
          <PricingItem item={item} />
        </li>
      ))}
    </ul>
  );
};

PricingPlan.propTypes = {
  items: PropTypes.array.isRequired,
};

export default PricingPlan;
