import React from 'react';
import { GridWrapper } from './styled';

export { Col } from './Col';
export { Row } from './Row';

const Grid = props => {
  const { ...styles } = props;
  return <GridWrapper {...styles}>{props.children}</GridWrapper>;
};

export { Grid };
