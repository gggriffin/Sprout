var db = require("../models");

module.exports = function (app) {
  // Get all users list
  app.get("/api/users", function (req, res) {
    db.users.findAll({}).then(function (dbusers) {
      res.json(dbusers);

    });
  });

  // Create a new usersLists
  app.post("/api/newUsers", function (req, res) {
    db.users.create(
      {
        id: req.body.id,
        provider: req.body.provider,
        displayName: req.body.displayName,
        photo: req.body.photo,
      }
    )
      .then(function (dbusers) {
        res.json(dbusers);
      });
  });

  // Delete an libraryLists by id
  // app.delete("/api/libraryLists/:id", function(req, res) {
  //   db.libraryLists.destroy({ where: { id: req.params.id } }).then(function(dblibraryLists) {
  //     res.json(dblibraryLists);
  //   });
  // });
};