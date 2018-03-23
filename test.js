<script>
 var citation = document.getElementById('citation').innerHTML;
  var auteur = document.getElementById('auteur').innerHTML;
  document.getElementById('clickme').onclick= function() {

  }
</script>
</html>

var aleatoire = null;
var hashtag = 'citation';

$('document').ready(function() {
  $('.auteur').html(auteur[aleatoire]);
  aleatoire = Math.floor(Math.random() * citations.length);
  $('.citation').html(citations[aleatoire]);


  $('#clickme').click(function() {

  });
  const button = document.getElementById('clickme');
  button.addEventListener('click', function(e) {
    if (req.body.clickme){
      return
    }
    console.log('button was clicked');
<html>
  label(for="clickme") #{quotes}
