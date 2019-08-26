import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import LibraryTable from '../../Tables/LibraryTable';
import ApiTable from '../../Tables/ApiTable'
import API from '../../../Components/Utils/API';
import './Trend.css';
export default class Trending extends React.Component {

  state = {
    search: ""
  }

  handleInputChange = event => {
    const { search, value } = event.target;
    this.setState({
      search: value
    });
  };

  triggerSearch() {
    console.log('triggerSearch')
    this.refs.ApiTable.searchApis(this.state.search)
  };

  render() {
    return (
      <div className="Trend">
        <div className="Trend-body">
          <Row>
            <Col md={{ span: 6, offset: 3 }}>
              <Card id="trendMainCard">
                <Card.Body>
                  <Card.Title id="trendMainTitle">
                    <h3>What's Happening</h3>
                  </Card.Title>
                  <Card.Text>
                    Stay up to date on what's trending in tech. Libraries and APIs are constantly developing, and this is the place to keep an eye on what is changing in the industry. Whether you've developed a new technology or simply stumbled upon one, we encourage you to submit them using our Collaborate system. If you find something you like, help Grow it so other users might discover it as well.
                </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row>
            <ApiTable search={this.state.search} />
          </Row>
          <Row>
            <Col md={{ span: 10, offset: 1 }}>
              <Card id="trendLibTableCard">
                <Card.Body>
                  <Card.Title id="trendLibTitle">Trending Libraries</Card.Title>
                  <Table>
                    <thead>
                      <tr>
                        <th>Title</th>
                        <th>Type</th>
                        <th>Source</th>
                        <th>Description</th>
                        <th>Sprout Score</th>
                        <th>Grow</th>
                      </tr>
                    </thead>
                    <tbody>
                      <LibraryTable />
                    </tbody>
                  </Table>
                  <Col md={{ span: 4, offset: 8 }}>
                    <InputGroup className="mb-3">
                      <FormControl
                        placeholder="Search Libraries"
                        aria-label="Search Libraries"
                        aria-describedby="basic-addon2"
                      />
                      <InputGroup.Append>
                        <Button id="librarySearchBtn">Search</Button>
                      </InputGroup.Append>
                    </InputGroup>
                  </Col>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    );
  }

}
