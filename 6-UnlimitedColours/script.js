const start = document.querySelector('#start')
const stop = document.querySelector('#stop')

const randomColour = function() {
	const hex = '0123456789ABCDEF'
	let colour = '#' 
	for(let i = 0; i < 6 ; i++) {
		colour += hex[Math.round(Math.random() * 16)]
	}
	return colour
}

let intervalId;
const startChanging = () => {
	if(!intervalId) {
		intervalId = setInterval(changeBgColour, 1000)
	}

	function changeBgColour() {
		document.body.style.backgroundColor = randomColour();
	}
}

const stopChanging = () => {
	clearInterval(intervalId)
	intervalId = null
}

start.addEventListener('click', startChanging)
stop.addEventListener('click', stopChanging)