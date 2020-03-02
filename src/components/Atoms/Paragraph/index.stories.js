import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { Paragraph } from './index';

storiesOf('Paragraph', module)
  .addParameters({
    info: {
      inline: true
    }
  })
  .addDecorator(withInfo)
  .add('Default Paragraph', () => <Paragraph />)
  .add('Small Paragraph', () => <Paragraph small />);
