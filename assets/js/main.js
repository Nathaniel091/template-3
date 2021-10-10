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



/*----------------------------------------------------------------------------------------------------
# .active & .menu-items
----------------------------------------------------------------------------------------------------*/
let menuItems = document.querySelectorAll('.menu .menu-item')
for(let i=0; i<menuItems.length; i++) {
	menuItems[i].addEventListener('click', () => {
		// select the current active element
		let activeElement = document.querySelector('.active')
		activeElement.classList.remove('active');

		// add .active to the clicked element
		menuItems[i].classList.add('active');
	});
}


/*----------------------------------------------------------------------------------------------------
# 
----------------------------------------------------------------------------------------------------*/





















