// hide all panels on page load
$('nav-panel').hide();

// when a user clicks on a li
$('nav-panel li').on('click', function (){
	// remove the active class from the currently selected li
	$('li .active').removeClass('active')
	// show the active class for that li
	$('nav')


});

var thisArticle = $(this).children().data('panel'); $("#" + thisArticle).fadeIn(500);

