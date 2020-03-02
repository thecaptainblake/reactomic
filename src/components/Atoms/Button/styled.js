import styled, { css } from 'styled-components';
import { ifProp } from 'styled-tools';

export const StyledButton = styled.button`
  outline: none;
  font-size: ${props => props.theme.defaultFontSize};
  padding: 0 1rem;
  margin: 0 0.5rem;
  border-radius: 5px;
  color: ${props => props.theme.white};
  border: solid 1px ${props => props.theme.primary};
  background-color: ${props => props.theme.primary};
  box-shadow: ${props => props.theme.boxShadow1};
  height: 3rem;
  cursor: pointer;
  &:hover {
    background-color: ${props => props.theme.primaryLight};
    border: solid 1px ${props => props.theme.primaryLight};
  }
  &:only-child {
    margin: 0;
  }
  &:last-child {
    margin-right: 0;
  }
  &:first-child {
    margin-left: 0;
  }
  ${ifProp(
    'secondary',
    css`
      background-color: ${props => props.theme.secondary};
      border: solid 1px ${props => props.theme.secondary};

      &:hover {
        background-color: ${props => props.theme.secondaryDark};
        border: solid 1px ${props => props.theme.secondaryDark};
      }
    `
  )}
  ${ifProp(
    'small',
    css`
      height: 2rem;
    `
  )}
  ${ifProp(
    'disabled',
    css`
      box-shadow: none;
      color: ${props => props.theme.darkGrey};
      background-color: ${props => props.theme.lightGrey};
      border: 1px solid ${props => props.theme.lightGrey};
      pointer-events: none;
    `
  )}
`;
