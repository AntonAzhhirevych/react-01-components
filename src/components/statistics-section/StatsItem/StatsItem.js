import React from 'react';
import PropTypes from 'prop-types';

const StatsItem = ({ item }) => {
  return (
    <>
      <span>{item.label}</span>
      <span>{item.percentage}%</span>
    </>
  );
};

StatsItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default StatsItem;
