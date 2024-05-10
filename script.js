document.addEventListener("DOMContentLoaded", (event) => {
	const form = document.querySelector(".form");
	form.addEventListener("submit", (event) => {
		event.preventDefault();
		const input = document.querySelector(".date");
		const bdate = new Date(input.value);
		const bYear = bdate.getFullYear();
		const curDate = new Date();
		const curYear = curDate.getFullYear();
		const age = curYear - bYear;
		const div = document.querySelector("div.age-div");
		div.textContent = age;
	});
});
