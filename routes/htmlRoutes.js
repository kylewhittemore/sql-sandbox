const path = require("path");
const router = require("express").Router();

router.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

// All other routes respond with the index.html file
router.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

module.exports = router;