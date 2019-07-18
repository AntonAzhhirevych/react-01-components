import React from 'react';
import styles from './Stats.module.css';
import PropTypes from 'prop-types';

console.log(styles);

const Stats = ({ followers, views, likes }) => {
  return (
    <ul className={styles.stats}>
      <li className={styles.label}>
        <span>followers</span>
        <span>{followers}</span>
      </li>
      <li className={styles.label}>
        <span>Views</span>
        <span>{views}</span>
      </li>
      <li className={styles.label}>
        <span>Likes</span>
        <span>{likes}</span>
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
