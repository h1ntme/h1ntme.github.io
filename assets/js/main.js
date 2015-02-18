	jQuery.expr[":"].Contains = jQuery.expr.createPseudo(function(arg) { //making case insensitive selector
		return function( elem ) {
        return jQuery(elem).text().indexOf(arg) >= 0;
		};
	});

var $container = $('#cardTable');
$container.masonry({
  columnWidth: '.card',
  itemSelector: '.card',
  "gutter": 10
});

$(document).ready(function() {

$('.definition-link a').text('i');
	
var availableTags = $('div.term').map(function(){
               return $.trim($(this).text());
            }).get();
$( "#search" ).autocomplete({
  source: availableTags,
  minLength: 2,
  delay: 500,
  select: function( event, ui ) {
		$("article").removeClass("search-highlight");
		$("article:Contains(" + ui.item.label + ")").addClass("search-highlight");
		var body = $("html, body");
		var coord = $("div.term:Contains(" + ui.item.label + ")").offset().top - 75;
		body.animate({
			scrollTop: coord
		});
	}
});

//window.navigator.vibrate([100,30,100,30,100,200,200,30,200,30,200,200,100,30,100,30,100]); // Vibrate 'SOS' in Morse.

// killing sparrows with the cannon below
if ($('title').text() === 'H1NT.me') {
	$('.en-link').attr('href','http://h1nt.me/en/');
	$('.ru-link').attr('href','http://h1nt.me/');
} else if ($('title').text() === 'О проекте' || $('title').text() === 'About') {
	$('.en-link').attr('href','http://h1nt.me/en/about/');
	$('.ru-link').attr('href','http://h1nt.me/ru/about/');
} else {
	$('.en-link').attr('href','http://h1nt.me/en' + '/' + $('title').text() + '/');
	$('.ru-link').attr('href','http://h1nt.me/ru' + '/' + $('title').text() + '/');
}
//

$('.droppable').click(
    function() {
      $('ul.dropzone', this).slideToggle(300);
    }
  );
	
  $('#close-all').click(function() {
    $(".description").slideUp(300, function() {
    $container.masonry(); });
	});
  $('#open-all').click(function() {
    $(".description").slideDown(300, function() {
    $container.masonry();
  }); });
  $('#hide-all').click(function() {
    $('.definition').slideToggle(300, function() {
    $container.masonry();
  }); });
  
  $('.cardName').click(function() {
    $(this).next('.description').slideToggle(300, function() {
    $container.masonry();
  }); });
  
  $('.term').click(function() {
    $(this).next('.definition').slideToggle(300);
  });
  var msnry = $container.data('masonry');
});