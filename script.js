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

function formatForDisplay(num) {
    let formattedNum = num;
    let length = MAX_LENGTH;

    while (formattedNum.toString().length > MAX_LENGTH) {
        formattedNum = num.toPrecision(length);
        length--;
    }

    return formattedNum;
}

function updateDisplay(newContent) {
    display.textContent = formatForDisplay(newContent);
}

function updateResult() {
    result = operate(num1, num2, operator);
    num1 = Number(result);
    num2 = null;
    updateDisplay(result);
}

function updateNumber(newNum) {
    if (operator == null) {
        if (num1 == null) {
            num1 = Number(newNum);
        }
        else if (num1.toString().length < MAX_LENGTH) {
            num1 = Number(num1 + newNum.toString());
        }
        updateDisplay(num1);
    }
    else {
        if (num2 == null) {
            num2 = Number(newNum);
        }
        else if (num1.toString().length < MAX_LENGTH) {
            num2 = Number(num2 + newNum.toString());
        }
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
    result = null;
    updateDisplay('0');
}

function buttonClicked(event) {
    const button = event.target;
    const content = button.textContent;

    if (button.classList.contains('number')) {
        updateNumber(content);
    } 
    else if (content == '=') {
        if (num1 != null && num2 != null) {
            updateResult();
            operator = null;
            num1 = null;
        }
    }
    else if (button.classList.contains('operator')) {
        if (num1 != null && num2 != null) {
            updateResult();
        }
        else if (num1 == null && result != null) {
            updateNumber(result);
        }
        updateOperator(content);
    }
    else if (content == 'AC') {
        clearDisplay();
    }
}

const display = document.querySelector('.display');
const buttons = document.querySelectorAll('button');
const MAX_LENGTH = 9;

let num1 = null;
let num2 = null;
let operator = null;
let result = null;

buttons.forEach((button) => {
    button:addEventListener('click', buttonClicked);
});