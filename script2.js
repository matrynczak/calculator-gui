const form = document.querySelector('#display');
const clear = document.querySelector('#clear');
const input = document.querySelector('input');
const equalButton = document.querySelector('#equal');
const numbersButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');

const add = (a,b) => {
	return a+b;
};

const subtract = (a,b) => {
  return a-b;
};

const multiply = (a,b) => {
  return a*b;
};

const divide = (a,b) => {
    if(b===0) return 'Once you divide by 0 panda is crying!';
    return a/b;
};

const operate = (operator, a, b) => {
    switch (operator) {
        case 'add':
            return add(a,b);
        case 'substract':
            return subtract(a,b);
        case 'multiply':
            return multiply(a,b);
        case 'divide': 
            return divide(a,b);
        default:
            console.log('No allowed operator has been provided.')
    }
};

let inputValue = '';
let inputArrNumbers = [];
let inputArrOperators = [];
 
numbersButtons.forEach((button) => {
    button.addEventListener('click', () => {
        input.setAttribute('value', '');
        inputValue += button.id;
        input.setAttribute('value', inputValue);
        input.value = inputValue;
    })
});

clear.addEventListener('click', () => {
    form.reset();
    input.setAttribute('value', '0');
    inputValue = '';
    inputArrNumbers = [];
    inputArrOperators = [];
});

operatorButtons.forEach((button) => {
    button.addEventListener('click', () => {
        inputArrNumbers.push(input.value);
        input.setAttribute('value', '');
        inputValue = '';
        inputArrOperators.push(button.id);
        if(inputArrNumbers.length > 1) {
            inputArrNumbers[inputArrNumbers.length-1] = operate(inputArrOperators[inputArrOperators.length-2], parseFloat(inputArrNumbers[inputArrNumbers.length-2]), parseFloat(inputArrNumbers[inputArrNumbers.length-1]));
        }
        input.setAttribute('value', inputArrNumbers[inputArrNumbers.length-1]);
        input.value = inputArrNumbers[inputArrNumbers.length-1];
    });
});

const action = () => {
    inputArrNumbers.push(input.value);
    let result = 0;
    result = operate(inputArrOperators[inputArrOperators.length-1], parseFloat(inputArrNumbers[inputArrNumbers.length-2]), parseFloat(inputArrNumbers[inputArrNumbers.length-1]));
    if(inputArrNumbers.length === 1) result = Number(inputArrNumbers[0]); 
    if(!Number.isInteger(result)) {
        result = parseFloat(result).toFixed(5);
    }
    input.value = result;
    inputArrNumbers = [];
};

equalButton.addEventListener('click', action);