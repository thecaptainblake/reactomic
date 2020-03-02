import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { Grid, Row, Col } from './index';
import { Label } from '../Label';
storiesOf('Grid', module)
  .addParameters({
    info: {
      inline: true
    }
  })
  .addDecorator(withInfo)
  .add('Custom Grid System', () => (
    <div>
      <Grid>
        <Row>
          <Col>
            <Label text="Span 1 Column" />
          </Col>
          <Col>
            <Label text="Span 1 Column" />
          </Col>
          <Col>
            <Label text="Span 1 Column" />
          </Col>
          <Col>
            <Label text="Span 1 Column" />
          </Col>
          <Col>
            <Label text="Span 1 Column" />
          </Col>
          <Col>
            <Label text="Span 1 Column" />
          </Col>
          <Col>
            <Label text="Span 1 Column" />
          </Col>
          <Col>
            <Label text="Span 1 Column" />
          </Col>
          <Col>
            <Label text="Span 1 Column" />
          </Col>
          <Col>
            <Label text="Span 1 Column" />
          </Col>
          <Col>
            <Label text="Span 1 Column" />
          </Col>
          <Col>
            <Label text="Span 1 Column" />
          </Col>
        </Row>
        <Row>
          <Col span="6">
            <Label text="Span 6 Column" />
          </Col>
          <Col span="6">
            <Label text="Span 6 Column" />
          </Col>
        </Row>
        <Row>
          <Col>
            <Label text="Span 4 Column" />
          </Col>
          <Col>
            <Label text="Span 4 Column" />
          </Col>
          <Col>
            <Label text="Span 4 Column" />
          </Col>
        </Row>
      </Grid>
    </div>
  ));
