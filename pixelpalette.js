function animateGradient(event) {
	let x = event.clientX;
	let y = event.clientY;

	// x -= window.innerWidth / 2;
	// y -= window.innerHeight / 2;

	document.querySelectorAll('h1, h2').forEach(element => {
		const rect = element.getBoundingClientRect();
		const elementX = (rect.right - rect.left) / 2;
		const elementY = (rect.top - rect.bottom) / 2;

		const xOffset = x - elementX;
		const yOffset = y - elementY;
		
		let angle = Math.atan(yOffset/xOffset) * 180.0 / Math.PI;
		if(xOffset < 0)
			angle += 180
		console.log(angle)

		element.style.backgroundImage = `linear-gradient(${angle}deg, rgb(255, 238, 0) 0%, rgba(232,132,224,1) 49%, rgba(85,210,88,1) 80%)`;
	})

	// document.documentElement.style.setProperty('--gradient-angle', `${angle}deg`)
}

document.onmousemove = animateGradient