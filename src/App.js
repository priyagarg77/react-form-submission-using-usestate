import React, { useState } from 'react';
import './style.css';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Signup from './Signup';

export default function App() {
  return (
    <Container>
      <Row>
        <Col sm={6}>
          <Signup />
        </Col>
      </Row>
    </Container>
  );
}
