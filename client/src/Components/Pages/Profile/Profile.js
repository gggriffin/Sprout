import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ListCard from '../../ListCard/ListCard';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import './Profile.css';


function Profile() {
  return (
    <div className="userProfile">
      <Container id="pageContainer">
        <Row>
          <Col md={{ span: 2 }} id="col1">
            <Card id="userInfoCard">
              <Card.Img variant="top" src="./assets/img/UserPlaceholder.jpg" />
              <Card.Body>
                <Card.Title>
                  <h2>Sprout</h2>
                  <h2>Man</h2>
                </Card.Title>
                <Card.Link id="gitLnk" href="#">
                  <i className="fab fa-github" />
                  My Github
                </Card.Link>
                <Card.Link id="liLnk" href="#">
                  <i className="fab fa-linkedin" />
                  My LinkedIn
                </Card.Link>
                <Card.Link id="folioLnk" href="#">
                  <i className="fas fa-folder-open" />
                  My Portfolio
                </Card.Link>
              </Card.Body>
            </Card>
          </Col>

          <Col md={{ span: 8 }} id="col2">
            <Container id="middleContainer">
              <Row className="rowTop">
                <Col className="midCrdCol">
                  <Card className="midCrd">
                    <Card.Body className="midCrdBd">
                      <Card.Title><h3>Card 1</h3></Card.Title>
                      <Card.Text>
                        <ListCard></ListCard>
                        <ListCard></ListCard>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>

                <Col className="midCrdCol">
                  <Card className="midCrd">
                    <Card.Body className="midCrdBd">
                      <Card.Title><h3>Card 1</h3></Card.Title>
                      <Card.Text>
                        <ListCard></ListCard>
                        <ListCard></ListCard>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>

              <Row className="rowBot">
                <Col className="midCrdCol">
                  <Card className="midCrd">
                    <Card.Body className="midCrdBd">
                      <Card.Title><h3>Card 1</h3></Card.Title>
                      <Card.Text>
                        <ListCard></ListCard>
                        <ListCard></ListCard>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>

                <Col className="midCrdCol">
                  <Card className="midCrd">
                    <Card.Body className="midCrdBd">
                      <Card.Title><h3>Card 1</h3></Card.Title>
                      <Card.Text>
                        <ListCard></ListCard>
                        <ListCard></ListCard>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Container>
          </Col>

          <Col md={{ span: 2 }} id="col3">
            <Container id="rightContainer">
              <Row id="scoreRow">
                <i className="fas fa-tint" id="scoreIcon" />
                <p id="userSproutScore">159</p>
              </Row>
              <Row id="badgeCardRow">
                <Col id="badgeCardCol">
                  <Card id="badgeCard">
                    <Card.Title id="badgeTitle">
                      <p id="recentText">Recent Badges</p>
                    </Card.Title>
                    <Card.Body id="badgeBody">
                      <Container id="badgeContainer">
                        <Row className="badgeRow">
                          <Col className="indvBadge">
                            <OverlayTrigger
                              trigger="hover"
                              placement="top"
                              overlay={
                                <Popover id="popoverCD">
                                  <h3>Cirlce Down</h3>
                                  <p>This badge is a circle with a down arrow ... thats it.</p>
                                </Popover>
                              }
                            >
                              <i className="fas fa-arrow-alt-circle-down" id="badge" />
                            </OverlayTrigger>
                          </Col>
                          <Col className="indvBadge">
                            <i className="far fa-address-card" id="badge"></i>
                          </Col>
                          <Col className="indvBadge">
                            <i className="fas fa-arrow-alt-circle-up" id="badge"></i>
                          </Col>
                        </Row>
                        <Row className="badgeRow">
                          <Col className="indvBadge">
                            <i className="fab fa-apple" id="badge"></i>
                          </Col>
                          <Col className="indvBadge">
                            <i className="fas fa-archive" id="badge"></i>
                          </Col>
                          <Col className="indvBadge">
                            <i className="fas fa-birthday-cake" id="badge"></i>
                          </Col>
                        </Row>
                      </Container>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </div >
  );
}

export default Profile;