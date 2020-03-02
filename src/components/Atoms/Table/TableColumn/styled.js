import styled, { css } from 'styled-components';
import { ifProp } from 'styled-tools';

export const StyledTableColumn = styled.div`
  flex: ${props => props.span} ${props => props.shrink} ${props => props.basis};
  &:last-child {
    border-right: none;
  }
  ${ifProp(
    'left',
    css`
      text-align: left;
    `
  )}
  ${ifProp(
    'right',
    css`
      text-align: right;
    `
  )}
  ${ifProp(
    'center',
    css`
      text-align: center;
    `
  )}
`;
