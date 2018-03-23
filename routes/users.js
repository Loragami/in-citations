var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('', {title: 'créer une nouvelle citation', errors:[]});
});

module.exports = router;
