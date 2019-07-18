import React from 'react';
import styles from './Description.module.css';
import PropTypes from 'prop-types';

const Description = ({ src, name, tag, location, alt }) => {
  return (
    <div className={styles.description}>
      <img className={styles.avatar} src={src} alt={alt} />
      <p>{name}</p>
      <p>@{tag}</p>
      <p>{location}</p>
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
  src: PropTypes.string,
  name: PropTypes.string,
  location: PropTypes.string,
  tag: PropTypes.string,
};

export default Description;
