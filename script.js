// const form = document.querySelector('#display');
// const clear = document.querySelector('#clear');
// const input = document.querySelector('input');
// const equalButton = document.querySelector('#equal');
// const numbersButtons = document.querySelectorAll('.number');
// const operatorButtons = document.querySelectorAll('.operator');

// const add = (a,b) => {
// 	return a+b;
// };

// const subtract = (a,b) => {
//   return a-b;
// };

// const multiply = (a,b) => {
//   return a*b;
// };

// const divide = (a,b) => {
//     return a/b;
// };

// const operate = (operator, a, b) => {
//     console.log("WLAZLEM TU")
//     switch (operator) {
//         case 'add':
//             return add(a,b);
//         case 'substract':
//             return subtract(a,b);
//         case 'multiply':
//             return multiply(a,b);
//         case 'divide': 
//             return divide(a,b);
//         default:
//             console.log('No allowed operator has been provided.')
//     }
// };

// let inputValue = '';
// let tempValue = '';
// let operator = '';
// let inputArrNumbers = [];
// let inputArrOperators = [];
 
// numbersButtons.forEach((button) => {
//     button.addEventListener('click', () => {
//         inputValue += button.id
//         input.setAttribute('value', inputValue);
//         input.value = inputValue;
//         console.log("WARTOSCI", inputArrNumbers)
//     })
// });

// clear.addEventListener('click', () => {
//     form.reset();
//     input.setAttribute('value', '');
//     inputValue = '';
//     inputArrNumbers = [];
//     inputArrOperators = [];
// });

// operatorButtons.forEach((button) => {
//     button.addEventListener('click', () => {
//         inputArrNumbers.push(input.value);
//         inputArrOperators.push(button.id);
//         tempValue = input.value;
//         operator = button.id;
//         form.reset();
//         input.setAttribute('value', '');
//         inputValue = '';
//         console.log("OPERATOR", inputArrOperators)
//     });
// });

// const action = () => {
//     inputArrNumbers.push(input.value);
    
//     const operatorsLength = inputArrOperators.length;
//     console.log("BBBBB", inputArrNumbers, "DZIALANIA", inputArrOperators);

//     let result = 0;

//     for(let i=0; i<operatorsLength; i++) {
//         inputArrNumbers[i+1] = operate(inputArrOperators[i], parseInt(inputArrNumbers[i]), parseInt(inputArrNumbers[i+1]));
//         input.value = inputArrNumbers[i+1];
//         console.log("TABLICA", inputArrNumbers)
//     }

//     result = inputArrNumbers[inputArrNumbers.length-1];
//     input.value = result;
//     console.log("WYNIK", result)
// };

// equalButton.addEventListener('click', action)


