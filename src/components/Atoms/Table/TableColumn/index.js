import React from 'react';
import PropTypes from 'prop-types';
import { StyledTableColumn } from './styled';

const Tcol = props => {
  const { span, shrink, basis, ...styles } = props;
  return (
    <StyledTableColumn span={span} shrink={shrink} basis={basis} {...styles}>
      {props.children}
    </StyledTableColumn>
  );
};

Tcol.propTypes = {
  span: PropTypes.string,
  shrink: PropTypes.string,
  basis: PropTypes.string,
  left: PropTypes.bool,
  right: PropTypes.bool,
  center: PropTypes.bool
};
Tcol.defaultProps = {
  span: '0',
  shrink: '1',
  basis: '0'
};

export { Tcol };
