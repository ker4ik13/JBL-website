	$(document).ready(function(){
 		var body = $("body");
 		body.fadeIn(300);
 		$(document).on("click", "a:not([href^='#']):not([href^='tel']):not([href^='mailto'])", function(e) {
  			e.preventDefault();
  			$("body").fadeOut(300);
  			var self = this;
  			setTimeout(function () {
   		window.location.href = $(self).attr("href");
  		}, 300);
 	});
});






/* Удаление через jQuerry*/

/*
$( "#headphones__item" ).click(function() {
  $( "#title2" ).fadeOut(400, function() {});
  $( "#headphones__bg" ).fadeOut(400, function() {});
  $( "#nav__buttons" ).fadeOut(400, function() {});
  $( "#prev__btn" ).fadeOut(400, function() {})
  $( "#nav__buttons" ).fadeOut(400, function() {})
  $( "#nav__buttons" ).fadeOut(400, function() {})
});
*/







document.getElementById('headphones__item').onclick = function() {
	document.getElementById('title2').classList.add('items-opacity');
	document.getElementById('headphones__bg').classList.add('items-opacity1');
	document.getElementById('nav__buttons').classList.add('opacity__btn');
	document.getElementById('prev__btn').classList.add('prev__btn-opacity');
	document.getElementById('back__btn--item').classList.add('back__btn--opacity');
	document.getElementById('headphones__item').classList.add('transform-headphone1');
	document.getElementById('headphones__characteristics').classList.add('headphones__characteristics--opacity');

}




document.getElementById('prev__btn').onclick = function() {
	document.getElementById('title2').classList.remove('items-opacity');
 	document.getElementById('headphones__bg').classList.remove('items-opacity1');
 	document.getElementById('nav__buttons').classList.remove('opacity__btn');
 	document.getElementById('prev__btn').classList.remove('prev__btn-opacity');
 	document.getElementById('back__btn--item').classList.remove('back__btn--opacity');
 	document.getElementById('headphones__item').classList.remove('transform-headphone1');
 	document.getElementById('headphones__characteristics').classList.remove('headphones__characteristics--opacity');
}