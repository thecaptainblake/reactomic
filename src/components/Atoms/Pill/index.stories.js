import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import Pill from './index';

storiesOf('Pill', module)
  .addParameters({
    info: {
      inline: true
    }
  })
  .addDecorator(withInfo)
  .add('Pills', () => (
    <div>
      <Pill text="Primary" />
      <Pill secondary text="Secondary" />
      <Pill warning text="Warning" />
    </div>
  ));
