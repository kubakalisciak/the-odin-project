// Math functions
function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    return a / b;
}

// Operation logic
function operate(num1, num2, operator) {
    switch (operator) {
        case '+':
            return add(num1, num2);
        case '-':
            return subtract(num1, num2);
        case '*':
            return multiply(num1, num2);
        case '/':
            if (num2 === 0) {
                alert("Cannot divide by zero.");
                return 0;
            }
            return divide(num1, num2);
        default:
            return "Error";
    }
}

// Display logic
let operationDisplayContent = "";
let resultDisplayContent = "";
const operationDisplay = document.getElementById('operationDisplay');
const resultDisplay = document.getElementById('resultDisplay');

function updateDisplay(object, content) {
    object.textContent = content;
}

// Digit button handler
function addDigit(digit) {
    operationDisplayContent += digit;
    updateDisplay(operationDisplay, operationDisplayContent);
    updateDisplay(resultDisplay, "");
}

// Operator button handler
function addOperator(operator) {
    let parts = operationDisplayContent.trim().split(' ');

    // If expression is complete: evaluate it
    if (parts.length === 3) {
        let number1 = parseFloat(parts[0]);
        let operator = parts[1];
        let number2 = parseFloat(parts[2]);

        if (!isNaN(number1) && !isNaN(number2)) {
            let result = operate(number1, number2, operator);
            resultDisplayContent = result;
            updateDisplay(resultDisplay, Number.isInteger(result) ? result : result.toFixed(2));
            operationDisplayContent = `${result} ${operator} `;
        }
    }
    // Only use previous result if nothing has been typed yet
    else if (operationDisplayContent.trim() === "" && resultDisplayContent !== "") {
        operationDisplayContent = `${resultDisplayContent} ${operator} `;
    }
    // Replace operator if second operator pressed in a row
    else if (parts.length === 2) {
        parts[1] = operator;
        operationDisplayContent = parts.join(' ') + ' ';
    }
    // Otherwise, just append the operator
    else {
        operationDisplayContent += ` ${operator} `;
    }

    updateDisplay(operationDisplay, operationDisplayContent);
}


// Digit buttons
document.getElementById('button1').addEventListener('click', () => addDigit("1"));
document.getElementById('button2').addEventListener('click', () => addDigit("2"));
document.getElementById('button3').addEventListener('click', () => addDigit("3"));
document.getElementById('button4').addEventListener('click', () => addDigit("4"));
document.getElementById('button5').addEventListener('click', () => addDigit("5"));
document.getElementById('button6').addEventListener('click', () => addDigit("6"));
document.getElementById('button7').addEventListener('click', () => addDigit("7"));
document.getElementById('button8').addEventListener('click', () => addDigit("8"));
document.getElementById('button9').addEventListener('click', () => addDigit("9"));
document.getElementById('button0').addEventListener('click', () => addDigit("0"));

// Operator buttons
document.getElementById('buttonPlus').addEventListener('click', () => addOperator("+"));
document.getElementById('buttonMinus').addEventListener('click', () => addOperator("-"));
document.getElementById('buttonMultiply').addEventListener('click', () => addOperator("*"));
document.getElementById('buttonDivide').addEventListener('click', () => addOperator("/"));

// Clear button
document.getElementById('buttonClear').addEventListener('click', () => {
    operationDisplayContent = "";
    resultDisplayContent = "";
    updateDisplay(operationDisplay, "");
    updateDisplay(resultDisplay, "");
});

// Equals button
document.getElementById('buttonEquals').addEventListener('click', () => {
    let parts = operationDisplayContent.trim().split(' ');
    if (parts.length === 3) {
        let number1 = parseFloat(parts[0]);
        let operator = parts[1];
        let number2 = parseFloat(parts[2]);

        if (!isNaN(number1) && !isNaN(number2)) {
            let result = operate(number1, number2, operator);
            resultDisplayContent = result;
            updateDisplay(resultDisplay, Number.isInteger(result) ? result : result.toFixed(2));
            operationDisplayContent = "";
            updateDisplay(operationDisplay, "");
        }
    }
    // powers logic
    if (parts.length == 2) {
        let number1 = parseFloat(parts[0]);
        let operator = parts[1];
        if (operator == '*') {
            if (!isNaN(number1)) {
            let result = operate(number1, number1, operator);
            resultDisplayContent = result;
            updateDisplay(resultDisplay, Number.isInteger(result) ? result : result.toFixed(2));
            operationDisplayContent = "";
            updateDisplay(operationDisplay, "");
            }
        }
    }
});

// Delete button
document.getElementById('buttonDelete').addEventListener('click', () => {
    let noSpaces = operationDisplayContent.split(' ').join('');
    let shortened = noSpaces.slice(0, -1);
    let formatted = '';
    for (let i = 0; i < shortened.length; i++) {
        let char = shortened[i];
        if (['+', '-', '*', '/'].includes(char)) {
            formatted += ` ${char} `;
        } else {
            formatted += char;
        }
    }
    operationDisplayContent = formatted;
    updateDisplay(operationDisplay, operationDisplayContent);
});