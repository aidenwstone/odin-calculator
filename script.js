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

function buttonClicked(event) {
    const button = event.target;
    const content = button.textContent;

    if (button.classList.contains('number')) {
        (display.textContent == '0' || display.textContent == operator) ? display.textContent = content : display.textContent += content;
        (operator == null) ? num1 = display.textContent : num2 = display.textContent;
    } 
    else if (button.classList.contains('operator')) {
        display.textContent = content;
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