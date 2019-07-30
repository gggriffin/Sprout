import axios from "axios";

export default {
  // Gets all books
  getLibraries: function() {
    return axios.get('/api/v1/libraries');
  },
  getApis: function() {
    return axios.get('/api/v1/apis')
  },
  voteLibrary: function(id) {
    return axios.put('/api/v1/libraries/score/' + id);
  },
  voteApi: function(id) {
    return axios.put('api/v1/apis/score/' + id);
  }

};