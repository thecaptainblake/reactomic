import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { Link } from './index';

storiesOf('Link', module)
  .addParameters({
    info: {
      inline: true
    }
  })
  .addDecorator(withInfo)
  .add('Default Link', () => <Link />)
  .add('Disable Link', () => <Link disable />);
