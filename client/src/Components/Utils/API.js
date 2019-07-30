import axios from "axios";

export default {
  // Gets all books
  getLibraries: function() {
    return axios.get("/api/v1/libraries");
  },
};