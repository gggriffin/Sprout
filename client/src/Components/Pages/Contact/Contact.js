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
                <Card.Img src="./assets/img/DSCF3444.jpg" id='jasonImg' />
              </Col>
              <Col className='infoCol' md={{ span: 7 }}>
                <Container className='tactTainer'>
                  <Row className='iconRow'>
                    <Col md={{ span: 6 }}>
                      <Card.Link className="hvr-grow hvr-icon-fade" id="gitLnkBlk" href='https://github.com/JasonLMoore'>
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
                      <Card.Link className="hvr-grow hvr-icon-fade" id="liLnkBlk" href='https://www.linkedin.com/in/jason-moore-08a2a917b/'>
                        <i className="fab fa-linkedin hvr-icon" aria-hidden="true" id='liBlock' />
                      </Card.Link>
                    </Col>
                  </Row>
                </Container>
              </Col>
            </Row>
          </Card>
        </Col>
        <Col md={{ span: 4 }}>
          <Card id='prsnCrd'>
            <Card.Title className='crdTitle'>
              Garrett Griffin
            </Card.Title>
            <Row className='cardRow'>
              <Col md={{ span: 5 }}>
                <Card.Img src="./assets/img/gar.jpg" id='garImg' />
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
                      <Card.Link className="hvr-grow hvr-icon-fade" id='folioLnkBlk' href='#'>
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
        <Col md={{ span: 4 }}>
          <Card id='prsnCrd'>
            <Card.Title className='crdTitle'>
              Nicholas Golden
            </Card.Title>
            <Row className='cardRow'>
              <Col md={{ span: 5 }}>
                <Card.Img src="./assets/img/nick.jpg" id='nickImg' />
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
                      <Card.Link className="hvr-grow hvr-icon-fade" id='folioLnkBlk' href='#'>
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
      </Row>
      <Row>

      </Row>
    </Container>
  );
}

export default Contact;