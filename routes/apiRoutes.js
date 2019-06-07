var db = require("../models");

module.exports = function(app) {
  // Get all projectExamples
  app.get("/api/projectExample", function(req, res) {
    db.projectExample.findAll({}).then(function(dbprojectExamples) {
      res.json(dbprojectExamples);
      
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
