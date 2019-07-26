var db = require("../models");

module.exports = function (app) {
  
  ////////////////////////////////////////////////////////
  // Get All APIs

  app.get("/api/apiLists", function (req, res) {
    db.apiLists.findAll({
      order: [
        ['score', 'DESC']
      ]
    }).then(function (dbapiLists) {
      res.json(dbapiLists);
    });
  });

  ////////////////////////////////////////////////////////
  // Submit New API

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

  ////////////////////////////////////////////////////////
  //Api Vote Update

  app.put('/api/updateapi/:id', function (req, res) {
    console.log("connected");

    db.apiLists.increment("score", 
    {
      where: {id: req.params.id}
    })
    

  });





  // Delete API by ID
  // app.delete("/api/apiLists/:id", function(req, res) {
  //   db.apiLists.destroy({ where: { id: req.params.id } }).then(function(dbapiLists) {
  //     res.json(dbapiLists);
  //   });
  // });
};
