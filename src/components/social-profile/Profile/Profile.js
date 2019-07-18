import React from 'react';
import styles from '../Profile/Profile.module.css';

const Profile = ({ children }) => {
  return <div className={styles.profile}>{children}</div>;
};

export default Profile;
