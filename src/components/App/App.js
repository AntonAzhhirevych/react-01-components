import React from 'react';
import styles from './App.module.css';
import FirsTask from '../social-profile/FirstTask';
import SecondTask from '../pricing-plan/SecondTask';
import ThirdTask from '../statistics-section/ThirdTask';
import ForthTask from '../transaction-history/FourthTask';

const App = () => {
  return (
    <div className={styles.container}>
      <FirsTask />
      <SecondTask />
      <ThirdTask />
      <ForthTask />
    </div>
  );
};

export default App;
