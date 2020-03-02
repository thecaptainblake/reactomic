import styled, { css } from 'styled-components';
import { ifProp } from 'styled-tools';

export const StyledAvatar = styled.div`
  display: inline-block;
  width: 2rem;
  height: 2rem;
  margin: 0.2rem;
  text-align: center;
  border-radius: 50%;
  background-color: ${props => props.theme[props.color] || props.theme.primary};
  color: ${props => props.theme.white};
  font-size: ${props => props.theme.smallFontSize};
  .avatar__text {
    position: relative;
    top: 10px;
  }
  ${ifProp(
    'large',
    css`
      width: 3rem;
      height: 3rem;
      font-size: ${props => props.theme.defaultFontSize};
      .avatar__text {
        top: 16px;
      }
    `
  )}
`;
