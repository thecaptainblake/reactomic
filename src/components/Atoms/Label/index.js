import React from 'react';
import PropTypes from 'prop-types';
import { StyledLabel } from './styled';

const Label = props => {
  const { text, ...styles } = props;
  return <StyledLabel {...styles}>{text}</StyledLabel>;
};

Label.propTypes = {
  text: PropTypes.string,
  uppercase: PropTypes.bool
};

Label.defaultProps = {
  text: 'Lorem ipsum dolor sit amet'
};

export { Label };
