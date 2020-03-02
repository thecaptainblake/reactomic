import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { Header } from './index';

storiesOf('Header', module)
  .addParameters({
    info: {
      inline: true
    }
  })
  .addDecorator(withInfo)
  .add('Header', () => <Header />);
