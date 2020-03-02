import styled from 'styled-components';

export const StyledCard = styled.div`
  min-height: 3rem;
  padding: 1.5rem;
  border-radius: 2px;
  box-shadow: ${props => props.theme.boxShadow1};
  background-color: ${props => props.theme.white};
`;
