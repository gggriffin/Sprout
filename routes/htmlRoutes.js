var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.projectExamples.findAll({}).then(function(dbprojectExamples) {
      res.render("index", {
        msg: "Welcome!",
        examples: dbprojectExamples
      });
    });
  });

  // Load example page and pass in an example by id
  app.get("/projectExamples/:id", function(req, res) {
    db.projectExamples.findOne({ where: { id: req.params.id } }).then(function(dbprojectExamples) {
      res.render("projectExamples", {
        example: dbprojectExamples
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
