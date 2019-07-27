import React from 'react';
import PropTypes from 'prop-types';
// import StatsItem from '../StatsItem/StatsItem';
import styles from './Stats.module.css';

const Stats = ({ title, items }) => {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>{title}</h2>
      <ul className={styles.container}>
        {items.map(item => (
          <li key={item.id} className={styles.item}>
            <span>{item.label}</span>
            <span>{item.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Stats.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};

export default Stats;
