$(document).ready(function() {	
	
	var searchOnThisPage = new Imtech.SearchOnThisPage();
		searchOnThisPage.startSearchingLength = 2; // search for text which contains two or more characters  
		searchOnThisPage.init();
    
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
    $(this).next('.definition').slideDown(300);
  });
  
  
});