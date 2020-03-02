import styled, { css } from 'styled-components';
import { ifProp } from 'styled-tools';

export const StyledLink = styled.a`
  margin: 0.5rem;
  color: ${props => props.theme.primary};
  font-size: ${props => props.theme.defaultFontSize};
  text-decoration: none;
  cursor: pointer;
  &:hover {
    color: ${props => props.theme.primaryDark};
    text-decoration: underline;
  }

  ${ifProp(
    'disable',
    css`
      color: ${props => props.theme.grey};
      pointer-events: none;
    `
  )}
`;
