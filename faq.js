"use strict";

// Bring in all the buttons. This puts them in a node list (array)
const toggles = document.querySelectorAll(".faq-toggle");

// Set the default state to none active
toggles.forEach(toggle => {
	toggle.parentNode.classList.remove("active");
});

// Use forEach to loop over the individual 'toggle' and add the event listener "click"
// The callback function will go to the parent and toggle the class to active
toggles.forEach(toggle => {
	toggle.addEventListener("click", event => {
		// Check if the clicked element has the "fa-times" class
		if (event.target.classList.contains("toggle")) {
			// Remove the "active" class from the parent node to close the toggle
			event.target.parentNode.classList.remove("active");
		} else {
			// Remove the "active" class from all toggle buttons
			toggles.forEach(t => t.parentNode.classList.remove("active"));

			// Add the "active" class to the clicked button's parent node
			toggle.parentNode.classList.add("active");
		}
	});
});
