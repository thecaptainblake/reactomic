import styled, { css } from 'styled-components';
import { ifProp } from 'styled-tools';

export const StyledPill = styled.div`
  display: inline-block;
  min-height: 1rem;
  margin: 0.5rem;
  padding: 0.25rem 1rem;
  border-radius: 5px;
  color: ${props => props.theme.white};
  background-color: ${props => props.theme.primary};
  ${ifProp(
    'secondary',
    css`
      background-color: ${props => props.theme.secondary};
    `
  )}
  ${ifProp(
    'warning',
    css`
      background-color: ${props => props.theme.lightBlue};
    `
  )}
`;
