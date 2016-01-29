// when user clicks any dt
$('dt').on('click', function() {
	// hide currently active dd
	$('dd').slideUp(350);
	// remove active class from currently active dt
	$('dt').removeClass('active');
	//add active class to the dt clicked on
	$(this).addClass('active');
	// expose the corresponding dd
	$('dt.active').next('dd').slideDown(350);

});
