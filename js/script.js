import { Modal } from './modal.js';
import { AlertError } from './alert-error.js';
import { calculateIMC, notANumber } from './utils.js';

/* variables */
const form = document.querySelector('form');
const inputWeight = document.querySelector('#weight');
const inputHeight = document.querySelector('#height');

inputWeight.oninput = () => AlertError.close()
inputHeight.oninput = () => AlertError.close()
form.onsubmit = event => {
  event.preventDefault();

  const weight = inputWeight.value;
  const height = inputHeight.value;

  const heightOrWeightIsNotANumber = notANumber(weight) || notANumber(height);

  if(heightOrWeightIsNotANumber) {
    AlertError.open()
    return;
  } 

  AlertError.close()

  const result = calculateIMC(weight, height);
  displayResultMessage(result);
};

function displayResultMessage (result) {
  const message = `Seu IMC é de ${result}`;
  
  Modal.message.innerHTML = message;
  Modal.open();
};