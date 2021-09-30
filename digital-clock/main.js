const hours = document.querySelector('.clock__box-hours--js');
const minutes = document.querySelector('.clock__box-minutes--js');
const seconds = document.querySelector('.clock__box-seconds--js');

function clock() {
	let currentHours = new Date().getHours();
	let currentMinutes = new Date().getMinutes();
	let currentSeconds = new Date().getSeconds();

	function changeTime(currentTime, timeSelector) {
		if (currentTime < 10) {
			timeSelector.innerHTML = `0${currentTime}`;
		} else {
			timeSelector.innerHTML = currentTime;
		}
	}

	changeTime(currentHours, hours);
	changeTime(currentMinutes, minutes);
	changeTime(currentSeconds, seconds);
}

let interval = setInterval(clock, 1000);
