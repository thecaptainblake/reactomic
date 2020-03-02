import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { Heading } from './index';

storiesOf('Heading', module)
  .addParameters({
    info: {
      inline: true
    }
  })
  .addDecorator(withInfo)
  .add('Headings', () => (
    <div>
      <Heading as={1}> H1 Heading </Heading>
      <Heading as={2} color="blue">
        H2 Heading
      </Heading>
      <Heading as={3}>H3 Heading</Heading>
      <Heading as={4}> H4 Heading</Heading>
      <Heading as={5}> H5 Heading </Heading>
      <Heading as={6} color="primary">
        H6 Primary Heading
      </Heading>
    </div>
  ));
