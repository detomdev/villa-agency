"use strict";

// Mobile navigation
const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav");

navToggle.addEventListener("click", () => {
	nav.classList.toggle("nav--visible");
});

//FAQ drop down
//Bring in all the buttons. This puts them in a node list (array)
const toggles = document.querySelectorAll(".faq-toggle");

//use forEach to loop over the individual 'toggle' and add the event listener "click" the callback function will go to the parent and toggle the class to active
toggles.forEach(toggle => {
	toggle.addEventListener("click", () => {
		toggle.parentNode.classList.toggle("active");
	});
});
