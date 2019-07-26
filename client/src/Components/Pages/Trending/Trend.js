import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import './Trend.css';

function Trend() {
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
          <Col md={{ span: 10, offset: 1 }}>
            <Card id="trendApiTableCard">
              <Card.Body>
                <Card.Title id="trendApiTitle">Trending APIs</Card.Title>
                <Table>
                  <thead id="apiTHead">
                    <tr>
                      <th>#</th>
                      <th>Title</th>
                      <th>Type</th>
                      <th>Source</th>
                      <th>Description</th>
                      <th>Sprout Score</th>
                      <th>Grow</th>
                    </tr>
                  </thead>
                  <tbody id="apiTBody">
                    <tr>
                      <td>1</td>
                      <td>Example</td>
                      <td>Test</td>
                      <td>Jason</td>
                      <td>This is a Test</td>
                      <td>11</td>
                      <td>|Grow Icon|</td>
                    </tr>
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col md={{ span: 10, offset: 1 }}>
            <Card id="trendLibTableCard">
              <Card.Body>
                <Card.Title id="trendLibTitle">Trending Libraries</Card.Title>
                <Table>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Title</th>
                      <th>Type</th>
                      <th>Source</th>
                      <th>Description</th>
                      <th>Sprout Score</th>
                      <th>Grow</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Example</td>
                      <td>Test</td>
                      <td>Jason</td>
                      <td>This is a Test</td>
                      <td>11</td>
                      <td>|Grow Icon|</td>
                    </tr>
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}


export default Trend;
