import React, { Component } from 'react';
import {
  Header,
  Heading,
  Paragraph,
  Button,
  Card,
  Grid,
  Row,
  Col,
  Input,
  Link,
  Checkbox,
  Label,
  Table,
  Thead,
  Tbody,
  Trow,
  Tcol
} from './Atoms';

class App extends Component {
  render() {
    return (
      <div>
        <Header sticky />
        <Grid>
          <Row>
            <Col center>
              <Heading level={1}> Reactomic</Heading>
              <Paragraph text="Reactomic is a React lightweigth Starter Boilerplate based on the Atomic Design methodology." />
              <Paragraph text="Is Scalable, They provide a set of commons React component and you can add your own features, It includes everything necessary to build a tipical web app." />
            </Col>
          </Row>
          <Row>
            <Col center>
              <Heading level={3}>Lest try with a Simple Form</Heading>
            </Col>
          </Row>
          <Row center>
            <Col span="6">
              <Card>
                <Heading level={5} text="User Data" />
                <Input label="First Name" />
                <Input label="Last Name" />
                <Label text="Gender" />
                <Checkbox label="Male" /> <Checkbox label="Female" />
                <Input label="Email" />
                <Button>Sing In</Button>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col center>
              <Heading level={3}>Or with a Table</Heading>
            </Col>
          </Row>
          <Row>
            <Col>
              <Table>
                <Thead>
                  <Trow>
                    <Tcol basis="150px">ID</Tcol>
                    <Tcol span="3">Name</Tcol>
                    <Tcol span="3">Last Name</Tcol>
                    <Tcol span="3">Email</Tcol>
                  </Trow>
                </Thead>
                <Tbody>
                  <Trow>
                    <Tcol basis="150px">1</Tcol>
                    <Tcol span="3">Arturo</Tcol>
                    <Tcol span="3">Moreno</Tcol>
                    <Tcol span="3">a.moreno@accenture.com</Tcol>
                  </Trow>
                  <Trow>
                    <Tcol basis="150px">2</Tcol>
                    <Tcol span="3">Sandra</Tcol>
                    <Tcol span="3">Ornelas</Tcol>
                    <Tcol span="3">s.ornelas@accenture.com</Tcol>
                  </Trow>
                  <Trow>
                    <Tcol basis="150px">3</Tcol>
                    <Tcol span="3">Oscar</Tcol>
                    <Tcol span="3">Ramirez</Tcol>
                    <Tcol span="3">o.ramirez@accenture.com</Tcol>
                  </Trow>
                </Tbody>
              </Table>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
