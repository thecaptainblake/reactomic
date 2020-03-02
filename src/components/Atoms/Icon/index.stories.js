import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { Icon } from './index';

storiesOf('Icons', module)
  .addParameters({
    info: {
      inline: true
    }
  })
  .addDecorator(withInfo)
  .add('Icon System', () => (
    <div>
      <Icon icon={'arrow_down'} />
      <Icon icon={'arrow_up'} />
      <Icon icon={'cancel'} />
      <Icon icon={'check'} />
      <Icon icon={'chevron'} />
      <Icon icon={'menu'} />
      <Icon icon={'search'} />
      <Icon icon={'times'} />
      <Icon icon={'user'} />
      <Icon icon={'chevron'} rotate="90" size="12" />
      <Icon icon={'chevron'} rotate="90" size="48" />
      <Icon icon={'chevron'} rotate="180" color="primary" />
      <Icon icon={'chevron'} rotate="180" color="secondary" />
    </div>
  ));
