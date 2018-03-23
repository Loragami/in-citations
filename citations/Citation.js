var mongoose = require('mongoose');

var QuoteSchema = new mongoose.Schema({
    author: String,
    quote: String
});
var Citation = mongoose.model('Citation', QuoteSchema);

module.exports = Citation;
