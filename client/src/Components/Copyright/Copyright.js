import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Copyright.css'

function Copyright() {
  return (
    <div className="cpyRite">
      <Row id="cpyRow">
        <Col md={{ span: 12 }} id="gsRow">
          <i className="fab fa-github" id="gitLink" />
          <i className="fas fa-seedling" id="devLink" />
        </Col>
        <Col>
          <p className="CopyRight">Copyright © 2019</p>
        </Col>
      </Row>
    </div>
  );
}
export default Copyright;