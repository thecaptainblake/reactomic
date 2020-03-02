import React from 'react';
import PropTypes from 'prop-types';
import { StyledPill } from './styled';

const Pill = props => {
  const { text, ...styles } = props;
  return <StyledPill {...styles}>{text}</StyledPill>;
};

Pill.propTypes = {
  text: PropTypes.string,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  warning: PropTypes.bool,
  success: PropTypes.bool,
  danger: PropTypes.bool
};

Pill.defaultProps = {
  text: 'Pill'
};

export default Pill;
