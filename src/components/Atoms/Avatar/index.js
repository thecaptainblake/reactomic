import React from 'react';
import PropTypes from 'prop-types';
import { StyledAvatar } from './styled';

const Avatar = props => {
  const { color, text, ...styles } = props;
  return (
    <StyledAvatar color={color} {...styles}>
      <span className="avatar__text">{text}</span>
    </StyledAvatar>
  );
};

Avatar.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  large: PropTypes.bool
};

Avatar.defaultProps = {
  color: '',
  text: 'MM'
};

export { Avatar };
