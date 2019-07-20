var db = require("../models");

module.exports = function (app) {

  ///////////////////////////////////////////////////////  
  // Get all users 
  app.get("/api/users", function (req, res) {
    db.users.findAll({
        order: []
    }).then(function (dbusers) {
      res.json(dbusers);

    });
  });

  ///////////////////////////////////////////////////////
  // Update a new usersList
  app.post("/api/users", function (req, res) {
    db.users.create(
      {
        id: req.body.id,
        provider: req.body.provider,
        displayName: req.body.displayName,
        photo: req.body.photo
        //userName: req.body.userName,
        //password: req.body.password,
        //apisSubmitted: req.body.apisSubmitted,
        //librariesSubmitted: req.body.librariesSubmitted,
        //projectsSubmitted: req.body.projectsSubmitted,
        //commentHistory: req.body.commentHistory
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