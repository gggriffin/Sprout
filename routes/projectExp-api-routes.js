var db = require("../models");

module.exports = function (app) {

  ////////////////////////////////////////////////////////
  // Get All Projects
  app.get("/api/projectExamples", function (req, res) {
    db.projectExamples.findAll({}).then(function (dbprojectExamples) {

      res.json(dbprojectExamples);

    });
  });

  ////////////////////////////////////////////////////////
  // Submit New Library

  app.post("/api/newProject", function (req, res) {
    db.projectExamples.create(
      {
        title: req.body.title,
        body: req.body.body,
        link: req.body.link,
        skills: req.body.skills,
      }
    ).then(function (dbprojectExamples) {
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
