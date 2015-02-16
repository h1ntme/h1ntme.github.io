var searchOnPage = function () {
	
	$('input.search').click(function(){		
		jQuery.expr[":"].Contains = jQuery.expr.createPseudo(function(arg) { //making case insensitive selector
		return function( elem ) {
        return jQuery(elem).text().toUpperCase().indexOf(arg.toUpperCase()) >= 0;
		};
	});		
		$("article").removeClass("highlight");									//removing previous search result		
		
		var searchValue = $('input').val();
		
		if (searchValue.length > 1) {										// more than 1 character
			$("article:Contains(" + searchValue + ")").addClass("highlight");	//searching on page
		} 		
	});
}


var $container = $('#cardTable');
// initialize
$container.masonry({
  columnWidth: '.card',
  itemSelector: '.card',
  "gutter": 10
});

$(document).ready(function() {	   
  
  searchOnPage();
    
var availableTags = $('div.term').map(function(){
               return $.trim($(this).text());
            }).get();
console.log(availableTags);

$( "#search" ).autocomplete({
  source: availableTags,
  minLength: 2,
  delay: 1000
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