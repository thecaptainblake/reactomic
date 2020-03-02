import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { Label } from './index';

storiesOf('Label', module)
  .addParameters({
    info: {
      inline: true
    }
  })
  .addDecorator(withInfo)
  .add('Default Label', () => <Label />)
  .add('Uppercase Label', () => <Label uppercase />);
