import React from 'react';
import PropTypes from 'prop-types';

const StatsItem = ({ label, percentage }) => {
  return (
    <>
      <span>{label}</span>
      <span>{percentage}%</span>
    </>
  );
};

StatsItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default StatsItem;
