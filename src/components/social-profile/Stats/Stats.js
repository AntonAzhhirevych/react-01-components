import React from 'react';
import PropTypes from 'prop-types';
import styles from './Stats.module.css';

const Stats = ({ followers, views, likes }) => {
  return (
    <ul className={styles.stats}>
      <li className={styles.label}>
        <span className={styles.text}>followers</span>
        <span className={styles.desc}>{followers}</span>
      </li>
      <li className={styles.label}>
        <span className={styles.text}>Views</span>
        <span className={styles.desc}>{views}</span>
      </li>
      <li className={styles.label}>
        <span className={styles.text}>Likes</span>
        <span className={styles.desc}>{likes}</span>
      </li>
    </ul>
  );
};

Stats.defaultProps = {
  followers: 0,
  views: 0,
  likes: 0,
};

Stats.propTypes = {
  followers: PropTypes.string,
  views: PropTypes.string,
  likes: PropTypes.string,
};

export default Stats;
