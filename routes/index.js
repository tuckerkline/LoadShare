var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile('/html/index.html', {root: './public'})
});

module.exports = router;
