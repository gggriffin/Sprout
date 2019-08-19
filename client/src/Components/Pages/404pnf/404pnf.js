import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function pageNotFound() {
  return (
    <Container>
      <Row>
        <Col md={{ span:1 }} class='spcr' id='spcr1'></Col>

        <Col md={{ span:3 }} class='clm' id='col1'>
          <p>4</p>
        </Col>

        <Col md={{ span:1 }} class='spcr' id='spcr2'/>

        <Col md={{ span:3 }} class='clm' id='col2'>
          <p>0</p>
        </Col>

        <Col md={{ span:1 }} class='spcr' id='spcr3'/>

        <Col md={{ span:3 }} class='clm' id='col3'>
          <p>4</p>
        </Col>

        <Col md={{ span:1 }} class='spcr' id='spcr4'/>
      </Row>
      <Row>
        <Col md={{ span:1 }} class='spcr' id='spcr1'></Col>

        <Col md={{ span:3 }} class='clm' id='col1'>
          <p>P</p>
        </Col>

        <Col md={{ span:1 }} class='spcr' id='spcr2'/>

        <Col md={{ span:3 }} class='clm' id='col2'>
          <p>N</p>
        </Col>

        <Col md={{ span:1 }} class='spcr' id='spcr3'/>

        <Col md={{ span:3 }} class='clm' id='col3'>
          <p>F</p>
        </Col>

        <Col md={{ span:1 }} class='spcr' id='spcr4'/>
      </Row>
      <Row>
        <Col md={{ span:1 }} class='spcr' id='spcr1'></Col>

        <Col md={{ span:3 }} class='clm' id='col1'>
          <p>S</p>
        </Col>

        <Col md={{ span:1 }} class='spcr' id='spcr2'/>

        <Col md={{ span:3 }} class='clm' id='col2'>
          <p>R</p>
        </Col>

        <Col md={{ span:1 }} class='spcr' id='spcr3'/>

        <Col md={{ span:3 }} class='clm' id='col3'>
          <p>Y</p>
        </Col>

        <Col md={{ span:1 }} class='spcr' id='spcr4'/>
      </Row>
    </Container>
  );
}

export default pageNotFound;
