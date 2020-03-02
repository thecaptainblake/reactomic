import React from 'react';
import PropTypes from 'prop-types';

import { StyledRow } from './styled';

const Row = props => {
  const { ...styles } = props;
  return <StyledRow {...styles}>{props.children}</StyledRow>;
};

Row.propTypes = {
  center: PropTypes.bool
};

export { Row };
