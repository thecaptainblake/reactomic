import styled from 'styled-components';

export const StyledIcon = styled.span`
  display: inline-block;
  color: ${props => props.theme[props.color] || props.theme.black};
  width: ${props => props.size + 'px'};
  height: ${props => props.size + 'px'};
  margin: 0 0.25rem;
  box-sizing: border-box;
  transform: rotate(${props => props.rotate + 'deg'});
  &:only-child {
    margin: 0 0.5rem;
  }
  &:last-child {
    margin-right: 0;
  }
  &:first-child {
    margin-left: 0;
  }
  & > svg {
    width: 100%;
    height: 100%;
    fill: ${props => props.theme[props.color] || props.theme.black};
    stroke: ${props => props.theme[props.color] || props.theme.black};
  }
`;
