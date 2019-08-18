import React, {Component} from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './Collaborate.css';
import API from '../../Utils/API';

class Collaborate extends Component {
  state = {
    title: "",
    body: "",
    link: "",
    type: "",
    score: 1,
    skills: "",
    tags: 1
  }


  handleInputChange = event => {
    const {name, value} = event.target;
    this.setState({
      [name]: value
    });
  };

  handleApiSubmit = event => {
    event.preventDefault();
    if (this.state.title && this.state.body && this.state.link && this.state.type ) {
      API.addApi({
        title: this.state.title,
        body: this.state.body,
        link: this.state.link,
        type: this.state.type,
        score: this.state.score
      })
      .catch(err => console.log('submit error: ' + err));
    }
  }

  handleLibrarySubmit = event => {
    event.preventDefault();
    if (this.state.title && this.state.body && this.state.link && this.state.type ) {
      API.addLibrary({
        title: this.state.title,
        body: this.state.body,
        link: this.state.link,
        type: this.state.type,
        score: this.state.score
      })
      .catch(err => console.log(err));
    }
  }

  handleProjectSubmit = event => {
    event.preventDefault();
    if(this.state.title && this.state.body && this.state.skills && this.state.link) {
      API.addProject({
        title: this.state.title,
        body: this.state.body,
        skills: this.state.skills,
        link: this.state.link,
        tags: this.state.tags
      })
      .catch(err => console.log('submit error: ' + err))
    }
  }


  render() {
  return (
    <div className="Collab">
      <Row>
        {this.state.score}
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
                      <Form.Control 
                      value={this.state.title}
                      onChange={this.handleInputChange}
                      name="title"
                      placeholder="What's the name of the library?" />
                    </Form.Group>

                    <Form.Group controlId="libForm.ControlSelect1">
                      <Form.Label>Type</Form.Label>
                      <Form.Control 
                      as="select"
                      value={this.state.type}
                      onChange={this.handleInputChange}
                      name="type">
                      <option></option>
                      <option>HTML</option>
                      <option>CSS</option>
                      <option>Javascript</option>
                      <option>Python</option>
                      <option>Ruby</option>
                      <option>C#</option>
                      <option>C++</option>
                      </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="libForm.ControlLink1">
                      <Form.Label>Source</Form.Label>
                      <Form.Control 
                      value={this.state.link}
                      onChange={this.handleInputChange}
                      name="link" 
                      placeholder="Link to repository/documentation" />
                    </Form.Group>
                    
                    <Form.Group controlId="libForm.ControlTextarea1">
                      <Form.Label>Description</Form.Label>
                      <Form.Control 
                      as="textarea" 
                      rows="3" 
                      value={this.state.body}
                      onChange={this.handleInputChange}
                      name="body"
                      placeholder="What does this library do?" />
                    </Form.Group>

                    <Button
                    as="input" 
                    type="submit" 
                    value="Submit" 
                    id="subBttn"
                    disabled={!(this.state.title && this.state.body && this.state.link && this.state.type)}
                    onClick={this.handleLibrarySubmit}></Button>
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
                      <Form.Control 
                      value={this.state.title}
                      onChange={this.handleInputChange}
                      name="title"
                      placeholder="What's the name of the API?" />
                    </Form.Group>

                    <Form.Group controlId="apiForm.ControlInput2">
                      <Form.Label>Type</Form.Label>
                      <Form.Control 
                      value={this.state.type}
                      onChange={this.handleInputChange}
                      name="type"
                      placeholder="What type of API is this? (weather, time, etc.)" />
                    </Form.Group>

                    <Form.Group controlId="apiForm.ControlLink1">
                      <Form.Label>Source</Form.Label>
                      <Form.Control 
                      value={this.state.link}
                      onChange={this.handleInputChange}
                      name="link"
                      placeholder="Link to API/documentation" />
                    </Form.Group>

                    <Form.Group controlId="apiForm.ControlTextarea1">
                      <Form.Label>Description</Form.Label>
                      <Form.Control 
                      as="textarea" 
                      rows="3" 
                      value={this.state.body}
                      onChange={this.handleInputChange}
                      name="body"
                      placeholder="What does this API do?" />
                    </Form.Group>

                    <Button 
                    as="input" 
                    type="submit" 
                    value="Submit" 
                    id="subBttn"
                    disabled={!(this.state.title && this.state.body && this.state.link && this.state.type)}
                    onClick={this.handleApiSubmit}></Button>
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
                      <Form.Control 
                      value={this.state.title}
                      onChange={this.handleInputChange}
                      name="title"
                      placeholder="What's the name of the project?" />
                    </Form.Group>

                    <Form.Group controlId="projForm.ControlLink1">
                      <Form.Label>Source</Form.Label>
                      <Form.Control
                       value={this.state.link}
                       onChange={this.handleInputChange}
                       name="link"
                       placeholder="Link to project source/documentation" />
                    </Form.Group>

                    <Form.Group controlId="projForm.ControlTextarea1">
                      <Form.Label>Description</Form.Label>
                      <Form.Control
                      value={this.state.body}
                      onChange={this.handleInputChange}
                      name="body"
                       as="textarea"
                      rows="3"
                      placeholder="What does this project do?" />
                    </Form.Group>

                    <Form.Group controlId="projForm.ControlTextarea2">
                      <Form.Label>Skills</Form.Label>
                      <Form.Control
                      value={this.state.skills}
                      onChange={this.handleInputChange}
                      name="skills" 
                      as="textarea" 
                      rows="3" 
                      placeholder="What skills are demonstraited, and which technologies are used?" />
                    </Form.Group>

                    <Button 
                    disabled={!(this.state.title && this.state.body && this.state.link && this.state.skills)}
                    onClick={this.handleProjectSubmit}
                    as="input" 
                    type="submit" 
                    value="Submit" 
                    id="subBttn"></Button>
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
}

export default Collaborate;