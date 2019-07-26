var db = require("../models");

module.exports = function (app) {

  ////////////////////////////////////////////////////////
  // Get All Libraries

  app.get("/api/libraryLists", function (req, res) {
    db.libraryLists.findAll({
      order: [
        ['score', 'DESC']
      ]
    }).then(function (dblibraryLists) {
      res.json(dblibraryLists);

    });
  });

  ////////////////////////////////////////////////////////
  // Submit New Library

  app.post("/api/newLib", function (req, res) {
    db.libraryLists.create(
      {
        title: req.body.title,
        body: req.body.body,
        link: req.body.link,
        type: req.body.type,
        score: req.body.score
      }
    )
      .then(function (dblibraryLists) {
        res.json(dblibraryLists);
      })
  });

  ////////////////////////////////////////////////////////
  //Library Vote Update

  app.put('/api/updatelib/:id', function (req, res) {
    console.log("connected library");

    db.libraryLists.increment("score", 
    {
      where: {id: req.params.id}
    })
    

  });
  







  // Delete Library by ID
  // app.delete("/api/libraryLists/:id", function(req, res) {
  //   db.libraryLists.destroy({ where: { id: req.params.id } }).then(function(dblibraryLists) {
  //     res.json(dblibraryLists);
  //   });
  // });
};





  

