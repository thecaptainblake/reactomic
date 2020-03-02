import styled from 'styled-components';

export const StyledCheckbox = styled.label`
  position: relative;
  display: block;
  color: ${props => props.theme.black};
  font-size: 1rem;
  line-height: 1.5;
  margin: 0.5rem 0;
  > {
    .checkbox__input {
      appearance: none;
      z-index: -1;
      position: absolute;
      pointer-events: none;
    }
    .checkbox__label {
      display: inline-block;
      cursor: pointer;
      &::before {
        content: '';
        display: inline-block;
        box-sizing: border-box;
        margin: 3px 11px 3px 1px;
        border: 2px solid ${props => props.theme.primaryLight};
        border-radius: 2px;
        width: 1rem;
        height: 1rem;
        vertical-align: top;
        transition: border-color 0.2s, background-color 0.2s;
      }
      &::after {
        content: '';
        display: block;
        position: absolute;
        top: 3px;
        left: 1px;
        width: 8px;
        height: 3px;
        border: solid 2px transparent;
        border-right: none;
        border-top: none;
        transform: translate(3px, 4px) rotate(-45deg);
      }
    }
    .checkbox__input {
      &:checked + .checkbox__label::before {
        border-color: ${props => props.theme.primary};
        background-color: ${props => props.theme.primary};
      }
      &:checked + .checkbox__label::after {
        border-color: ${props => props.theme.white};
      }
      &:disabled + .checkbox__label::before {
        border-color: ${props => props.theme.chacoralGrey};
      }
      &:disabled + .checkbox__label {
        color: ${props => props.theme.chacoralGrey};
      }
    }
  }
`;
