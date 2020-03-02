import styled, { css } from 'styled-components';
import { ifProp } from 'styled-tools';

export const StyledParagraph = styled.p`
  color: ${props => props.theme.black};
  font-size: ${props => props.theme.baseFontSize};

  ${ifProp(
    'small',
    css`
      font-size: ${props => props.theme.smallFontSize};
      color: ${props => props.theme.chacoralGrey};
    `
  )}
`;
