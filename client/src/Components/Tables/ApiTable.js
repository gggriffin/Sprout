import React from 'react'
import API from '../Utils/API'




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

    render() {
        return this.state.apiLists.map(api =>
                <tr key={api._id}>
                    <td>{api.title}</td>
                    <td>{api.type}</td>
                    <td>{api.link}</td>
                    <td>{api.body}</td>
                    <td>{api.score}</td>
                    <td>
                        <button className={api.id}>Grow</button>
                    </td>
                </tr>)
      
    }
  }

  export default ApiTable;