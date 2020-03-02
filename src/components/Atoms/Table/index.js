import React from 'react';
import { StyledTable } from './styled';
export { Tbody } from './TableBody/index';
export { Tcol } from './TableColumn/index';
export { Thead } from './TableHead/index';
export { Trow } from './TableRow/index';

const Table = props => {
  const { ...styles } = props;
  return <StyledTable {...styles}>{props.children}</StyledTable>;
};

export { Table };
