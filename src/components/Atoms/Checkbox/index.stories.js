import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { Checkbox } from './index';

storiesOf('Checkbox', module)
  .addParameters({
    info: {
      inline: true
    }
  })
  .addDecorator(withInfo)
  .add('Checkbox', () => (
    <div>
      <Checkbox label="Default State" />
      <Checkbox disabled label="Disabled State" />
    </div>
  ));
