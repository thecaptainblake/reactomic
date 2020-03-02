import styled, { css } from 'styled-components';
import { ifProp } from 'styled-tools';

export const StyledLabel = styled.label`
  color: ${props => props.theme.darkGrey};
  font-size: ${props => props.theme.mediumFontSize};

  ${ifProp(
    'uppercase',
    css`
      font-size: ${props => props.theme.baseFontSize};
      text-transform: uppercase;
    `
  )}
`;
