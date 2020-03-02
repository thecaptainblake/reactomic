import styled from 'styled-components';

export const headingStyles = level => styled(`h${level}`)`
  font-size: ${1 + 1 * (1 / level)}rem;
  color: ${props => props.theme[props.color] || props.theme.black};
`;
