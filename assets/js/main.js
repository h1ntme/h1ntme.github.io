var searchOnPage = function () {
	
	$('div.srch').click(function(){		
		jQuery.expr[":"].Contains = jQuery.expr.createPseudo(function(arg) { //making case insensitive selector
		return function( elem ) {
        return jQuery(elem).text().toUpperCase().indexOf(arg.toUpperCase()) >= 0;
		};
	});		
		$("td").removeClass("highlight");									//removing previous search result		
		
		var searchValue = $('input').val();
		
		if (searchValue.length > 1) {										// more than 1 character
			$("td:Contains(" + searchValue + ")").addClass("highlight");	//searching on page
		} 		
	});
}

$(document).ready(function() {	   
  
  searchOnPage();
	
  $('#close-all').click(function() {
    $(".description").slideUp(300);
  });
  $('#open-all').click(function() {
    $(".description").slideDown(300);
  });
  $('.cardName').click(function() {
    $(this).next('.description').slideToggle(300);
  });
  $('#hide-all').click(function() {
    $('.definition').slideToggle(300);
  });
  $('.term').click(function() {
    $(this).next('.definition').slideToggle(300);
  });
  
});