const buttons = document.querySelectorAll('.button');
const buttons2 = document.querySelectorAll('.button2');
const body = document.querySelector('body');

buttons.forEach((button) => {
  button.addEventListener('click', (events) => 	body.style.backgroundColor = events.target.id)
});

buttons2.forEach((button2) => {
	button2.addEventListener('click', () => button2.style.backgroundColor = 'orange')
});