import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { Input } from './index';

storiesOf('Text Input', module)
  .addParameters({
    info: {
      inline: true
    }
  })
  .addDecorator(withInfo)
  .add('Inputs', () => (
    <div>
      <Input label="Text input" />
      <Input error label="Error State" />
    </div>
  ));
