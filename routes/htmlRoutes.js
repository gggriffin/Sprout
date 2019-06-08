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

  app.get('/trending', function(req, res) {
    res.render('trending');
  });

  app.get('/projects', function(req, res) {
    res.render('projects');
  });

  app.get('/contact', function(req, res) {
    res.render('contact');
  });

  app.get('/collaborate', function(req, res) {
    res.render('collaborate');
  });

  

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};

