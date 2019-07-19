var db = require("../models");

module.exports = function (app) {
  // Get all library lists
  app.get("/api/libraryLists", function (req, res) {
    db.libraryLists.findAll({
      order: [
        ['score', 'DESC']
      ]
    }).then(function (dblibraryLists) {
      res.json(dblibraryLists);

    });
  });

  // Create a new libraryLists
  app.post("/api/newLib", function (req, res) {
    db.libraryLists.create(
      {
        title: req.body.title,
        body: req.body.body,
        score: req.body.score,
        link: req.body.link,
        type: req.body.type,
        score: req.body.score
      }
    )
      .then(function (dblibraryLists) {
        res.json(dblibraryLists);
      })
  });

  app.put('/update/:id'), function (req, res) {
    const id = req.params.id;
    console.log('api id: ' + id)
    console.log('id = ' + id);

    db.libraryLists.increment('score', 
    {
      where: {id: id}
    })
    .then(res.json(dblibraryLists));

  }
};
  // Delete an libraryLists by id
  // app.delete("/api/libraryLists/:id", function(req, res) {
  //   db.libraryLists.destroy({ where: { id: req.params.id } }).then(function(dblibraryLists) {
  //     res.json(dblibraryLists);
  //   });
  // });


// var postEntry = function(req, res) {
// 	var title = req.body.title,
// 		content = req.body.content;
// 	m.models.post.sync()
// 		.then(function() {
// 			return 	m.models.post.create({
// 				postTitle: title,
// 				postContent: content
// 			});
// 		})
// 		.then(function(data) {
// 			res.send({
// 				status: 'OK',
// 				data: data
// 			});
// 		});
