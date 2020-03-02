import styled from 'styled-components';
import { StyledTableRow } from '../TableRow/styled';
import { StyledTableColumn } from '../TableColumn/styled';

export const StyledTableHead = styled.div`
  > ${StyledTableRow} {
    background-color: ${props => props.theme.primary};
    color: ${props => props.theme.white};
    text-transform: uppercase;

    > ${StyledTableColumn} {
      padding: 1rem;
    }
  }
`;
