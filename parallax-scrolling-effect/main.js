let layer1 = document.querySelector('.parallax__layer-1--js');
scroll = window.pageYOffset;
document.addEventListener('scroll', e => {
	let offset = window.pageYOffset;
	scroll = offset;
	layer1.style.width = 100 + scroll / 5 + '%';
});

let layer2 = document.querySelector('.parallax__layer-2--js');
scroll = window.pageYOffset;
document.addEventListener('scroll', e => {
	let offset = window.pageYOffset;
	scroll = offset;
	layer2.style.width = 100 + scroll / 5 + '%';
	layer2.style.left = scroll / 50 + '%';
});

let textLayer = document.querySelector('.parallax__text-layer--js');
scroll = window.pageYOffset;
document.addEventListener('scroll', e => {
	let offset = window.pageYOffset;
	scroll = offset;
	textLayer.style.top = -scroll / 10 + '%';
});
