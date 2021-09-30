const countDate = new Date('Jan 1, 2022 00:00:00').getTime();

function newYear() {
	let now = new Date().getTime();
	let gap = countDate - now;

	let second = 1000;
	let minute = second * 60;
	let hour = minute * 60;
	let day = hour * 24;

	let d = Math.floor(gap / day);
	let h = Math.floor((gap % day) / hour);
	let m = Math.floor((gap % hour) / minute);
	let s = Math.floor((gap % minute) / second);

	document.querySelector('.countdown__day--js').innerHTML = d;
	document.querySelector('.countdown__hour--js').innerHTML = h;
	document.querySelector('.countdown__minute--js').innerHTML = m;
	document.querySelector('.countdown__second--js').innerHTML = s;
}

setInterval(newYear, 1000);
