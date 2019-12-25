const hours = document.querySelector('.clock__box-hours--js');
const minutes = document.querySelector('.clock__box-minutes--js');
const seconds = document.querySelector('.clock__box-seconds--js');

function clock() {
	let currentHours = new Date().getHours();
	let currentMinutes = new Date().getMinutes();
	let currentSeconds = new Date().getSeconds();

	hours.innerHTML = currentHours;
	minutes.innerHTML = currentMinutes;
	if (currentSeconds < 10) {
		seconds.innerHTML = `0${currentSeconds}`;
	} else {
		seconds.innerHTML = currentSeconds;
	}
}

let interval = setInterval(clock, 1000);
