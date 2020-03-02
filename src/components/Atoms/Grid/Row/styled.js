import styled, { css } from 'styled-components';
import { ifProp } from 'styled-tools';
export const StyledRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
  & + & {
    margin-top: 0.5rem;
  }
  ${ifProp(
    'center',
    css`
      justify-content: center;
    `
  )}
`;
