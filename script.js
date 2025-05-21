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
        case '-':
            return subtract(num1, num2);
        case '*':
            return multiply(num1, num2);
        case '/':
            return divide(num1, num2);
    }
}

function updateDisplay(content, shouldAppend) {
    (shouldAppend) ? display.textContent += content : display.textContent = content;
}

function buttonClicked(event) {
    const button = event.target;
    const content = button.textContent;

    if (button.classList.contains('number')) {
        (display.textContent == '0' || display.textContent == operator) ? updateDisplay(content) : updateDisplay(content, true);
        (operator == null) ? num1 = Number(display.textContent) : num2 = Number(display.textContent);
    } 
    else if (button.classList.contains('operator')) {
        updateDisplay(content);
        operator = content; 
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