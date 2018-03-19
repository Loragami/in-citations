var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
const MongoClient = require('mongodb').MongoClient;


(async function() {
 const url = 'mongodb://localhost:27017/EndFormationProject';
 const dbName = 'EndFormationProject';
 let client;

 try {
  client = await MongoClient.connect(url);

   const db = client.db(dbName);
   const myappcollection= db.collection('myapp');
   console.log();
 } catch (err) {
   console.log(err.stack);
 }

 if (client) {
  client.close();
 }
})();
mongoose.connect('mongodb://localhost/blog', function(err) {
  if (err) { throw err; }
});
var Schema = mongoose.Schema({

});
var User = mongoose.model('Citations', Schema);

var c = new Citations({
  c.name = '';
});
Citations.save(function(err, newCitations) {
  console.log(newCitations);
})

(async () => {
  var saved = await Citations.save();
})();
mongoose.connection.close();
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: "IN'CITATIONS", errors : [] });
});
router.get('/accueil', function(req, res, next) {
  res.render('homepage/accueil', { title: "IN'CITATIONS",  errors : [] });
});
router.get('/citations', function(req, res, next) {
  res.render('homepage/accueil/citations', { title: "IN'CITATIONS",  errors : [] });
});
router.post('/', async function(req, res, next) {
  var errors = [];


module.exports = router;
