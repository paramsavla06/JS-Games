const form = document.querySelector('form')

form.addEventListener('submit', (event) => {
	event.preventDefault();
	const height = parseFloat(document.querySelector('#height').value)
	const weight = parseFloat(document.querySelector('#weight').value)
	const results = document.querySelector('#results')

	if(height === '' || height < 0 || isNaN(height)) {
		results.innerHTML = "Please enter a valid height"
	} else if(weight === '' || weight < 0 || isNaN(weight)) {
		results.innerHTML = "Please enter a valid weight"
	} else{
		const bmi = (weight / (height**2/10000)).toFixed(2)
		if(bmi < 18.6) msg = "you are under weight"
		else if(bmi < 24.9 && bmi > 18.6) msg = "you are in normal range"
		if(bmi > 24.9) msg = "you are over weight"
		results.innerHTML = `<span>BMI: ${bmi}, ${msg}</span>`
	}
})