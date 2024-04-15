// Get all the buttons
const buttons = document.querySelectorAll(".btn__general");

buttons.forEach(button => {
	button.addEventListener("click", () => {
		// Remove 'active' class from all buttons
		buttons.forEach(btn => btn.classList.remove("active"));

		// Add 'active' class to the clicked button
		button.classList.add("active");
	});
});
