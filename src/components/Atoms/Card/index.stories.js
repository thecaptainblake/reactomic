import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { Card } from './index';

storiesOf('Card', module)
  .addParameters({
    info: {
      inline: true
    }
  })
  .addDecorator(withInfo)
  .add('Card', () => <Card />);
