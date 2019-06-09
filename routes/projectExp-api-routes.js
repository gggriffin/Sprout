var db = require("../models");

module.exports = function(app) {
  // Get all projectExamples
  app.get("/api/projectExamples", function(req, res) {
    db.projectExamples.findAll({}).then(function(dbprojectExamples) {
      res.json(dbprojectExamples);
      
    });
  });

  // Create a new projectExamples
  app.post("/api/projectExamples", function(req, res) {
    db.projectExamples.create(req.body).then(function(dbprojectExamples) {
      res.json(dbprojectExamples);
    });
  });

  // Delete an projectExamples by id
  // app.delete("/api/projectExamples/:id", function(req, res) {
  //   db.projectExamples.destroy({ where: { id: req.params.id } }).then(function(dbprojectExamples) {
  //     res.json(dbprojectExamples);
  //   });
  // });
};
