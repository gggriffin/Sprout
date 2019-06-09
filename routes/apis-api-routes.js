var db = require("../models");

module.exports = function(app) {
   // Get all api Lists
   app.get("/api/apiLists", function(req, res) {
    db.apiLists.findAll({}).then(function(dbapiLists) {
      res.json(dbapiLists);
    });
  });


  // Create a new apiLists
  app.post("/api/apiLists", function(req, res) {
    db.apiLists.create(req.body).then(function(dbapiLists) {
      res.json(dbapiLists);
    });
  });

  // Delete an apiLists by id
  // app.delete("/api/apiLists/:id", function(req, res) {
  //   db.apiLists.destroy({ where: { id: req.params.id } }).then(function(dbapiLists) {
  //     res.json(dbapiLists);
  //   });
  // });
};
