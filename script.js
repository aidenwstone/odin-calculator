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
        display.textContent == '0' ? display.textContent = content : display.textContent += content;
        num1 = display.textContent;
    }
}

const display = document.querySelector('.display');
const buttons = document.querySelectorAll('button');

let num1;
let num2;
let operator;

buttons.forEach((button) => {
    button:addEventListener('click', buttonClicked);
});