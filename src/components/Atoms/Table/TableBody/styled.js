import styled, { css } from 'styled-components';
import { StyledTableRow } from '../TableRow/styled';
import { StyledTableColumn } from '../TableColumn/styled';

export const StyledTableBody = styled.div`
  > ${StyledTableRow} {
    color: ${props => props.theme.darkGrey};
    font-size: ${props => props.theme.baseFontSize};
    > ${StyledTableColumn} {
      padding: 0.5rem 1rem;
    }
    &:nth-of-type(even) {
      background-color: ${props => props.theme.lightGrey};
    }
  }
`;
