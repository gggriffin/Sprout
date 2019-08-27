import axios from "axios";

export default {
  // Gets all books
  getApis: function() {
    return axios.get('/api/v1/apis')
  },
  addApi: function(apiData) {
    return axios.post('api/v1/apis', apiData);
  },
  voteApi: function(id) {
    return axios.put('api/v1/apis/score/' + id);
  },
  searchApis: function(id) {
    return axios.get('/api/v1/apis/' + id)
  },


  getLibraries: function() {
    return axios.get('/api/v1/libraries');
  },
  addLibrary: function(libraryData) {
    return axios.post('api/v1/libraries', libraryData)
  },
  voteLibrary: function(id) {
    return axios.put('/api/v1/libraries/score/' + id);
  },
  searchLibraries: function(id) {
    return axios.get('/api/v1/libraries/' + id)
  },
  
  

  addProject: function(projectData) {
    return axios.post('api/v1/projects', projectData);
  }
  

};