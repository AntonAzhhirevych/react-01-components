import React from 'react';
import Description from './Description/Description';
import Profile from './Profile/Profile';
import Stats from './Stats/Stats';

const FirstTask = () => {
  return (
    <Profile>
      <Description
        name="Timothy Grant"
        tag="tgrant"
        location="Sao Paulo,Brazil"
        src="https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg"
      />
      <Stats followers="198" views="3,685" likes="492" />
    </Profile>
  );
};

export default FirstTask;
