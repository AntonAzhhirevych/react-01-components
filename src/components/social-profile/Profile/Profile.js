import React from 'react';
import PropTypes from 'prop-types';
import styles from './Profile.module.css';

const Profile = ({ children }) => {
  return <div className={styles.profile}>{children}</div>;
};

Profile.propTypes = {
  children: PropTypes.instanceOf(Object).isRequired,
};

export default Profile;
