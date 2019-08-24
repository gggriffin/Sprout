import React from 'react'
import API from '../Utils/API'
import './Tables.css'




class UserProfileTable extends React.Component {
    constructor() {
        super();
        this.state = {
          userLists: [],
        };
      }
      
      componentDidMount() {
        this.loadUsers()
      }
    
      loadUsers = () => {
        API.getUsers()
        .then(res =>
          this.setState({ userLists: res.data }))
          .catch(err => console.log(err))
      };

     


  
    }

  export default UserProfileTable;


