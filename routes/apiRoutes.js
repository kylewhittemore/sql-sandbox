const router = require("express").Router();

router.get("/", function(req, res) {
  res.json('api route hit')
});

module.exports = router;