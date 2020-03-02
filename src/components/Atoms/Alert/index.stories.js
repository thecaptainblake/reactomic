import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { Alert } from './index';

storiesOf('Alert', module)
  .addParameters({
    info: {
      inline: true
    }
  })
  .addDecorator(withInfo)
  .add('Alerts', () => (
    <div>
      <Alert />
      <Alert secondary />
    </div>
  ));
