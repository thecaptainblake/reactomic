import styled from 'styled-components';

export const StyledTable = styled.div`
  margin-top: 1rem;
  margin-bottom: 2rem;
  border: 1px solid ${props => props.theme.lightGrey};
  box-shadow: ${props => props.theme.boxShadow1};
`;
