var db = require("../models");

module.exports = function (app) {
  // Get all api Lists
  app.get("/api/apiLists", function (req, res) {
    db.apiLists.findAll({
      order: [
        ['score', 'DESC']
      ]
    }).then(function (dbapiLists) {
      res.json(dbapiLists);
    });
  });


  // Create a new apiLists
  app.post("/api/newApi", function (req, res) {
    db.apiLists.create(
      {
        title: req.body.title,
        body: req.body.body,
        link: req.body.link,
        type: req.body.type,
        score: req.body.score
      }
    ).then(function (dbapiLists) {
      res.json(dbapiLists);
    });
  });

  app.put('/api/update/:id', function (req, res) {
    console.log("connected");

    db.apiLists.increment("score", 
    {
      where: {id: req.params.id}
    })
    

  });





  // Delete an apiLists by id
  // app.delete("/api/apiLists/:id", function(req, res) {
  //   db.apiLists.destroy({ where: { id: req.params.id } }).then(function(dbapiLists) {
  //     res.json(dbapiLists);
  //   });
  // });
};
