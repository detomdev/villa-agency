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
//onclick event to sort data
onclick = "SortData()";

function comparator(a, b) {
	if (a.dataset.subject < b.dataset.subject) return -1;
	if (a.dataset.subject > b.dataset.subject) return 1;
	return 0;
}

// Function to sort Data
function SortData() {
	var subjects = document.querySelectorAll("[data-subject]");
	var subjectsArray = Array.from(subjects);
	let sorted = subjectsArray.sort(comparator);
	sorted.forEach(e => document.querySelector("#list").appendChild(e));
}
