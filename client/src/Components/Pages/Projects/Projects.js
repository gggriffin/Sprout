import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import './Projects.css'


function Project() {
  return (
    <div className="Proj">
      <Row>
        <Col md={{ span: 8, offset: 2 }}>
          <Card id="projMainCard">
            <Card.Body>
              <Card.Title id="projMainTitle">
                <h3>Test It Out</h3>
              </Card.Title>
              <Card.Text>
                We've gathered some projects that users have submitted to help you get aquainted with new technologies. If there's an API or library that you'd like to check out, this is a great place to start learning.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col md={{ span: 10, offset: 1 }}>
          <Card id="projCard">
            <Row>
              <Col>
                <Card.Title id="projCardTitle">
                  <h1>Bamazon</h1>
                </Card.Title>
              </Col>
            </Row>
            <Row>
              <Col md={{ span: 4 }} id="projIcon">
                <i class="devicon-nodejs-plain"></i>
                <i class="devicon-sequelize-plain"></i>
                <i class="devicon-mysql-plain"></i>
                <i class="devicon-jquery-plain-wordmark"></i>
              </Col>
              <Col md={{ span: 8 }} id="projDesc">
                <p>
                  This is an in-line command app that uses Sequelize to interface between Node.js and MySQL. jQuery is used to help increase the readability of the Javascript code. The application allows the user to directly interface with MySQL from a Node.js server and buy items from a virtual store front. The information is stored in a MySQL database, which allows the data to remain persistent.
                </p>
                <h3 id="intermed">Intermediate</h3>
                <a className="hvr-grow hvr-icon" href="https://drive.google.com/file/d/1ewEkheW4vO0sjkkJ2ax3VeNAKEK5Ng0Y/view" id="seedIcon">
                  <i class="fas fa-seedling hvr-icon-fade" aria-hidden="true"></i>
                </a>
                <a className="hvr-grow hvr-icon" href="https://github.com/gggriffin/bamazon" id="gitIcon">
                  <i class="devicon-github-plain hvr-icon-fade" aria-hidden="true"></i>
                </a>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col md={{ span: 10, offset: 1 }}>
          <Card id="projCard">
            <Row>
              <Col>
                <Card.Title id="projCardTitle">
                  <h1>Train Finder</h1>
                </Card.Title>
              </Col>
            </Row>
            <Row>
              <Col md={{ span: 4 }} id="projIcon">
                <i class="devicon-html5-plain-wordmark"></i>
                <i class="devicon-css3-plain-wordmark"></i>
                <i class="devicon-jquery-plain-wordmark"></i>
                <i class="devicon-bootstrap-plain-wordmark"></i>
              </Col>
              <Col md={{ span: 8 }} id="projDesc">
                <p>
                  This is an in-line command app that uses Sequelize to interface between Node.js and MySQL. jQuery is used to help inrease the readability of the Javascript code.
                </p>
                <h3 id="begginer">Begginer</h3>
                <a className="hvr-grow hvr-icon" id="seedIcon" href="https://drive.google.com/file/d/1ewEkheW4vO0sjkkJ2ax3VeNAKEK5Ng0Y/view">
                  <i class="fas fa-seedling hvr-icon-fade" aria-hidden="true"></i>
                </a>
                <a className="hvr-grow hvr-icon" id="gitIcon" href="https://github.com/gggriffin/bamazon">
                  <i class="devicon-github-plain hvr-icon-fade" aria-hidden="true"></i>
                </a>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </div >
  );
}
export default Project; 