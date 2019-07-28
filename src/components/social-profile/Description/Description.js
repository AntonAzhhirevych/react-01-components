import React from 'react';
import PropTypes from 'prop-types';
import styles from './Description.module.css';

const Description = ({ src, name, tag, location, alt }) => {
  return (
    <div className={styles.description}>
      <img className={styles.img} src={src} alt={alt} />
      <p className={styles.name}>{name}</p>
      <p className={styles.text}>@{tag}</p>
      <p className={styles.text}>{location}</p>
    </div>
  );
};

Description.defaultProps = {
  alt: 'user avatar',
  src: 'photo',
  name: 'name',
  location: 'location',
  tag: 'tag',
};

Description.propTypes = {
  alt: PropTypes.string,
  src: PropTypes.string,
  name: PropTypes.string,
  location: PropTypes.string,
  tag: PropTypes.string,
};

export default Description;
