import React from 'react';
import { StyledTableBody } from './styled';

const Tbody = props => {
  return <StyledTableBody> {props.children} </StyledTableBody>;
};

Tbody.propTypes = {};

Tbody.defaultProps = {};

export { Tbody };
