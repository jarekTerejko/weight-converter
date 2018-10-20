 const output = document.getElementById('output');
 output.style.display = 'none';


 const firstLabel = document.querySelector('#label-1');
 const secondLabel = document.querySelector('#label-2');
 const thirdLabel = document.querySelector('#label-3');
 const firstOutput = document.querySelector('#output-1')
 const secondOutput = document.querySelector('#output-2')
 const thirdOutput = document.querySelector('#output-3')

 const errorContainer = document.createElement('div');
 const errorbodyCont = document.createElement('div');
 const errorTitleCont = document.createElement('h4');
 const erroMsgCont = document.createElement('p');
 errorContainer.classList.add('card', 'bg-danger', 'mb-2');
 errorbodyCont.classList.add('card-body');
 errorTitleCont.classList.add('card-title');
 erroMsgCont.classList.add('card-text');


 errorContainer.appendChild(errorbodyCont);
 errorbodyCont.appendChild(errorTitleCont);
 errorbodyCont.appendChild(erroMsgCont);

 errorTitleCont.textContent = 'Podczas obliczeń wystąpił błąd :(';
 erroMsgCont.textContent = 'Wprowadź prawidłową wartość liczbową do pola Masa';

 const weightForm = document.querySelector('form').addEventListener('submit', e => {
 	e.preventDefault();

 	if (errorContainer) {
 		errorContainer.remove();
 	}

 	output.style.display = 'block';

 	const weightFrom = document.querySelector('#select-weight').value;
 	const inputWeight = parseFloat(document.querySelector('#input-weight').value);

 	//	console.log(weightFrom);
 	//	console.log(inputWeight);
 	console.log(typeof inputWeight);
 	console.log(inputWeight);

 	if (!isFinite(inputWeight)) {

 		console.log(typeof inputWeight);
 		console.log(inputWeight);

 		output.style.display = 'none';

 		document.querySelector('.col-md-6').insertBefore(errorContainer, output);


 	} else if (weightFrom === 'lbs-input') {

 		firstLabel.textContent = 'gram [g]';
 		firstOutput.textContent = (inputWeight / 0.0022046).toFixed(4);

 		secondLabel.textContent = 'kilogram [kg]';
 		secondOutput.textContent = (inputWeight / 2.2046).toFixed(4);

 		thirdLabel.textContent = 'uncja [oz]';
 		thirdOutput.textContent = (inputWeight * 16).toFixed(4);

 	} else if (weightFrom === 'grams-input') {

 		firstLabel.textContent = 'funt [lb]';
 		firstOutput.textContent = (inputWeight * 0.0022046).toFixed(4);

 		secondLabel.textContent = 'kilogram [kg]';
 		secondOutput.textContent = (inputWeight / 1000).toFixed(4);

 		thirdLabel.textContent = 'uncja [oz]';
 		thirdOutput.textContent = (inputWeight * 0.0352736).toFixed(4);

 	} else if (weightFrom === 'kilos-input') {

 		firstLabel.textContent = 'funt [lb]';
 		firstOutput.textContent = (inputWeight * 2.2046).toFixed(4);

 		secondLabel.textContent = 'gram [g]';
 		secondOutput.textContent = (inputWeight * 1000).toFixed(4);

 		thirdLabel.textContent = 'uncja [oz]';
 		thirdOutput.textContent = (inputWeight * 35.2736).toFixed(4);

 	} else if (weightFrom === 'ounces-input') {

 		firstLabel.textContent = 'funt [lb]';
 		firstOutput.textContent = (inputWeight / 16).toFixed(4);

 		secondLabel.textContent = 'kilogram [kg]';
 		secondOutput.textContent = (inputWeight / 35.2736).toFixed(4);

 		thirdLabel.textContent = 'gram [g]';
 		thirdOutput.textContent = (inputWeight / 0.0352736).toFixed(4);

 	}

 });
