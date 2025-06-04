// Get references to examinable objects
let examinables = document.querySelectorAll(".examinable, article > img");
let examineOverlay = document.querySelector("#examine-overlay");
let examineContainer = document.querySelector("#examine-container")
// Reference to element currently being examined
let current = null;

// Clicking on an examineable opens it
examinables.forEach(e => e.addEventListener('click', () => examine(e)));
// Clicking on the overlay closes the examinable
examineOverlay.addEventListener('click', closeExamined);

// Opens an element for examination
function examine(element) {
	current = element;
	element.classList.add('examined');
	examineContainer.innerHTML = element.outerHTML;

	if (element?.nextElementSibling?.classList.contains("caption"))
		examineContainer.innerHTML += element.nextElementSibling.outerHTML;

	examineOverlay.classList.add("overlay-active")
}

// Closes the currently examined element
function closeExamined() {
	current.classList.remove('examined');
	current = null;
	examineContainer.innerHTML = "";
	examineOverlay.classList.remove("overlay-active");
}