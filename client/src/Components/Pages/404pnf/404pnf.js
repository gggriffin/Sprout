import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './404pnf.css';

function pageNotFound() {
  return (
    <Container class='cntr'>
      <Row>
        <Col md={{ span:3 }} />
        <Col md={{ span:2 }} class='clm' id='col1'>
          <p id='pnfL'>4</p>
        </Col>

        <Col md={{ span:2 }} class='clm' id='col2'>
          <p id='pnfL'>0</p>
        </Col>

        <Col md={{ span:2 }} class='clm' id='col3'>
          <p id='pnfL'>4</p>
        </Col>
        <Col md={{ span:3 }} />
      </Row>
      <Row>
        <Col md={{ span:3 }} />
        <Col md={{ span:2 }} class='clm' id='col1'>
          <p id='pnfL'>P</p>
        </Col>

        <Col md={{ span:2 }} class='clm' id='col2'>
          <p id='pnfL'>N</p>
        </Col>

        <Col md={{ span:2 }} class='clm' id='col3'>
          <p id='pnfL'>F</p>
        </Col>
        <Col md={{ span:3 }} />
      </Row>
      <Row>
        <Col md={{ span:3 }} />
        <Col md={{ span:2 }} class='clm' id='col1'>
          <p id='pnfL'>S</p>
        </Col>

        <Col md={{ span:2 }} class='clm' id='col2'>
          <p id='pnfL'>R</p>
        </Col>

        <Col md={{ span:2 }} class='clm' id='col3'>
          <p id='pnfL'>Y</p>
        </Col>
        <Col md={{ span:3 }} />
      </Row>
    </Container>
  );
}

export default pageNotFound;
