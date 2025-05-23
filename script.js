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

function updateDisplay(content, shouldAppend) {
    if (!shouldAppend) {
        display.textContent = content;
    } 
    else if (display.textContent.length < 9) {
        display.textContent += content;
    }
}

function updateNumber(newNum) {
    if (operator && !num2) {
        updateDisplay('0');
    }
    (display.textContent == '0') ? updateDisplay(newNum) : updateDisplay(newNum, true);
    (num1 == null || operator == null) ? num1 = Number(display.textContent) : num2 = Number(display.textContent);
}

function updateOperator(newOperator) {
    if (num1 != null && num2 != null) {
        const result = operate(num1, num2, operator);
        updateDisplay(result);
        (isNaN(result)) ? num1 = null : num1 = result;
        num2 = null;
    }
    operator = newOperator;
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