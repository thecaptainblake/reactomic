import React from 'react';
import { StyledCard } from './styled';

export const Card = props => {
  const { children, ...styles } = props;
  return <StyledCard {...styles}>{children}</StyledCard>;
};

export default Card;
