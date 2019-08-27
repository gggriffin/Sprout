import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import './Contact.css';

function Contact() {
  return (
    <Container className='tainer'>
      <Row className='topRow'>
        <Col md={{ span: 4 }}>
          <Card id='prsnCrd'>
            <Card.Title className='crdTitle'>
              Jason Moore
            </Card.Title>
            <Row className='cardRow'>
              <Col md={{ span: 5 }}>
                <Card.Img src="./assets/img/DSCF3444.jpg" />
              </Col>
              <Col className='infoCol' md={{ span: 7 }}>
                <Container className='tactTainer'>
                  <Row className='iconRow'>
                    <Col md={{ span: 6 }}>
                      <Card.Link className="hvr-grow hvr-icon-fade" id="gitLnkBlk">
                        <i className="fab fa-github-square hvr-icon" aria-hidden="true" id='gitBlock' />
                      </Card.Link>
                    </Col>

                    <Col md={{ span: 6 }}>
                      <Card.Link className="hvr-grow hvr-icon-fade" id='folioLnkBlk' href='https://jasonlmoore.github.io/Portfolio-Temp/'>
                        <i className="fas fa-folder-open hvr-icon" aria-hidden="true" id='folioBlock' />
                      </Card.Link>
                    </Col>
                  </Row>
                  <Row className='iconRow'>
                    <Col md={{ span: 6 }}>
                      <Card.Link className="hvr-grow hvr-icon-fade" id="emailLnkBlk">
                        <i className="fas fa-at hvr-icon" aria-hidden="true" id='emailBlock' />
                      </Card.Link>
                    </Col>

                    <Col md={{ span: 6 }}>
                      <Card.Link className="hvr-grow hvr-icon-fade" id="liLnkBlk">
                      <i className="fab fa-linkedin hvr-icon" aria-hidden="true" id='liBlock' />
                      </Card.Link>
                    </Col>
                  </Row>
                </Container>
              </Col>
            </Row>
          </Card>
        </Col>
        <Col md={{ span: 4 }}></Col>
        <Col md={{ span: 4 }}></Col>
      </Row>
      <Row>

      </Row>
    </Container>
  );
}

export default Contact;