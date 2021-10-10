

/*
# This file is used for initializing all vendor js files that needs initializing
# The purpose of this is to not litter my main.js file with jQuery code
# Include this before include the main.js file
*/


$(document).ready(function(){
	/*----------------------------------------------------------------------------------------------------
	# .venobox
	----------------------------------------------------------------------------------------------------*/
	$('.venobox').venobox();


	/*----------------------------------------------------------------------------------------------------
	# 
	----------------------------------------------------------------------------------------------------*/
});


/*----------------------------------------------------------------------------------------------------
# Testimonials carousel (uses the Owl Carousel library)
----------------------------------------------------------------------------------------------------*/
$(".testimonials__carousel").owlCarousel({
	autoplay: true,
	dots: true,
	loop: true,
	items: 1
});