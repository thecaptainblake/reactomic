import styled, { css } from 'styled-components';
import { ifProp } from 'styled-tools';

export const StyledInput = styled.input`
  width: 100%;
  border: none;
  color: ${props => props.theme.darkGrey};
  border-bottom: 1px solid ${props => props.theme.darkGrey};
  display: block;
  font-size: ${props => props.theme.defaultFontSize};
  padding: 0.3rem 0.3rem;
  &:focus {
    outline: none;
    border-bottom: 1px solid ${props => props.theme.darkGrey};
  }
  + .input__message {
    color: ${props => props.theme.primary};
    font-size: ${props => props.theme.smallFontSize};
    display: none;
  }

  ${ifProp(
    'error',
    css`
      border-bottom: solid 1px ${props => props.theme.primary};
      &:focus {
        border-bottom: solid 1px ${props => props.theme.primary};
      }
      + .input__message {
        display: inline;
      }
    `
  )}
`;
