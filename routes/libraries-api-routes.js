var db = require("../models");

module.exports = function(app) {
  // Get all library lists
  app.get("/api/libraryLists", function(req, res) {
    db.libraryLists.findAll({}).then(function(dblibraryLists) {
      res.json(dblibraryLists);
      
    });
  });

  // Create a new libraryLists
  app.post("/api/libraryLists", function(req, res) {
    var getData = req.body; 
    var title = getData.libraryTitleSuggest;
    var description = getData.exampleFormControlTextarea1;
    var links = getData.librarySourceSuggest;
    // var type = getData.libraryTypeSuggest;
    db.libraryLists.create(title, description, links).then(function(dblibraryLists) {
      res.json(dblibraryLists);
    });
  });

  // Delete an libraryLists by id
  // app.delete("/api/libraryLists/:id", function(req, res) {
  //   db.libraryLists.destroy({ where: { id: req.params.id } }).then(function(dblibraryLists) {
  //     res.json(dblibraryLists);
  //   });
  // });
};

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
