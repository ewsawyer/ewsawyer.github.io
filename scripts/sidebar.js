const sidebar = document.getElementById("sidebar");
const cover = document.getElementById("cover");

function openSidebar() {
	setElementOpen(sidebar, true);
	setElementOpen(cover, true);
}

function closeSidebar() {
	setElementOpen(sidebar, false);
	setElementOpen(cover, false);
}

function setElementOpen(element, isOpen) {
	if (element.classList.contains("open") === isOpen)
		return;

	if (isOpen)
		element.classList.add("open");
	else
		element.classList.remove("open");
}