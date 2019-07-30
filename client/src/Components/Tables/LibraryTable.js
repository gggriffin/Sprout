import React from 'react'
import API from '../Utils/API'




class LibraryTable extends React.Component {
    constructor() {
        super();
        this.state = {
          libraryLists: [],
        };
      }
      
      componentDidMount() {
        this.loadLibraries()
      }
    
      loadLibraries = () => {
        API.getLibraries()
        .then(res =>
          this.setState({ libraryLists: res.data }))
          .catch(err => console.log(err))
      }


    render() {
        return this.state.libraryLists.map(library =>
                <tr key={library._id}>
                    <td>{library.id}</td>
                    <td>{library.title}</td>
                    <td>{library.type}</td>
                    <td>{library.link}</td>
                    <td>{library.body}</td>
                    <td>{library.score}</td>
                    <td>
                        <button className={library.id}>Grow</button>
                    </td>
                </tr>)
      
    }
  }

  export default LibraryTable;




