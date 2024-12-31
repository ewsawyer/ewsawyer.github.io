// For selecting between playable and video
const play = document.querySelector("#play-selector");
const watch = document.querySelector("#watch-selector");
const playable = document.querySelector("#playable");
const watchable = document.querySelector("#watchable");

// Button that loads the unity demo
const btnLoad = document.querySelector(".btn-load");

// Show the playable
play.addEventListener('click', () => {
	play.classList.add('active');
	watch.classList.remove('active');
	playable.classList.remove('hidden');
	watchable.classList.add('hidden');
	btnLoad.classList.remove('hidden');
});

// Show the video
watch.addEventListener('click', () => {
	watch.classList.add('active');
	play.classList.remove('active');
	watchable.classList.remove('hidden');
	playable.classList.add('hidden');
	btnLoad.classList.add('hidden');
});

// Load the playable demo
btnLoad.addEventListener('click', () => {
	btnLoad.classList.add("fully-hidden");
	const link = playable.getAttribute("demo-link");
	playable.setAttribute("src", link);
});