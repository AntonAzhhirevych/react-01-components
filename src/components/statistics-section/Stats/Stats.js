import React from 'react';
import StatsItem from '../StatsItem/StatsItem';
import styles from '../Stats/Stats.module.css';
import PropTypes from 'prop-types';

const Stats = ({ title, items }) => {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>{title}</h2>
      <ul className={styles.container}>
        {items.map(item => (
          <li key={item.id} className={styles.item}>
            <StatsItem item={item} />
          </li>
        ))}
      </ul>
    </section>
  );
};

Stats.propTypes = {
  title: PropTypes.string,
  items: PropTypes.array.isRequired,
};

export default Stats;
