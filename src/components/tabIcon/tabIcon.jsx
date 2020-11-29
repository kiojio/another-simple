import React from 'react';
import PropTypes from 'prop-types';
import {SvgCss} from 'react-native-svg';
function TabIcon({ icon }) {
  return (
    <SvgCss xml={icon} width={30} height={30}/>    
  );
}

TabIcon.propTypes = {
  source: PropTypes.number.isRequired,
};

export default TabIcon;
