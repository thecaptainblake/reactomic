import React from 'react';
import PropTypes from 'prop-types';
import { StyledAlert } from './styled';

const Alert = props => {
  const { title, text, ...styles } = props;
  return <StyledAlert {...styles}>{text}</StyledAlert>;
};

Alert.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string
};

Alert.defaultProps = {
  title: 'Alert Title ',
  body: 'Alert Body Messagge',
  text: 'Alert Body Messagge'
};

export { Alert };
