var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const Citation = require('../citations/Citation');

router.get('/Citation', function(req, res, next) {
  res.render('citations/Citation', {title: 'créer une nouvelle citation', errors:[]});
});
/* GET home page. */
router.post('/', async function(req, res, next){

  var errors = [];
  var inputInfo = req.body;

  // Créer un modele mongoose pour les CITATIONS
  var c = new Citation({
    author  : inputInfo.author,
    quote  : inputInfo.quote
  });
    // Créer une nouvelle citation à partir du modèle et des données dans req.body

    // Sauvegarder la nouvelle citation
    try{
    var saved = await c.save();
    // res.render('citations/CitationCreated');
      // console.log(inputInfo.author)
      res.send('ok')
  } catch(err){
    next(err)
  }



})


module.exports = router;
