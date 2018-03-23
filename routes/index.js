var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
const MongoClient = require('mongodb').MongoClient;
const Citation = require('../citations/Citation');

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

/* GET home page. */
router.get('/', async function(req, res, next) {

Citation.count().exec(function (err, count) {
  // Get a random entry
  var random = Math.floor(Math.random() * count)

  // Again query all Citations but only fetch one offset by our random #
  Citation.findOne().skip(random).exec(
    function (err, result) {
      // Tada! random Citation
      res.render('index', { title: "IN'CITATIONS", quotes: [result] });
    })
})
  // Récupère les citations en base de données
  // les envoyer dans la vue

});

module.exports = router;
