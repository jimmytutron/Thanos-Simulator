var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var thanos = require("../models/thanos.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  thanos.all(function(data) {
    var hbsObject = {
      avengers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/avengers", function(req, res) {
  thanos.create([
    "name", "alive"
  ], [
    req.body.name, req.body.alive
  ], function(result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

router.put("/api/avengers/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  thanos.update({
    alive: req.body.alive
  }, condition, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

router.delete("/api/avengers/:id", function(req, res){
  var condition = "id = " + req.params.id;
  console.log("condition", condition);

  thanos.delete(condition, function(result){
    if (result){
      return res.status(200).end();
    } else {i
      res.status(404).end();
    }
  });
});

// Export routes for server.js to use.
module.exports = router;
