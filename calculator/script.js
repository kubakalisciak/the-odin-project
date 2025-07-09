// basic calculation functions
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

// basic logic
number1, number2 = 0;
operator = '';

function operate(num1, num2, operator) {
    switch (operator) {
        case '+':
            add(num1, num2);
            break;
        case '-':
            add(num1, num2);
            break;
        case '*':
            add(num1, num2);
            break;
        case '/':
            add(num1, num2);
            break;
        default:
            break;
    }
}