import React from 'react'
import API from '../Utils/API'
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import './Tables.css'




class LibraryTable extends React.Component {
  constructor() {
    super();
    this.state = {
      libraryLists: [],
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
    this.loadLibraries()
  }

  loadLibraries = () => {
    API.getLibraries()
      .then(res =>
        this.setState({ libraryLists: res.data }))
      .catch(err => console.log(err))
  };

  searchLibraries = id => {
    API.searchLibraries(id)
      .then(res =>
        this.setState({ libraryLists: res.data }))
      .catch(err => console.log(err))
  }

  libraryVote = id => {
    API.voteLibrary(id)
      .then(res => this.loadLibraries())
      .catch(err => console.log(err));
  };

  renderTable() {
    let data = this.state.libraryLists;
    return data.map(library =>
      <tr key={library._id}>
        <td>{library.title}</td>
        <td>{library.type}</td>
        <td className="media-hide">{library.link}</td>
        <td className="media-hide">{library.body}</td>
        <td>{library.score}</td>
        <td>
          <button className="fas fa-tint grow-icon" onClick={() => this.libraryVote(library.id)}></button>
        </td>
      </tr>
    )
  }


  render() {
    return <Col md={{ span: 10, offset: 1 }}>
      <Card id="trendLibTableCard">
        <Card.Body>
          <Card.Title id="trendLibTitle">Trending Libraries</Card.Title>
          <Table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Type</th>
                <th className="media-hide">Source</th>
                <th className="media-hide">Description</th>
                <th>Sprout Score</th>
                <th>Grow</th>
              </tr>
            </thead>
            <tbody>
              {this.renderTable()}
            </tbody>
          </Table>
          <Col md={{ span: 4, offset: 8 }}>
            <InputGroup className="mb-3">
              <FormControl
                onChange={this.handleInputChange}
                placeholder="Search Libraries"
                aria-label="Search Libraries"
                aria-describedby="basic-addon2"
              />
              <InputGroup.Append>
                <Button id="librarySearchBtn" onClick={() => this.searchLibraries(this.state.search)}>Search</Button>
              </InputGroup.Append>
            </InputGroup>
          </Col>
        </Card.Body>
      </Card>
    </Col>

  }
}

export default LibraryTable;




