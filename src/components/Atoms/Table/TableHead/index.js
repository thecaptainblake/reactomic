import React from 'react';
import PropTypes from 'prop-types';
import { StyledTableHead } from './styled';

const Thead = props => {
  const { ...styles } = props;
  return <StyledTableHead {...styles}>{props.children}</StyledTableHead>;
};

Thead.propTypes = {};

Thead.defaultProps = {};

export { Thead };
