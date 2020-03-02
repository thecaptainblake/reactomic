import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { Avatar } from './index';

storiesOf('Avatar', module)
  .addParameters({
    info: {
      inline: true
    }
  })
  .addDecorator(withInfo)
  .add('Avatars', () => (
    <div>
      <Avatar />
      <Avatar large />
    </div>
  ));
