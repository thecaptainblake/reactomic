import React from 'react';
import PropTypes from 'prop-types';
import { StyledTableRow } from './styled';

const Trow = props => {
  const { ...styles } = props;

  return <StyledTableRow {...styles}>{props.children}</StyledTableRow>;
};

Trow.propTypes = {
  header: PropTypes.bool,
  body: PropTypes.bool
};

Trow.defaultProps = {
  header: false,
  body: false
};

export { Trow };
