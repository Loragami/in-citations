var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
/* GET home page. */
router.post('/', async function(req, res, next){

  var errors = [];
  var inputInfo = req.body;
  // Créer un schéma mongoose pour les Citations
  var QuoteSchema = new mongoose.Schema({
      author: String,
      quote: String
    });
  var Citation = mongoose.model('Citation', QuoteSchema);
  // Créer un modele mongoose pour les CITATIONS
  var c = new Citation({
    author  : inputInfo.author,
    quote  : inputInfo.quote
  });
    // Créer une nouvelle citation à partir du modèle et des données dans req.body

    // Sauvegarder la nouvelle citation
    try{
    var saved = await c.save();
    // res.render('citations/citationsCreated');
      console.log(inputInfo.author)
      res.send('ok')
  } catch(err){
    next(err)
  }



})


module.exports = router;
