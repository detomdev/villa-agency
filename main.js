const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav--primary");

navToggle.addEventListener("click", () => {
	nav.classList.toggle("nav--visible");
});
