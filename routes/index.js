var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
const MongoClient = require('mongodb').MongoClient;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: "IN'CITATIONS" });
});


module.exports = router;
