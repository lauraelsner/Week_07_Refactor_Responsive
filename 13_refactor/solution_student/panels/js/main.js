// hide all articles on pageload
$('.panel').hide();
// show jsut the #home article
$('#home').show();

// user clicks on li in navigation
$('nav li').on('click', function (){	
	// remove active class from currently active li
	$('li.active').removeClass('active');
	// add the active class to the li clicked on
	$(this).addClass('active');
	// fade out article that is visible
	$('.panel').hide();
	// fade in the article with the id that corresponds to the data attribute of the li clicked on
	var thisArticle = $(this).children().data('panel');
	$("#" + thisArticle).fadeIn(500);
	
});


