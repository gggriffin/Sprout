import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import './Copyright.css'

function Copyright() {
  return (
    <div className="cpyRite">
      <Row id="cpyRow">
        <Col md={{ span: 12 }} id="gsRow">
          <Card id="copCard">
            <Card.Link className="hvr-grow hvr-icon-fade" href='#'>
              <i className="fab fa-github hvr-icon" aria-hidden="true" id="gitLink" />
            </Card.Link>
            <Card.Link className="hvr-grow hvr-icon-fade" href='/contact' id="devCrdLink">
              <i className="fas fa-seedling hvr-icon" aria-hidden="true" id="devLink" />
            </Card.Link>
          </Card>
        </Col>
        <Col>
          <p className="CopyRight">Copyright © 2019</p>
        </Col>
      </Row>
    </div>
  );
}
export default Copyright;