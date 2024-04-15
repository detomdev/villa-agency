//FAQ drop down
//Bring in all the buttons. This puts them in a node list (array)
const toggles = document.querySelectorAll(".toggle");
console.log(toggles);

//use forEach to loop over the individual 'toggle' and add the event listener "click" the callback function will change the button color
toggles.forEach(toggle => {
	toggle.addEventListener("click", () => {
		toggle.style.backgroundColor = "var(--clr-light)";
	});
});
