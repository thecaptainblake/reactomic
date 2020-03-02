import React from 'react';
import PropTypes from 'prop-types';
import { StyledHeader } from './styled';
import logo from '../../../images/reactomic.png';

const Header = props => {
  const { text, ...styles } = props;
  return (
    <StyledHeader {...styles}>
      <img className="header__image" src={logo} alt="app-logo" />
      {props.children}
    </StyledHeader>
  );
};

Header.propTypes = {
  sticky: PropTypes.bool
};

export { Header };
