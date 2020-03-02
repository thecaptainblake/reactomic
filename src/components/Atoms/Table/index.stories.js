import React from 'react';
import { storiesOf } from '@storybook/react';
import { Table, Thead, Trow, Tbody, Tcol } from './index';
import { withInfo } from '@storybook/addon-info';

storiesOf('Table', module)
  .addParameters({
    info: {
      inline: true
    }
  })
  .addDecorator(withInfo)
  .add('Tables', () => (
    <div>
      <Table>
        <Thead>
          <Trow>
            <Tcol span="1">Heading 1</Tcol>
            <Tcol span="3">Heading 3</Tcol>
            <Tcol span="1">Heading 1</Tcol>
          </Trow>
        </Thead>
        <Tbody>
          <Trow>
            <Tcol span="1">Cel Span 1</Tcol>
            <Tcol span="3">Cel Span 3</Tcol>
            <Tcol span="1">Cel Span 1</Tcol>
          </Trow>
          <Trow>
            <Tcol span="1">Cel Span 1</Tcol>
            <Tcol span="3">Cel Span 3</Tcol>
            <Tcol span="1">Cel Span 1</Tcol>
          </Trow>
          <Trow>
            <Tcol span="1">Cel Span 1</Tcol>
            <Tcol span="3">Cel Span 3</Tcol>
            <Tcol span="1">Cel Span 1</Tcol>
          </Trow>
        </Tbody>
      </Table>

      <Table>
        <Thead>
          <Trow>
            <Tcol basis="150px">With Basis</Tcol>
            <Tcol span="1">Heading 1</Tcol>
            <Tcol span="1">Heading 1</Tcol>
            <Tcol span="1">Heading 1</Tcol>
            <Tcol span="1">Heading 1</Tcol>
            <Tcol span="1">Heading 1</Tcol>
          </Trow>
        </Thead>
        <Tbody>
          <Trow>
            <Tcol basis="150px">With Basis</Tcol>
            <Tcol span="1">Heading 1</Tcol>
            <Tcol span="1">Heading 1</Tcol>
            <Tcol span="1">Heading 1</Tcol>
            <Tcol span="1">Heading 1</Tcol>
            <Tcol span="1">Heading 1</Tcol>
          </Trow>
          <Trow>
            <Tcol basis="150px">With Basis</Tcol>
            <Tcol span="1">Heading 1</Tcol>
            <Tcol span="1">Heading 1</Tcol>
            <Tcol span="1">Heading 1</Tcol>
            <Tcol span="1">Heading 1</Tcol>
            <Tcol span="1">Heading 1</Tcol>
          </Trow>
          <Trow>
            <Tcol basis="150px">With Basis</Tcol>
            <Tcol span="1">Heading 1</Tcol>
            <Tcol span="1">Heading 1</Tcol>
            <Tcol span="1">Heading 1</Tcol>
            <Tcol span="1">Heading 1</Tcol>
            <Tcol span="1">Heading 1</Tcol>
          </Trow>
        </Tbody>
      </Table>
    </div>
  ));
