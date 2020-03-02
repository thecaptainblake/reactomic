import styled, { css } from 'styled-components';
import { ifProp, switchProp } from 'styled-tools';

export const StyledCol = styled.div`
    flex-basis: 0;
    flex-grow: 1;
    max-width: 100%;
    position: relative;
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
  ${switchProp('span', {
    1: css`
      flex: 0 0 8.33333333%;
      max-width: 8.33333333%;
    `,
    2: css`
      flex: 0 0 16.66666667%;
      max-width: 16.66666667%;
    `,
    3: css`
      flex: 0 0 25%;
      max-width: 25%;
    `,
    4: css`
      flex: 0 0 33.33333333%;
      max-width: 33.33333333%;
    `,
    5: css`
      flex: 0 0 41.66666667%;
      max-width: 41.66666667%;
    `,
    6: css`
      flex: 0 0 50%;
      max-width: 50%;
    `,
    7: css`
      flex: 0 0 58.33333333%;
      max-width: 58.33333333%;
    `,
    8: css`
      flex: 0 0 66.666667%;
      max-width: 66.666667%;
    }    `,
    9: css`
      flex: 0 0 75%
      max-width: 75%;
    `,
    10: css`
      flex: 0 0 83.33333333%;
      max-width: 83.33333333%;
    `,
    11: css`
      flex: 0 0 91.66666667%;
      max-width: 91.66666667%;
    `,
    12: css`
      flex: 0 0 100%
      max-width: 100%;
    `
  })}
  ${ifProp(
    'left',
    css`
      text-align: left;
    `
  )}
  ${ifProp(
    'right',
    css`
      text-align: right;
    `
  )}
  ${ifProp(
    'center',
    css`
      text-align: center;
    `
  )}
`;
