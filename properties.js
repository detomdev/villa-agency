//FAQ drop down
//Bring in all the buttons. This puts them in a node list (array)
const toggles = document.querySelectorAll(".toggle");

// Add a click event listener to each button
toggles.forEach(toggle => {
	toggle.addEventListener("click", () => {
		// Remove the 'active' class from all buttons
		toggles.forEach(toggle => toggle.classList.remove("active"));
		console.log(toggle);
		// Add the 'active' class to the clicked button
		toggle.classList.add("active");

		toggle.style.backgroundColor = "var(--clr-light)";
	});
});

// Get all the buttons
/*const buttons = document.querySelectorAll(".btn__general");

buttons.forEach(button => {
	button.addEventListener("click", () => {
		// Remove 'active' class from all buttons
		buttons.forEach(btn => btn.classList.remove("active"));

		// Add 'active' class to the clicked button
		button.classList.add("active");
	});
});*/

//Button sort code
// Get the container and all the items
const container = document.querySelector(".property__cards");
//Get the divs (items) to be sorted
const items = document.querySelectorAll(".item");
// Get all the buttons
const buttons = document.querySelectorAll(".btn__general");

// Use new Set() to get the unique data-name values from the items.
const uniqueNames = new Set(Array.from(items).map(item => item.getAttribute("data-name")));

// Add click event listeners to the buttons, use replace(' ', '') to remove the spaces from the names.
uniqueNames.forEach(name => {
	document.getElementById(`sort${name.replace(" ", "")}`).addEventListener("click", () => sortByName(name));
});
document.getElementById("selectAll").addEventListener("click", toggleSelectAll);

// Add click event listener to handle active button
buttons.forEach(button => {
	button.addEventListener("click", () => {
		// Remove 'active' class and orange background from all buttons
		buttons.forEach(btn => {
			btn.classList.remove("active");
			btn.style.backgroundColor = "var(--clr-rich-black)";
		});
		// Add 'active' class and orange background to the clicked button
		button.classList.add("active");
		button.style.backgroundColor = "var(--clr-light)";
	});
});

let selectedItems = [];

function sortByName(name) {
	// Convert the NodeList to an array for sorting
	const itemsArray = Array.from(items);

	// Sort the items based on the data-name attribute
	itemsArray.sort((a, b) => {
		const aName = a.getAttribute("data-name");
		const bName = b.getAttribute("data-name");
		if (aName === name) return -1;
		if (bName === name) return 1;
		return 0;
	});

	// Remove all the items from the container
	// while (container.firstChild) {
	// 	container.removeChild(container.firstChild);
	// }

	//Append the sorted items back to the container
	itemsArray.forEach(item => {
		container.appendChild(item);
	});

	// Update the selected items
	selectedItems = itemsArray.filter(item => item.classList.contains("selected"));
}

function toggleSelectAll() {
	items.forEach(item => {
		item.classList.toggle("selected");
	});
	selectedItems = items.length === selectedItems.length ? [] : Array.from(items);
}
