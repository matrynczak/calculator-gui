export const add = (a,b) => {
	return a+b;
};

export const subtract = (a,b) => {
  return a-b;
};

export const multiply = (a,b) => {
  return a*b;
};

export const divide = (a,b) => {
    return a/b;
};

export const operate = (operator, a, b) => {
    switch (operator) {
        case 'add':
            add(a,b);
            break;
        case 'substract':
            subtract(a,b);
            break;
        case 'multiply':
            multiply(a,b);
            break;
        case 'divide': 
            divide(a,b);
            break;
        default:
            console.log('No allowed operator has been provided.')
    }
};


