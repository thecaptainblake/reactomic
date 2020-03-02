import styled, { css } from 'styled-components';
import { ifProp } from 'styled-tools';

export const StyledHeader = styled.header`
  position: relative;
  display: flex;
  box-sizing: border-box;
  width: 100%;
  min-height: 4rem;
  padding: 1rem 2rem;
  align-items: center;
  background: ${props => props.theme.gradient};
  box-shadow: ${props => props.theme.boxShadow2};
  z-index: 2;
  .header__image {
    width: 18%;
  }

  ${ifProp(
    'sticky',
    css`
      position: sticky;
    `
  )}
`;
