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