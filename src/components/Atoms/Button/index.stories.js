import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { Button } from './index';

storiesOf('Buttons', module)
  .addParameters({
    info: {
      inline: true
    }
  })
  .addDecorator(withInfo)
  .add('All Buttons', () => (
    <div>
      <Button onClick={action('button-click')}>Primary Button</Button>
      <Button secondary onClick={action('button-click')}>
        Secondary Button
      </Button>
      <Button small onClick={action('button-click')}>
        Primary Small
      </Button>
      <Button small secondary onClick={action('button-click')}>
        Secondary small
      </Button>
      <Button disabled onClick={action('button-click')}>
        Disabled
      </Button>
    </div>
  ));
