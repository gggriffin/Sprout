var db = require("../models");

module.exports = function(app) {
  // Get all projectExamples
  app.get("/api/projectExamples", function(req, res) {
    db.projectExamples.findAll({}).then(function(dbprojectExamples) {
      res.json(dbprojectExamples);
      
    });
  });
  // Get all library lists
  app.get("/api/libraryLists", function(req, res) {
    db.libraryLists.findAll({}).then(function(dblibraryLists) {
      res.json(dblibraryLists);
      
    });
  });
   // Get all api Lists
   app.get("/api/apiLists", function(req, res) {
    db.apiLists.findAll({}).then(function(dbapiLists) {
      res.json(dbapiLists);
      
    });
  });

  // Create a new projectExample
  app.post("/api/projectExample", function(req, res) {
    db.projectExample.create(req.body).then(function(dbprojectExample) {
      res.json(dbprojectExample);
    });
  });

  // Delete an projectExample by id
  app.delete("/api/projectExample/:id", function(req, res) {
    db.projectExample.destroy({ where: { id: req.params.id } }).then(function(dbprojectExample) {
      res.json(dbprojectExample);
    });
  });
};
