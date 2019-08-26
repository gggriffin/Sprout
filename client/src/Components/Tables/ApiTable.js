import React from 'react'
import API from '../Utils/API'
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import './Tables.css'




class ApiTable extends React.Component {
  constructor() {
    super();
    this.state = {
      apiLists: [],
      search: ""
    };
  }

  handleInputChange = event => {
    const { search, value } = event.target;
    this.setState({
      search: value
    })
  };

  componentDidMount() {
    this.loadApis()
  }

  loadApis = () => {
    API.getApis()
      .then(res =>
        this.setState({ apiLists: res.data }))
      .catch(err => console.log(err))
  }

  searchApis = id => {
    API.searchApis(id)
      .then(res =>
        this.setState({ apiLists: res.data }))
      .catch(err => console.log(err))
  }

  apiVote = id => {
    API.voteApi(id)
      .then(res => this.loadApis())
      .catch(err => console.log(err));
  }

  renderTable() {
    let data = this.state.apiLists;
    return data.map(api =>
      <tr key={api._id}>
        <td>{api.title}</td>
        <td>{api.type}</td>
        <td>{api.link}</td>
        <td>{api.body}</td>
        <td>{api.score}</td>
        <td>
          <button className="fas fa-tint grow-icon" onClick={() => this.apiVote(api.id)}></button>
        </td>
      </tr>
    )}

  render() {
    return <Col md={{ span: 10, offset: 1 }}>
      <Card id="trendApiTableCard">
        <Card.Body>
          <Card.Title id="trendApiTitle">Trending APIs</Card.Title>
          <Table>
            <thead id="apiTHead">
              <tr>
                <th>Title</th>
                <th>Type</th>
                <th>Source</th>
                <th>Description</th>
                <th>Sprout Score</th>
                <th>Grow</th>
              </tr>
            </thead>
            <tbody id="apiTBody"> 
              {this.renderTable()}
            </tbody>
          </Table>
          <Col md={{ span: 4, offset: 8 }}>
            <InputGroup className="mb-3">
              <FormControl
                onChange={this.handleInputChange}
                placeholder="Search APIs"
                aria-label="Search APIs"
                aria-describedby="basic-addon2"
              />
              <InputGroup.Append>
                <Button id="apiSearchBtn" type="submit" onClick={() => this.searchApis(this.state.search)}>Search</Button>
              </InputGroup.Append>
            </InputGroup>
          </Col>
        </Card.Body>
      </Card>
    </Col>
  }
}

export default ApiTable;