/*----------------------------------------------------------------------------------------------------
# preloader
----------------------------------------------------------------------------------------------------*/
// after all assets are loaded
window.addEventListener('load', () => {
	// after all assets are loaded, remove preloader.

	// Preloader
	let preloader = document.querySelector('.preloader');
	preloader.classList.add('d-none');
});

// document.addEventListener('DOMContentLoaded', () => {
// 	console.log("document & DOMContentLoaded, 3");
// });



/*----------------------------------------------------------------------------------------------------
# nav-bar
----------------------------------------------------------------------------------------------------*/
const menuToggle = document.querySelector('.menu-toggle');
menuToggle.addEventListener('click', () => {
	console.log('clicked');

	let menu = document.querySelector(".menu");
	let menuWidth = menu.clientWidth;

	// the icons
	let menuToggleIconBars = document.querySelector('.menu-toggle-icon-bars');
	let menuToggleIconTimes = document.querySelector('.menu-toggle-icon-times');
	
	if(menuWidth == 0) {
		openMenu();
	} else {
		closeMenu()
	}


	/* Set the width of the side navigation to 250px */
	function openMenu() {
	  menu.style.width = "250px";
	  
	  menuToggleIconBars.classList.add('d-none');
	  menuToggleIconTimes.classList.remove('d-none');
	}


	/* Set the width of the side navigation to 0 */
	function closeMenu() {
	  menu.style.width = "0";

	  menuToggleIconBars.classList.remove('d-none');
	  menuToggleIconTimes.classList.add('d-none');
	}

});


// sticky nav-bar
window.addEventListener('scroll', function() {
	let navbar = document.querySelector('.nav-bar');
	if (window.scrollY > 100) {
		navbar.classList.add('fixed-top');
	} else {
		navbar.classList.remove('fixed-top');
	}
});


// Add smooth scrolling to all links
$(".menu-item, .back-to-top").on('click', function(event) {
	// Make sure this.hash has a value before overriding default behavior
	if (this.hash !== "") {
		// Prevent default anchor click behavior
		event.preventDefault();

		// Store hash
		let hash = this.hash;

		// Using jQuery's animate() method to add smooth page scroll
		// The optional number (500) specifies the number of milliseconds it takes to scroll to the specified area
		$('html, body').animate({
			scrollTop: $(hash).offset().top
		}, 500, function(){
			// Add hash (#) to URL when done scrolling (default click behavior)
			window.location.hash = hash;
			// console.log($(hash).offset().top);

		});
	} // End if
});


/*----------------------------------------------------------------------------------------------------
# .active & .menu-items
----------------------------------------------------------------------------------------------------*/
let menuItems = document.querySelectorAll('.menu .menu-item')
for(let i=0; i<menuItems.length; i++) {
	menuItems[i].addEventListener('click', () => {
		// select the current active element
		let activeElement = document.querySelector('.my-active')
		activeElement.classList.remove('my-active');

		// add .active to the clicked element
		menuItems[i].classList.add('my-active');
	});
}


/*----------------------------------------------------------------------------------------------------
# 
----------------------------------------------------------------------------------------------------*/





















