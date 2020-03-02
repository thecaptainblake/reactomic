import React from 'react';
import PropTypes from 'prop-types';
import { StyledButton } from './styled';

const Button = props => {
  const { children, onClick, ...styles } = props;

  return (
    <StyledButton onClick={onClick} {...styles}>
      {children}
    </StyledButton>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  secondary: PropTypes.bool,
  small: PropTypes.bool
};

Button.defaultProps = {
  onClick: () => {}
};

export { Button };
