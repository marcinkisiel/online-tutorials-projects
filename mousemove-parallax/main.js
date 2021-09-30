document.addEventListener('mousemove', parallax);

function parallax(e) {
	this.querySelectorAll('.parallax__layer--js').forEach(layer => {
		let x = (window.innerWidth - e.pageX * 10) / 100;
		let y = (window.innerHeight - e.pageY * 10) / 100;
		layer.style.transform = `translate(${x}px, ${y}px)`;
	});
}
