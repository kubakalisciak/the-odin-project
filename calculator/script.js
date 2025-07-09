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
            if (num2 == 0) {
                alert("no.")
                return 0
            }
            return divide(num1, num2);
        default:
            return "Error";
    }
}

// Display logic
let operationDisplayContent = "";
const operationDisplay = document.getElementById('operationDisplay');
const resultDisplay = document.getElementById('resultDisplay');

function updateDisplay(object, content) {
    object.textContent = content;
}

// Digit button handler
function addDigit(digit) {
    operationDisplayContent += digit;
    updateDisplay(operationDisplay, operationDisplayContent);
}

// Operator button handler
function addOperator(op) {
    operationDisplayContent += ` ${op} `;
    updateDisplay(operationDisplay, operationDisplayContent);
    // TODO: add "jump from equals"
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
    let [num1Str, operator, num2Str] = operationDisplayContent.split(' ');
    let number1 = parseFloat(num1Str);
    let number2 = parseFloat(num2Str);
    
    resultDisplayContent = operate(number1, number2, operator);
    if (resultDisplayContent == parseInt(resultDisplayContent)) {
        updateDisplay(resultDisplay, resultDisplayContent);
    }
    else {
        updateDisplay(resultDisplay, resultDisplayContent).toFixed(2);
    }
    operationDisplayContent = "";
});
