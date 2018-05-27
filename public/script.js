var init = function() {
  var card = document.getElementById('card');
  
  document.getElementById('start').addEventListener( 'click', function(){
    card.toggleClassName('flipped');
    this.outerHTML = "";
  }, false);
};

window.addEventListener('DOMContentLoaded', init, false);

