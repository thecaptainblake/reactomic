import styled, { css } from 'styled-components';
import { ifProp } from 'styled-tools';

export const StyledAlert = styled.div`
  margin: 1rem;
  padding: 1rem 2rem;
  background-color: ${props => props.theme.primaryLight};
  color: ${props => props.theme.white};

  ${ifProp(
    'secondary',
    css`
      background-color: ${props => props.theme.lightBlue};
    `
  )}
`;
