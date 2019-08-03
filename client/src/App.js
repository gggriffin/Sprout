import React, { Component } from 'react';
import queryString from "query-string";
import Header from './Components/Header/Header';
import NavBar from './Components/NavBar/NavBar.js'
import Main from './Components/Main';
import Copyright from './Components/Copyright/Copyright';

class App extends Component {

  
  // This will run before anything renders on the screen
  componentWillMount() {
    // Grabs/Parses the query strings attached to the location
    const query = queryString.parse(this.props.location.search);
    // Check to see if the `token` query item is present
    if (query.token) {
      // Store the token locally
      window.localStorage.setItem("jwt", query.token);

      // Redirects on successful login
      this.props.history.push("/userProfile");
    }
  }

  render() {
    return (
      <div className="App">
        <Header />
        <NavBar />
        <Main />
        <Copyright />
      </div>
    );
  }
}

export default App;
