function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function operate(num1, num2, operator) {
    switch (operator) {
        case '+':
            return add(num1, num2);
        case '−':
            return subtract(num1, num2);
        case '×':
            return multiply(num1, num2);
        case '÷':
            return (num2 == 0) ? 'Really?' : divide(num1, num2);
    }
}

function updateDisplay(newContent) {
    display.textContent = newContent;
}

function updateNumber(newNum) {
    if (operator == null) {
        (num1 == null) ? num1 = newNum : num1 += newNum.toString();
        updateDisplay(num1);
    }
    else {
        (num2 == null) ? num2 = newNum : num2 += newNum.toString();
        updateDisplay(num2);
    }
}

function updateOperator(newOperator) {
    if (num1 != null && newOperator != '=') {
        operator = newOperator;
    }
}

function clearDisplay() {
    num1 = null;
    num2 = null;
    operator = null;
    updateDisplay('0');
}

function buttonClicked(event) {
    const button = event.target;
    const content = button.textContent;

    if (button.classList.contains('number')) {
        updateNumber(content);
    } 
    else if (button.classList.contains('operator')) {
        updateOperator(content);
    }
    else if (content == 'AC') {
        clearDisplay();
    }
}

const display = document.querySelector('.display');
const buttons = document.querySelectorAll('button');

let num1 = null;
let num2 = null;
let operator = null;

buttons.forEach((button) => {
    button:addEventListener('click', buttonClicked);
});