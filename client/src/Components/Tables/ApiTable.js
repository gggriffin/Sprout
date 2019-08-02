import React from 'react'
import API from '../Utils/API'
import './Tables.css'




class ApiTable extends React.Component {
    constructor() {
        super();
        this.state = {
          apiLists: []
        };
      }
      
      componentDidMount() {
        this.loadApis()
      }
    
      loadApis = () => {
        API.getApis()
        .then(res =>
          this.setState({ apiLists: res.data }))
          .catch(err => console.log(err))
      }

      apiVote = id => {
        API.voteApi(id)
        .then(res => this.loadApis())
        .catch(err => console.log(err));
      }

    render() {
        return this.state.apiLists.map(api =>
                <tr key={api._id}>
                    <td>{api.title}</td>
                    <td>{api.type}</td>
                    <td>{api.link}</td>
                    <td>{api.body}</td>
                    <td>{api.score}</td>
                    <td>
                        <button className="fas fa-tint grow-icon" onClick={() => this.apiVote(api.id)}></button>
                    </td>
                </tr>)
      
    }
  }

  export default ApiTable;