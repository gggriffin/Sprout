import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './Collaborate.css';

function Collaborate() {
  return (
    <div className="Collab">
      <Row>
        <Col md={{ span: 8, offset: 2 }}>
          <Card id="collabMainCard">
            <Card.Body>
              <Card.Title id="collabMainTitle">
                <h3>Contributing</h3>
              </Card.Title>
              <Card.Text>
                If you have a project, API, or library you would like to submit for review you can add it here. We are currently accepting projects that will help to improve the learning experience of those who are new to coding. If you have an API that you love, or even one that caused a major migraine, please submit it. We welcome any feedback that can help to improve the experience of new coders.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col md={{ span: 10, offset: 1 }}>
          <Accordion>
            <Card id="accordCard">
              <Card.Header id="accordCardHead">
                <Accordion.Toggle as={Button} variant="link" eventKey="0" id="accordToggle">
                  Suggest Library
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  <Form>
                    <Form.Group controlId="libForm.ControlInput1">
                      <Form.Label>Title</Form.Label>
                      <Form.Control placeholder="What's the name of the library?" />
                    </Form.Group>
                    <Form.Group controlId="libForm.ControlSelect1">
                      <Form.Label>Type</Form.Label>
                      <Form.Control as="select">
                        <option>HTML</option>
                        <option>CSS</option>
                        <option>Javascript</option>
                        <option>Python</option>
                        <option>Ruby</option>
                        <option>Java</option>
                        <option>MySQL</option>
                        <option>C++</option>
                        <option>Other</option>
                      </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="libForm.ControlLink1">
                      <Form.Label>Source</Form.Label>
                      <Form.Control as="link" placeholder="Link to repository/documentation" />
                    </Form.Group>
                    <Form.Group controlId="libForm.ControlTextarea1">
                      <Form.Label>Description</Form.Label>
                      <Form.Control as="textarea" rows="3" placeholder="What does this library do?" />
                    </Form.Group>
                    <Button as="input" type="submit" value="Submit" id="subBttn"></Button>
                  </Form>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card id="accordCard">
              <Card.Header id="accordCardHead">
                <Accordion.Toggle as={Button} variant="link" eventKey="1" id="accordToggle">
                  Suggest API
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="1">
                <Card.Body>
                  <Form>
                    <Form.Group controlId="apiForm.ControlInput1">
                      <Form.Label>Title</Form.Label>
                      <Form.Control placeholder="What's the name of the API?" />
                    </Form.Group>
                    <Form.Group controlId="apiForm.ControlInput2">
                      <Form.Label>Type</Form.Label>
                      <Form.Control placeholder="What type of API is this? (weather, time, etc.)" />
                    </Form.Group>
                    <Form.Group controlId="apiForm.ControlLink1">
                      <Form.Label>Source</Form.Label>
                      <Form.Control as="link" placeholder="Link to API/documentation" />
                    </Form.Group>
                    <Form.Group controlId="apiForm.ControlTextarea1">
                      <Form.Label>Description</Form.Label>
                      <Form.Control as="textarea" rows="3" placeholder="What does this API do?" />
                    </Form.Group>
                    <Button as="input" type="submit" value="Submit" id="subBttn"></Button>
                  </Form>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card id="accordCard">
              <Card.Header id="accordCardHead">
                <Accordion.Toggle as={Button} variant="link" eventKey="2" id="accordToggle">
                  Suggest Project
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="2">
                <Card.Body>
                  <Form>
                    <Form.Group controlId="projForm.ControlInput1">
                      <Form.Label>Title</Form.Label>
                      <Form.Control placeholder="What's the name of the project?" />
                    </Form.Group>
                    <Form.Group controlId="projForm.ControlLink1">
                      <Form.Label>Source</Form.Label>
                      <Form.Control as="link" placeholder="Link to project source/documentation" />
                    </Form.Group>
                    <Form.Group controlId="projForm.ControlTextarea1">
                      <Form.Label>Description</Form.Label>
                      <Form.Control as="textarea" rows="3" placeholder="What does this project do?" />
                    </Form.Group>
                    <Form.Group controlId="projForm.ControlTextarea2">
                      <Form.Label>Skills</Form.Label>
                      <Form.Control as="textarea" rows="3" placeholder="What skills are demonstraited, and which technologies are used?" />
                    </Form.Group>
                    <Button as="input" type="submit" value="Submit" id="subBttn"></Button>
                  </Form>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </Col>
      </Row>
    </div>
  );
}

export default Collaborate;